
import { useDispatch, useSelector } from "react-redux"
import Counter from "./component/Counter"
import Stats from "./component/Stats"
import { decrement, increment } from "./component/features/counter/counterSlice"
import Posts from "./component/Posts"



function App() {
  const count = useSelector((state) => state.counters)
  const dispatch = useDispatch()
  const handleIncrement = (id) => {
    dispatch(increment(id))
}
const handleDecrement = (id) => {
  dispatch(decrement(id)) 
}
  const totalCount = count.reduce((accumulator, currentValue) => accumulator + currentValue.value , 0 )

  

  return (
    <div className="w-full min-h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className='max-w-md mx-auto text-center text-2xl font-bold'>Simple Counter Application</h1>
      <div className="max-w-md mx-auto mt-10 space-y-5">
        {
          count.map((item , index) => <Counter handleIncrement={()=> handleIncrement(item.id)} handleDecrement={()=> handleDecrement(item.id)} index={index} count={item.value} key={item?.id}></Counter>)
        }
        <Stats count={totalCount}></Stats>
      </div>
      <Posts></Posts>
    </div>
  )
}

export default App
