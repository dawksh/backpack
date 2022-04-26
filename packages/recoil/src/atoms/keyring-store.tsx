import { atom } from "recoil";
import {
  UI_RPC_METHOD_KEYRING_STORE_STATE,
  UI_RPC_METHOD_APPROVED_ORIGINS_READ,
} from "@200ms/common";
import { getBackgroundClient } from "../background";

export type KeyringStoreState = "locked" | "unlocked" | "needs-onboarding";

export const KeyringStoreStateEnum: { [key: string]: KeyringStoreState } = {
  Locked: "locked",
  Unlocked: "unlocked",
  NeedsOnboarding: "needs-onboarding",
};

/**
 * Status of the keyring store.
 */
export const keyringStoreState = atom<KeyringStoreState | null>({
  key: "keyringStoreState",
  default: null,
  effects: [
    ({ setSelf }) => {
      const background = getBackgroundClient();
      setSelf(
        background.request({
          method: UI_RPC_METHOD_KEYRING_STORE_STATE,
          params: [],
        })
      );
    },
  ],
});

export const approvedOrigins = atom<Array<string> | null>({
  key: "approvedOrigins",
  default: null,
  effects: [
    ({ setSelf }) => {
      const background = getBackgroundClient();
      setSelf(
        background.request({
          method: UI_RPC_METHOD_APPROVED_ORIGINS_READ,
          params: [],
        })
      );
    },
  ],
});