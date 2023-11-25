export const Product = (props) => {
    const { name, photo, price } = props.product;
    return (
        <div className="text-center flex flex-col align-middle items-center bg-slate-600 mx-1 rounded-md text-gray-300 py-1 shadow-md shadow-PrimaryColor">
            <img src={photo} className=" h-32" />
            <p>
                <b>{name}</b>
            </p>
            <p>{price}$</p>
            <button className="bg-pink-300 rounded-lg hover:bg-pink-400 shadow-md text-PrimaryColor">
                Add to cart
            </button>
        </div>
    );
};
