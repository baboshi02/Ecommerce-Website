import { Navbar } from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShoppingCart } from "./pages/Shopping Cart/ShoppingCart";
import { Shop } from "./pages/Homepage/HomePage";
import { ShopContextProvider } from "./context/shop-context";
import "./index.css";
import { FinalPage } from "./pages/finalPage/finalPage";

function App() {
    return (
        <div >
            <ShopContextProvider>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Shop />}/>
                        <Route path="/cart" element={<ShoppingCart />}/>
                        <Route path="/final" element={<FinalPage/>}/>
                    </Routes>
                </Router>
            </ShopContextProvider>
        </div>
    );
}
export default App;
