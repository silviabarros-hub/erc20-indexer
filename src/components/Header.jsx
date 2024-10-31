import {
  Center,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';

const Header = () => (
  <Center>
    <Flex
      alignItems={'center'}
      justifyContent="center"
      flexDirection={'column'}
    >
      <Heading mb={0} fontSize={36}>
        ERC-20 Token Indexer
      </Heading>
      <Text>
        Plug in an address and this website will return all of its ERC-20
        token balances!
      </Text>
    </Flex>
  </Center>
);

  export default Header;
