export const CartItem = (props) => {
    const { name, photo } = props.product;
    const itemCount=props.Amount
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
        </div>
    );
};
