import Count from "./Count";
import Button from "./Button";


const Counter = ({count , handleDecrement , handleIncrement}) => {
  
    return (
        <div className="bg-white shadow-2xl p-4 flex justify-center flex-col items-center">
            <Count count={count}></Count>
            <div className="flex gap-5">
                <Button handler={handleIncrement}>Increment</Button>
                <Button type={"danger"} handler={handleDecrement}>Decrement</Button>
            </div>
        </div>
    );
};

export default Counter;