import { PublicKey, Transaction } from "@solana/web3.js";
import { Connection } from "@solana/web3.js";
import { useRecoilValue, constSelector } from "recoil";
import * as atoms from "../recoil/atoms";
import { useKeyringStoreState } from "../hooks/useKeyringStoreState";
import { KeyringStoreStateEnum } from "../keyring/store";
import { useLoadSplTokens } from "../hooks/useLoadSplTokens";

// Bootstrap data for the initial load.
export function useBootstrap() {
  useRecoilValue(atoms.bootstrap);
}

export function useBootstrapFast() {
  useRecoilValue(atoms.bootstrapFast);
}

export function useBackgroundPoll() {
  useLoadSplTokens();
}

export function useSolanaWallet(): SolanaWallet {
  return useRecoilValue(atoms.solanaWallet)!;
}

export function useWalletPublicKeys(): {
  hdPublicKeys: Array<{
    publicKey: PublicKey;
    name: string;
  }>;
  importedPublicKeys: Array<{
    publicKey: PublicKey;
    name: string;
  }>;
} {
  const keyringStoreState = useKeyringStoreState();
  const isLocked = keyringStoreState === KeyringStoreStateEnum.Locked;
  // @ts-ignore
  const keys = useRecoilValue(
    isLocked
      ? constSelector({ hdPublicKeys: [], importedPublicKeys: [] })
      : atoms.walletPublicKeys
  );
  return {
    hdPublicKeys: keys.hdPublicKeys.map((k) => {
      return {
        publicKey: new PublicKey(k.publicKey),
        name: k.name,
      };
    }),
    importedPublicKeys: keys.importedPublicKeys.map((k) => {
      return {
        publicKey: new PublicKey(k.publicKey),
        name: k.name,
      };
    }),
  };
}

export function useActiveWallet(): { publicKey: PublicKey; name: string } {
  const { publicKey, name } = useRecoilValue(atoms.activeWalletWithName)!;
  return {
    publicKey: new PublicKey(publicKey),
    name,
  };
}

export type ConnectionContext = {
  connection: Connection;
  connectionUrl: string;
  setConnectionUrl: (url: string) => void;
};

interface Wallet {
  publicKey: string;
  signTransaction(tx: any): any;
}

export class SolanaWallet {
  constructor(readonly publicKey: PublicKey) {}

  signTransaction(tx: Transaction): Transaction {
    // todo
    return tx;
  }
}