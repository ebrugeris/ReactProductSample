import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const queryClient = new QueryClient()

root.render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <FavoritesProvider>
                <App/>
             </FavoritesProvider>
        </BrowserRouter>
     </QueryClientProvider>
);
