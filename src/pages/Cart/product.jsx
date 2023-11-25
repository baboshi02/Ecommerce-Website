export const Product = (props) => {
    const { name, photo, price } = props.product;
    return (
        <div>
            <img src={photo} className=" h-32" />
            <p>Name: {name}</p>
            <p>Price: {price}</p>

        </div>
    );
};
