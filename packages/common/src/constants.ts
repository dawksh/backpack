export const CHANNEL_RPC_REQUEST = "anchor-rpc-request";
export const CHANNEL_RPC_RESPONSE = "anchor-rpc-response";
export const CHANNEL_NOTIFICATION = "anchor-notification";

export const RPC_METHOD_CONNECT = "connect";
export const RPC_METHOD_DISCONNECT = "disconnect";
export const RPC_METHOD_SIGN_AND_SEND_TX = "sign-and-send-tx";
export const RPC_METHOD_SIGN_TX = "sign-tx";
export const RPC_METHOD_SIGN_ALL_TXS = "sign-all-txs";
export const RPC_METHOD_SIGN_MESSAGE = "sign-message";
export const RPC_METHOD_SIMULATE = "simulate";

export const UI_RPC_METHOD_NOTIFICATIONS_SUBSCRIBE = "notifications-subscribe";
export const UI_RPC_METHOD_KEYRING_STORE_CREATE = "keyring-store-create";
export const UI_RPC_METHOD_KEYRING_STORE_READ_ALL_PUBKEYS =
  "keyring-read-all-pubkeys";
export const UI_RPC_METHOD_KEYRING_STORE_STATE = "keyring-store-state";
export const UI_RPC_METHOD_APPROVED_ORIGINS_READ = "approved-origins-read";
export const UI_RPC_METHOD_APPROVED_ORIGINS_UPDATE = "approved-origins-update";
export const UI_RPC_METHOD_KEYRING_STORE_KEEP_ALIVE =
  "keyring-store-keep-alive";
export const UI_RPC_METHOD_KEYRING_STORE_UNLOCK = "keyring-store-unlock";
export const UI_RPC_METHOD_KEYRING_STORE_LOCK = "keyring-store-lock";
export const UI_RPC_METHOD_HD_KEYRING_CREATE = "hd-keyring-create";
export const UI_RPC_METHOD_KEYRING_CREATE = "keyring-create";
export const UI_RPC_METHOD_KEYRING_DERIVE_WALLET = "keyring-derive";
export const UI_RPC_METHOD_KEYRING_KEY_DELETE = "keyring-delete";
export const UI_RPC_METHOD_KEYRING_IMPORT_SECRET_KEY = "keyring-import-wallet";

export const UI_RPC_METHOD_CONNECTION_URL_READ = "connection-url-read";
export const UI_RPC_METHOD_CONNECTION_URL_UPDATE = "connection-url-update";
export const UI_RPC_METHOD_WALLET_DATA_ACTIVE_WALLET = "wallet-active";
export const UI_RPC_METHOD_WALLET_DATA_ACTIVE_WALLET_UPDATE =
  "wallet-active-update";
export const UI_RPC_METHOD_KEYNAME_UPDATE = "keyname-update";
export const UI_RPC_METHOD_PASSWORD_UPDATE = "password-update";
export const UI_RPC_METHOD_KEYRING_EXPORT_SECRET_KEY = "export-secret-key";
export const UI_RPC_METHOD_KEYRING_EXPORT_MNEMONIC = "export-mnemonic";
export const UI_RPC_METHOD_KEYRING_RESET_MNEMONIC = "reset-mnemonic";
export const UI_RPC_METHOD_KEYRING_AUTOLOCK_UPDATE = "autolock-update";
export const UI_RPC_METHOD_NAVIGATION_UPDATE = "navigation-update";
export const UI_RPC_METHOD_NAVIGATION_READ = "navigation-read";
export const UI_RPC_METHOD_NAVIGATION_ACTIVE_TAB_READ =
  "navigation-active-tab-read";
export const UI_RPC_METHOD_NAVIGATION_ACTIVE_TAB_UPDATE =
  "navigation-active-tab-update";
export const UI_RPC_METHOD_SETTINGS_DARK_MODE_READ = "settings-dark-mode-read";
export const UI_RPC_METHOD_SETTINGS_DARK_MODE_UPDATE =
  "settings-dark-mode-update";
export const UI_RPC_METHOD_SOLANA_COMMITMENT_READ = "solana-commitment-read";
export const UI_RPC_METHOD_SOLANA_COMMITMENT_UPDATE =
  "solana-commitment-update";
export const UI_RPC_METHOD_SIGN_TRANSACTION = "ui-rpc-method-sign-tx";
export const UI_RPC_METHOD_SIGN_ALL_TRANSACTIONS = "ui-rpc-method-sign-all-txs";
export const UI_RPC_METHOD_SIGN_AND_SEND_TRANSACTION =
  "ui-rpc-method-sign-and-send-tx";
