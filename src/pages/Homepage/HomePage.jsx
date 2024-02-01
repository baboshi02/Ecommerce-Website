import Items from "../../Dummy";
import { Product } from "./product";
export const Shop = () => {
  return (
    <>
      <h1 className="text-center text-5xl text-PrimaryColor">Shop</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 py-7 mx-12 my-5">
        {Items.map((Item) => (
          <Product product={Item} />
        ))}
      </div>
    </>
  );
};
