import {
  Box,
  Flex,
  Heading,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import { getTokenBalance } from './services/alchemyConfig';
import WalletActions from './components/WalletActions';
import TokenBalances from './components/TokenBalances';

function App() {
  const [userAddress, setUserAddress] = useState('');
  const [results, setResults] = useState([]);
  const [hasQueried, setHasQueried] = useState(false);
  const [tokenDataObjects, setTokenDataObjects] = useState([]);
  const [connected, setConnected] = useState(false);
  const [provider, setProvider] = useState(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    if (connected) {
      fetchTokenBalance();
    }
  }, [connected]);

  const fetchTokenBalance = async () => {
    if (!userAddress) {
      alert("Please enter a valid address.");
      return;
    }

    try{
      setTokenDataObjects([]);
      setLoading(true);

      const{data, tokenDataArray} = await getTokenBalance(userAddress);
      setHasQueried(true);
      setResults(data);
      setTokenDataObjects(tokenDataArray);

    } catch (error) {
      console.error("Failed to fetch token balances:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box w="100vw">
      <Header />
      <Flex
        w="100%"
        flexDirection="column"
        alignItems="center"
        justifyContent={'center'}
      >
        <Heading mt={42}>
          Get all the ERC-20 token balances of this address:
        </Heading>
      <WalletActions 
        fetchTokenBalance={fetchTokenBalance}
        userAddress={userAddress}
        setUserAddress={setUserAddress}
        connected={connected}
        setConnected={setConnected}
        setHasQueried={setHasQueried}
        setProvider={setProvider}
        setResults={setResults}
        setTokenDataObjects={setTokenDataObjects}
      />
      <Heading my={36}>ERC-20 token balances:</Heading>
      <TokenBalances 
        loading = {loading}
        hasQueried = {hasQueried}
        results = {results}
        tokenDataObjects = {tokenDataObjects}
      />        
      </Flex>
    </Box>
  );
}

export default App;
