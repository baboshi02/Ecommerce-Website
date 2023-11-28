import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
export const FinalPage = () => {
    const {getDefaultCart,setCartItems}=useContext(ShopContext)
    const navigate=useNavigate()
    setTimeout(()=>{
        setCartItems(getDefaultCart())
        navigate('/')
    },5000)
    return (
        <div>
            <h1 className="text-center text-5xl text-PrimaryColor">
                Thanks for your purchase <br />
                Please visit us again
            </h1>
        </div>
    );
};
