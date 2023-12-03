import { useNavigate } from "react-router-dom";
export const EmptyCart = () => {
    const navigate =useNavigate()
    setTimeout(()=>{
        navigate('/')
    },2000)
    return(
        <div className="text-center text-PrimaryColor flex flex-col justify-center items-center text-lg h-28">
            <h1>
                {'Cart is empty'.toUpperCase() }
            </h1>
            <button onClick={()=>navigate('/')} className="rounded-lg p-0.5 shadow-md bg-PrimaryColor text-SecondaryColor  hover:bg-gray-400 hover:text-gray-200   border-gray-400 hover:border-PrimaryColor mx-1">
                back
            </button>
        </div>
        );
};
