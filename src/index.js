import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ContextProvider from './context/Context';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>

    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
