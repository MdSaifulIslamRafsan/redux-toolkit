import { useState } from "react";
import Counter from "./component/Counter"
import Stats from "./component/Stats"

const initialCounter = [
  {
    id: 1, 
    value: 0
  },
  {
    id: 2, 
    value: 0
  },
]

function App() {
  const [count , setCount] = useState(initialCounter);
  const handleIncrement = (id) => {
    const updateCount = count.map(item =>{ 
      if(item.id === id){
        return {...item , value: item.value + 1 }
    }
    return item
  })
  setCount(updateCount)
   
}
const handleDecrement = (id) => {
  const updateCount = count.map(item =>{ 
    if(item.id === id){
    return {...item , value: item.value - 1 }
}
return item
})
setCount(updateCount)
   
}
  const totalCount = count.reduce((accumulator, currentValue) => accumulator + currentValue.value , 0 )

  

  return (
    <div className="w-full h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className='max-w-md mx-auto text-center text-2xl font-bold'>Simple Counter Application</h1>
      <div className="max-w-md mx-auto mt-10 space-y-5">
        {
          count.map((item , index) => <Counter handleIncrement={()=>handleIncrement(item.id)} handleDecrement={()=>handleDecrement(item.id)} index={index} count={item.value} key={item?.id}></Counter>)
        }
        <Stats count={totalCount}></Stats>
      </div>
    </div>
  )
}

export default App