export const UI_RPC_METHOD_LEDGER_CONNECT = "ui-rpc-method-ledger-connect";
export const UI_RPC_METHOD_LEDGER_IMPORT = "ledger-import";

export const NOTIFICATION_CONNECTED = "anchor-connected";
export const NOTIFICATION_DISCONNECTED = "anchor-disconnected";
export const NOTIFICATION_KEYRING_STORE_LOCKED =
  "notification-keyring-store-locked";
export const NOTIFICATION_KEYRING_STORE_UNLOCKED =
  "notification-keyring-store-unlocked";
export const NOTIFICATION_CONNECTION_URL_UPDATED =
  "anchor-connection-url-updated";
export const NOTIFICATION_KEYNAME_UPDATE = "anchor-keyname-update";
export const NOTIFICATION_KEYRING_KEY_DELETE = "anchor-keyring-key-delete";
export const NOTIFICATION_KEYRING_DERIVED_WALLET =
  "anchor-keyring-derived-wallet";
export const NOTIFICATION_ACTIVE_WALLET_UPDATED =
  "anchor-kerying-active-wallet-updated";
export const NOTIFICATION_KEYRING_IMPORTED_SECRET_KEY =
  "anchor-keyring-imported-secret-key";
export const NOTIFICATION_KEYRING_RESET_MNEMONIC =
  "anchor-keyring-reset-mnemonic";
export const NOTIFICATION_KEYRING_CREATED = "anchor-keyring-created";
export const NOTIFICATION_APPROVED_ORIGINS_UPDATE =
  "anchor-approved-origins-update";
export const NOTIFICATION_BLOCKHASH_DID_UPDATE = "anchor-blockhash-did-update";
export const NOTIFICATION_SPL_TOKENS_DID_UPDATE =
  "anchor-spl-tokens-did-update";

export const SOLANA_CONNECTION_RPC_GET_ACCOUNT_INFO = "solana-get-account-info";
export const SOLANA_CONNECTION_RPC_GET_LATEST_BLOCKHASH =
  "solana-get-latest-blockhash";
export const SOLANA_CONNECTION_RPC_GET_TOKEN_ACCOUNTS_BY_OWNER =
  "solana-get-token-accounts-by-owner";
export const SOLANA_CONNECTION_RPC_SEND_RAW_TRANSACTION =
  "solana-send-raw-transaction";
export const SOLANA_CONNECTION_RPC_CONFIRM_TRANSACTION =
  "solana-confirm-transaction";
export const SOLANA_CONNECTION_RPC_GET_PARSED_TRANSACTIONS =
  "solana-get-parsed-transactions";
export const SOLANA_CONNECTION_GET_MULTIPLE_ACCOUNTS_INFO =
  "solana-get-multiple-accounts-info";
export const SOLANA_CONNECTION_RPC_GET_CONFIRMED_SIGNATURES_FOR_ADDRESS_2 =
  "solana-get-confirmed-signatures-for-address-2";
export const SOLANA_CONNECTION_RPC_CUSTOM_SPL_TOKEN_ACCOUNTS =
  "solana-custom-spl-token-accounts";

export const CONNECTION_POPUP_RPC = "anchor-popup-rpc";
export const CONNECTION_POPUP_RESPONSE = "anchor-popup-response";
export const CONNECTION_POPUP_NOTIFICATIONS = "anchor-popup-notifications";
export const SOLANA_CONNECTION_RPC_UI = "solana-connection-rpc-ui";

//const LEDGER_IFRAME_URL = "https://200ms-labs.github.io/anchor-wallet";
export const LEDGER_IFRAME_URL = "https://localhost:4443/dist/browser";
export const LEDGER_INJECTED_CHANNEL_REQUEST = "ledger-injected-request";
export const LEDGER_INJECTED_CHANNEL_RESPONSE = "ledger-injected-response";
export const LEDGER_METHOD_UNLOCK = "ledger-method-unlock";
export const LEDGER_METHOD_CONNECT = "ledger-method-connect";
export const LEDGER_METHOD_SIGN_TRANSACTION = "ledger-method-sign-transaction";
export const LEDGER_METHOD_SIGN_MESSAGE = "ledger-method-sign-message";

export const POST_MESSAGE_ORIGIN = "*";

export const EXTENSION_WIDTH = 375;
export const EXTENSION_HEIGHT = 600;

//
// UI View Model Constants.
//
export const TAB_BALANCES = "balances";
export const TAB_QUEST = "quest";
export const TAB_BRIDGE = "bridge";
export const TAB_FRIENDS = "friends";
export const NAV_COMPONENT_BALANCES_NETWORK = "balancesNetwork";
export const NAV_COMPONENT_TOKEN = "token";

export const BACKEND_EVENT = "backend-event";