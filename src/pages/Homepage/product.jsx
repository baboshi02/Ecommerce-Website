import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
    const { cartItems, addItem, removeItem } = useContext(ShopContext);
    const { name, photo, price, id } = props.product;
    console.log('cartItems: ',cartItems)
    return (
        <div className="text-center flex flex-col align-middle items-center bg-slate-600  m-1.5 rounded-md text-gray-300 py-1 shadow-md shadow-PrimaryColor">
            <img src={photo} className=" h-48 my-2" />
            <p>
                <b>{name.toUpperCase()}</b>
            </p>
            <p>{price}$</p>
            <button
                onClick={() => addItem(id)}
                className="shadow-md rounded-lg p-0.5 bg-PrimaryColor text-SecondaryColor  hover:bg-gray-400 hover:text-gray-200  hover:border-PrimaryColor"
            >
                Add to cart {cartItems[id] > 0 && <>({cartItems[id]})</>}
            </button>
        </div>
    );
};
