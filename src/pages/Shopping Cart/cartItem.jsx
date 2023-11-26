import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
    const { name, photo,id } = props.product;
    const itemCount=props.Amount
    const {addItem,removeItem}=useContext(ShopContext)
    console.log(itemCount)
    return (
        <div className=" bg-slate-600 p-4  w-full flex flex-col justify-center items-center   m-1.5 rounded-md text-gray-300 py-3 shadow-md shadow-PrimaryColor">
            <img src={photo} className="h-28" />
            <p>
                <b>{name.toUpperCase()}</b>
            </p>
            <p>
                Amount: {itemCount}
            </p>
            <div>
                <button onClick={()=>addItem(id)} className="bg-pink-300 text-PrimaryColor rounded-md p-0.5 px-2 m-1">+</button>
                <button onClick={()=>removeItem(id)} className="bg-pink-300 text-PrimaryColor rounded-md p-0.5 px-2">-</button>

            </div>
        </div>
    );
};
