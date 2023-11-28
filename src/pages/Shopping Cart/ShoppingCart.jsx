import { useContext } from "react";
import Items from "../../Dummy";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cartItem";
import { ShoppingCartFooter } from "./ShoppingCartFooter";
import { EmptyCart } from "./emptyCart";

export const ShoppingCart = () => {
    const { cartItems, totalAmount ,isEmpty} = useContext(ShopContext);
    const amount = totalAmount();
    const empty=isEmpty()
    const content=()=>{
        if(empty){
            return <EmptyCart/>
        }
        return(<div className="flex flex-col items-center my-5 mx-12">
        {Items.map((item) => {
            const itemCount = cartItems[item.id];
            return (
                itemCount > 0 && (
                    <CartItem
                        key={item.id}
                        product={item}
                        Amount={itemCount}
                    />
                )
            );
        })}
        <ShoppingCartFooter Amount={amount}/>
    </div>)
    }

    return (
        <div>
            <h1 className="text-center text-5xl text-PrimaryColor">
                Shopping Cart
                <br />
            </h1>
            {content()}
            
        </div>
    );
};
