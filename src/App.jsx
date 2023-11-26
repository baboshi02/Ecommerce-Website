import { Navbar } from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShoppingCart } from "./pages/Shopping Cart/ShoppingCart";
import { Shop } from "./pages/Homepage/HomePage";
import { ShopContextProvider } from "./context/shop-context";
import "./index.css";

function App() {
    return (
        <div className="h-screen bg-gray-500">
            <ShopContextProvider>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Shop />}></Route>
                        <Route path="/cart" element={<ShoppingCart />}></Route>
                    </Routes>
                </Router>
            </ShopContextProvider>
        </div>
    );
}
export default App;
