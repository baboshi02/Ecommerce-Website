export const ShoppingCartFooter = (props) => {
    const Amount = props.Amount;
    return (
        <div>
            <h1>
                <b>Total Price: {Amount}$ </b>
            </h1>
            <div className="flex justify-center">
                <button className="rounded-lg p-0.5 shadow-md bg-PrimaryColor text-SecondaryColor  hover:bg-gray-400 hover:text-gray-200   border-gray-400 hover:border-PrimaryColor mx-1">
                    Back
                </button>
                <button className=" rounded-lg p-0.5 shadow-md bg-PrimaryColor text-SecondaryColor  hover:bg-gray-400 hover:text-gray-200   border-gray-400 hover:border-PrimaryColor" >
                    Proceed
                </button>
            </div>
        </div>
    );
};
