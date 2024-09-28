import Counter from "./component/Counter"
import Stats from "./component/Stats"

function App() {

  return (
    <div className="w-full h-screen p-10 bg-gray-100 text-slate-700">
      <h1 className='max-w-md mx-auto text-center text-2xl font-bold'>Simple Counter Application</h1>
      <div className="max-w-md mx-auto mt-10 space-y-5">
        <Counter></Counter>
        <Counter></Counter>
        <Stats></Stats>
      </div>
    </div>
  )
}

export default App
