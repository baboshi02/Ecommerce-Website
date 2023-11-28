import Items from "../../Dummy";
import { Product } from "./product";
console.log(window.location.pathname)
export const Shop = () => {
    return (
        <>
            <h1 className="text-center text-5xl text-PrimaryColor">Shop</h1>
            <div className="grid grid-cols-3 py-7 mx-12 my-5">
                {Items.map((Item) => (
                    <Product product={Item} />
                ))}
            </div>
        </>
    );
};
