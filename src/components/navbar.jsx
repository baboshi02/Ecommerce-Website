import { Link } from "react-router-dom";
console.log(window.location.pathname)

export const Navbar = () => {
  return (
    <div className="bg-PrimaryColor w-full h-14 text-SecondaryColor flex justify-end items-center px-2 ">
      <Link to="/">
        <h1 className="mr-4 hover:text-red-400">Home Page</h1>
      </Link>
      <Link to="/cart">
        <h1 className="hover:text-red-400">Shopping Cart</h1>
      </Link>
    </div>
  );
};
