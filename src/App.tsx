import './App.css'
import { Button } from './components/ui/button'

function App() {

  return (
    <>
    <div className="flex justify-center items-center">
      <div className="w-full max-w-16inch my-4 mx-2">
        {/* <h1 className="text-left text-3xl font-bold underline">
          Hello world!
        </h1> */}
        <header>
          <div className='flex flex-row justify-between content-center'>
            <div>
              <Button className='bg-sky-500 hover:bg-sky-700 text-xl rounded-none'>WorkQuest</Button>
            </div>
            <div>
            <Button className='bg-gray-100 text-black hover:bg-gray-300 text-base rounded-none mx-1'>Jobs</Button>
            <Button className='bg-gray-100 text-black hover:bg-gray-300 text-base rounded-none mx-1'>Categories</Button>
            <Button className='bg-gray-100 text-black hover:bg-gray-300 text-base rounded-none mx-1 '>Help</Button>
            <button className='bg-inherit text-white hover:bg-gray-900 text-base rounded-none px-3 py-1.5 mx-1'>Login</button>
            </div>
          </div>
        </header>
      </div>
    </div>
    </>
  )
}

export default App
