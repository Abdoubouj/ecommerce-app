import "./App.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import { Routes, Route } from "react-router-dom";
import ProductsCategory from "./components/ProductsCategory/ProductsCategory";
import SearchProducts from "./components/SearchProducts/SearchProducts";
import ProductDetails from "./components/ProductDetails/ProductDetails";
function App() {
  return (
    <div className="container-2xl bg-white min-h-screen px-6">
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/search/:query" element={<SearchProducts />} />
        <Route path="/category/:category" element={<ProductsCategory/>}/>
        <Route path="/products/:id" element={<ProductDetails/>}/>
      </Routes>
    </div>
  );
}
export default App;
