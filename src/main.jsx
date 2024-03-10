
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import store from './Redux/store.js';
import {Provider} from 'react-redux';
import {ChakraProvider} from '@chakra-ui/react';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <BrowserRouter>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </Provider>,
);
