import { useNavigate } from "react-router-dom";

export const ShoppingCartFooter = (props) => {
    const navigate=useNavigate()
    const Amount = props.Amount;
    const buttonStyle="rounded-lg p-0.5 shadow-md bg-PrimaryColor text-SecondaryColor  hover:bg-gray-400 hover:text-gray-200   border-gray-400 hover:border-PrimaryColor mx-1"
    return (
        <div>
            <h1>
                <b>Total Price: {Amount}$ </b>
            </h1>
            <div className="flex justify-center">
                <button  className={buttonStyle} onClick={()=>navigate('/')}>
                    Back
                </button>
                <button className={buttonStyle}>
                    Proceed
                </button>
            </div>
        </div>
    );
};
