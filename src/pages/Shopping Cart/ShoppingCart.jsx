import { useContext } from "react";
import Items from "../../Dummy";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cartItem";
export const ShoppingCart = () => {
    const { cartItems } = useContext(ShopContext);

    return (
        <div>
            <h1 className="text-center text-5xl text-PrimaryColor">
                Shopping Cart
            </h1>
            <div className="flex flex-col items-center my-5 mx-12">
                {Items.map((item) => {    
                    const itemCount=cartItems[item.id]
                    console.log(item.name,":",itemCount)
                    return itemCount>0&&<CartItem key={item.id} product={item} Amount={itemCount}/>
})}
            </div>
        </div>
    );
};
