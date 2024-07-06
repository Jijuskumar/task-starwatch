import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import MessagesPage from "./Pages/Messages/Messages";
import ProductsPage from "./Pages/ProductsPage/ProductsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/dashboard" Component={HomePage} />
        <Route path="/products" Component={ProductsPage} />
        <Route path="/messages" Component={MessagesPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
