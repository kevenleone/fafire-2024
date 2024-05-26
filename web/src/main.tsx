import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import Routes from './routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider>
    <Routes />
  </ChakraProvider>
);
