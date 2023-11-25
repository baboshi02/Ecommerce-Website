import { Navbar } from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/homepage";
import { ShoppingCart } from "./pages/Cart/shoppingcart";
import "./index.css";

function App() {
    return (
        <div className="h-screen bg-gray-500">
            <Router>
                <Navbar />
                
                <Routes>
                    <Route path="/Homepage" element={<Homepage />}></Route>
                    <Route path="/cart" element={<ShoppingCart />}></Route>
                </Routes>
            </Router>
        </div>
    );
}
export default App;
