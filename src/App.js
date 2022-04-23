import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Heading,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Heading as="h1" size="3xl">
              React CRA with Chakra boilerplate
            </Heading>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
