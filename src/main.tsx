import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { KindeProvider } from '@kinde-oss/kinde-auth-react';

import TodosContextProvider from './contexts/TodosContextProvider.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <KindeProvider
      clientId='5d58d7731a5848348f092b93ebf17722'
      domain='https://andrewscomputerrepairshop.kinde.com'
      redirectUri='http://localhost:5173'
      logoutUri='http://localhost:5173'
    >
      <TodosContextProvider>
        <App />
      </TodosContextProvider>
    </KindeProvider>
  </React.StrictMode>
);
