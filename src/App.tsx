import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import Navbar from './pages/navbar/navbar'
import Home from './pages/home/home';
import Jobs from './pages/jobs/jobs';


function App() {

  return (
    <>
    <div className="flex justify-center items-center">
      <div className="w-full max-w-16inch my-4 mx-2">
        {/* <h1 className="text-left text-3xl font-bold underline">
          Hello world!
        </h1> */}

        <Router>          
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
          </Routes>
        </Router>

      </div>
    </div>
    </>
  )
}

export default App
