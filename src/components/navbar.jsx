import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="bg-PrimaryColor w-full h-14 text-SecondaryColor flex justify-end items-center px-2 ">
      <Link to="/Homepage">
        <h1 className="mr-4">Home Page</h1>
      </Link>
      <Link to="/cart">
        <h1>Shopping Cart</h1>
      </Link>
    </div>
  );
};
