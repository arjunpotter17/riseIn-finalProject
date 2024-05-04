import { FC, ReactNode, useMemo } from "react";
import {
    ConnectionProvider,
    WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import * as web3 from "@solana/web3.js";
/* eslint-disable */
// @ts-ignore
import * as walletAdapterWallets from "@solana/wallet-adapter-wallets";
/* eslint-enable */

require("@solana/wallet-adapter-react-ui/styles.css");

const WalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const endpoint = web3.clusterApiUrl("devnet");
    const wallets = useMemo(() => {
        return [
            new walletAdapterWallets.PhantomWalletAdapter(),
            new walletAdapterWallets.SolflareWalletAdapter(),
        ];
    }, []);

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect={true}>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default WalletContextProvider;
