import Items from "../../Dummy";
import { Product } from "./product";
export const Shop = () => {
    return (
        <>
        <h1 className="text-center text-5xl text-PrimaryColor">
                    Shop
        </h1>
            <div className="grid grid-cols-3 py-7">
                {Items.map((Item) => (
                    <Product product={Item} />
                ))}
            </div>
        </>
    );
};
