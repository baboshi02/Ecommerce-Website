import { Navbar } from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShoppingCart } from "./pages/Cart";
import { Shop } from "./pages/Homepage/shoppingcart";
import "./index.css";
import { ShopContextProvider } from "./context/shop-context";

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
