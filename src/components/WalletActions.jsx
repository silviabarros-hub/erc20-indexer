import { Button, Input, Heading } from '@chakra-ui/react';
import { ethers } from 'ethers';

const WalletActions = ({ connected, fetchTokenBalance, setProvider,  setTokenDataObjects, setResults, setHasQueried, setConnected, setUserAddress }) => {

  const checkMetamaskInstallation = () => {
    setHasQueried(false);

    if (window.ethereum === undefined) {
        alert("Metamask wallet is not installed");
        return;
    }
  };

  const initiateWalletConnection = async () => {
    checkMetamaskInstallation();
    setTokenDataObjects([]);
    setResults([]);
    
    try {
      if(!connected){
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        const account = accounts[0];
        setProvider(provider);
        setUserAddress(account);
        setConnected(true);
      } 
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBalanceButton = async() => {
    setHasQueried(false);
    setUserAddress('');
    setResults([])
    connected ? setConnected(false) : null;
    await fetchTokenBalance();
  }

  return(
    <>
      <Input
        onChange={(e) => setUserAddress(e.target.value)}
        color="black"
        w="60%"
        textAlign="center"
        p={4}
        bgColor="white"
        fontSize={24}
      />
      <Button fontSize={20} onClick={fetchBalanceButton} mt={36} bgColor="#0F89CA">
        Check ERC-20 Token Balances
      </Button>
      <Heading mt={30}>
        Or
      </Heading>
      <Button key="1" fontSize={20} onClick={initiateWalletConnection} bgColor="pink">
        { connected ? "Wallet Connected" : "Connect Wallet" }
      </Button>
    </>
  )
}

export default WalletActions;