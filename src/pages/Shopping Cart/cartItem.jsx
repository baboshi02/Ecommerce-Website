import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
    const { name, photo,id,price } = props.product;
    const itemCount=props.Amount
    const {addItem,removeItem}=useContext(ShopContext)
    console.log(itemCount)
    return (
        <div className=" bg-slate-600 p-4  w-full flex flex-col justify-center items-center   m-1.5 rounded-md text-gray-300  shadow-md shadow-PrimaryColor">
            <img src={photo} className="h-48" />
            <p>
                <b>{name.toUpperCase()}</b>
            </p>
            <p>
                {price}$
            </p>
            <p>
                Amount: {itemCount}
            </p>
            
            <div>
                <button onClick={()=>addItem(id)} className="rounded-md p-0.5 px-2 m-1 bg-PrimaryColor text-SecondaryColor  hover:bg-gray-400 hover:text-gray-200   hover:border-PrimaryColor">+</button>
                <button onClick={()=>removeItem(id)} className="rounded-md p-0.5 px-2 bg-PrimaryColor text-SecondaryColor  hover:bg-gray-400 hover:text-gray-200   hover:border-PrimaryColor">-</button>

            </div>
        </div>
    );
};
