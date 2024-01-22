import "./App.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import { Routes, Route } from "react-router-dom";
import ProductsCategory from "./components/ProductsCategory/ProductsCategory";
import SearchProducts from "./components/SearchProducts/SearchProducts";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
function App() {
  return (
    <div className="container-2xl bg-white min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/search/:query" element={<SearchProducts />} />
        <Route path="/category/:category" element={<ProductsCategory/>}/>
        <Route path="/products/:id" element={<ProductDetails/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
