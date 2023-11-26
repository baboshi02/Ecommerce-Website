import { createContext, useState } from "react";
import Items from "../Dummy";

export const ShopContext = createContext(null);

const getDefaultCart=()=>{
    let cart={}
    for(let i=1;i<Items.length+1;i++){
        cart[i]=0
    }
    return cart
}



export const ShopContextProvider = (props) => {
    const [cartItems,setCartItems]=useState(getDefaultCart())
    const addItem=(id)=>{
        setCartItems((prev)=>({...prev,[id] :cartItems[id]+1}))
    }
    const removeItem=(id)=>{
        setCartItems((prev)=>({...prev,[id]:cartItems[id]-1}))
    }
    const contextValue={cartItems,addItem,removeItem}

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};
