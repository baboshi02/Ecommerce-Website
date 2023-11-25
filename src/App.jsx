import { Navbar } from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShoppingCart } from "./pages/Cart";
import { Shop } from "./pages/Homepage/shoppingcart";
import "./index.css";

function App() {
    return (
        <div className="h-screen bg-gray-500">
            <Router>
                <Navbar />
                
                <Routes>
                    <Route path="/" element={<Shop />}></Route>
                    <Route path="/cart" element={<ShoppingCart />}></Route>
                </Routes>
            </Router>
        </div>
    );
}
export default App;
