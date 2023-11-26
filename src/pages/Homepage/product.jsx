import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
    const {cartItems,addItem,removeItem}=useContext(ShopContext)
    const { name, photo, price, id } = props.product;
    return (
        <div className="text-center flex flex-col align-middle items-center bg-slate-600  m-1.5 rounded-md text-gray-300 py-1 shadow-md shadow-PrimaryColor">
            <img src={photo} className=" h-32" />
            <p>
                <b>{name}</b>
            </p>
            <p>{price}$</p>
            <button onClick={()=>addItem(id)} className="bg-pink-300 rounded-lg hover:bg-pink-400 shadow-md text-PrimaryColor border border-blue-500">
                Add to cart {cartItems[id]>0 && <>({cartItems[id]})</>}
            </button>
        </div>
    );
};
