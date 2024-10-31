# Simple ERC-20 Indexer
This is a skeleton app that uses the Alchemy SDK integrated with Alchemy's Enhanced APIs to display all of an address's ERC-20 token balances.

# Set Up
1. Install dependencies by running npm install
2. Start the application by running npm start

# Project Structure
The main components and files are organized as follows:

src
├── components
│   ├── AddressInput.js          # Input field for Ethereum address
│   ├── BalanceDisplay.js        # Displays queried token balances
│   ├── ConnectWalletButton.js   # Button for wallet connection
│   ├── Spinner.js               # CircularProgress component for loading state
│   └── index.js                 # Central export for components
├── services
│   └── alchemyConfig.js         # Alchemy configuration and API functions
└── App.js                       # Main app component

# Configuration
Update your Alchemy API key in alchemyConfig.js by replacing the placeholder key with your own for accurate data retrieval from the Ethereum network.

# Usage
1. Connect Wallet: Use the "Connect Wallet" button to link your MetaMask wallet.
2. Enter Address: Input the Ethereum address you want to query in the text field.
3. Check Balance: Click on "Check ERC-20 Token Balances" to retrieve and display token information, including:
- Token Symbol
- Token Balance
- Token Logo

# Features
Connect to the Ethereum network using MetaMask
Fetch ERC-20 token balances for a given address
Display token symbols, balances, and logos
Circular loading indicator while data is being fetched

# Technologies Used
React: For the front-end framework
Chakra UI: For component styling and responsive design
Alchemy SDK: To access Ethereum blockchain data
ethers.js: For wallet connection and Ethereum interaction