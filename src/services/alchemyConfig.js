import { Alchemy, Network } from 'alchemy-sdk';

const config = {
  apiKey: import.meta.env.VITE_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(config);

export const getTokenBalance = async (userAddress) => {
  if (!userAddress) {
    alert("Please enter a valid address.");
    return;
  }

  try {
    const data = await alchemy.core.getTokenBalances(userAddress);
    
    const tokenDataPromises = data.tokenBalances.map(async (token) => {
      const metadata = await alchemy.core.getTokenMetadata(token.contractAddress);
      return metadata;
    });

    const tokenDataArray = await Promise.all(tokenDataPromises);

    return{
      data,
      tokenDataArray,
    }
  } catch (error) {
      console.error("Error fetching token balances:", error);
      throw error;
  }
}