import {
  Box,
  CircularProgress,
  Flex,
  Image,
  SimpleGrid
} from '@chakra-ui/react';
import { Utils } from 'alchemy-sdk';

const TokenBalances = ({loading, hasQueried, results, tokenDataObjects}) =>{
  return  loading? <CircularProgress isIndeterminate color='green.300' /> : hasQueried ? (
    <SimpleGrid w={'95vw'} minChildWidth='200px' spacing='40px'>
      {results.tokenBalances.map((e, i) => {
        return (
          <Flex
            alignItems={'center'}
            bg="#f9df30"
            flexDir={'column'}
            key={i}
            padding={10}
            textAlign="center"
            borderRadius="8px"
            minWidth="200px"
          >
            <Box
              className='box-text'
              maxW="100%"
              overflow="hidden"
              textOverflow="ellipsis"
            >
              <b className='box-text'>Symbol:</b> ${tokenDataObjects[i].symbol}&nbsp;
            </Box>
            <Box
              className='box-text'
              maxW="100%"
              overflow="hidden"
              textOverflow="ellipsis"
            >
              <b className='box-text'>Balance:</b>&nbsp;
                {Number(Utils.formatUnits(
                  e.tokenBalance,
                  tokenDataObjects[i].decimals
                  )).toLocaleString(undefined, { maximumFractionDigits: 10 })
                }
            </Box>
            <Image src={tokenDataObjects[i].logo} height={100} marginTop={20} marginBottom={20}/>
          </Flex>
        );
      })}
    </SimpleGrid>
  ) : (
    'Please make a query! This may take a few seconds...'
  )
}

export default TokenBalances;