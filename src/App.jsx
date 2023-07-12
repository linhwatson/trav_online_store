import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details from "./components/Details";
import DropDown from "./components/DropDown";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to='/'>Online Store</Link>
      </header>
      <Routes>
        <Route path='/' element={<DropDown />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
