import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import TodosContextProvider from './contexts/TodosContextProvider.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TodosContextProvider>
      <App />
    </TodosContextProvider>
  </React.StrictMode>
);
