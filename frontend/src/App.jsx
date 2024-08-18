import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const mref= useRef(null)

  return (
    <>
      <div className="bg-gradient-to-br from-amber-600 via-yellow-200 to-blue-500 h-screen flex flex-col ">
        <div className='text-center mt-20 text-white text-4xl font-bold'>Welcome</div>
        <div className='text-center text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-white  to-violet-900'>Anirudh</div>
        <div className='flex justify-center pt-20'>
        <input onChange={(e)=>{
          mref.current= e.target.value
        }} placeholder='Search the web' className='block w-52 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'/>
        </div>
        <div className='flex justify-center pt-20'>
        <button onClick={()=>{
          window.location=`https://www.google.com/search?q=${mref.current}`
        }} type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Search</button>
           
        </div>
      </div>
    </>
  ) 
}

export default App
