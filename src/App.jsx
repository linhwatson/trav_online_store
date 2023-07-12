import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  return <h2>Online Store</h2>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
