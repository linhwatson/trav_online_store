import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Details from "./components/Details";
import DropDown from "./components/DropDown";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header>
          <Link style={{ textDecoration: 'none', fontSize: '2em', padding: '850px' }} to='/'>🍄 DLDP Store</Link>
        </header>
        <Routes>
          <Route path='/' element={<DropDown />} />
          <Route path='/details/:id' element={<Details />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);