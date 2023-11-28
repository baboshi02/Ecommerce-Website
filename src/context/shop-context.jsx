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
    const totalAmount=()=>{
        let total=0;
        for(let item in cartItems){
            if(cartItems[item]>0){
                const itemInfo=Items.find((product)=>product.id===Number(item))
                total+=itemInfo.price*cartItems[item]
            }
        }
        return total
    }
    const isEmpty=()=>{
        for(let item in cartItems){
            if(cartItems[item]>0)
                return false 
        }
        return true
    }
    const addItem=(id)=>{
        setCartItems((prev)=>({...prev,[id] :cartItems[id]+1}))
    }
    const removeItem=(id)=>{
        setCartItems((prev)=>({...prev,[id]:cartItems[id]-1}))
    }
    const contextValue={cartItems,addItem,removeItem,totalAmount, isEmpty,getDefaultCart,setCartItems}

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};
