

const Button = ({handler , type , children}) => {
   
    
    return (
        <button className={type === "danger" ? "bg-red-500 text-white px-3 py-2 m-2 rounded shadow" :  "bg-blue-500 text-white px-3 py-2 m-2 rounded shadow"} onClick={handler}>
            {children}
        </button>
    );
};

export default Button;