
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";


const Navbar= ()=>{

    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');  // Programmatically navigate to the /about page
    };

    const goToJobs = () => {
        navigate('/jobs');  // Programmatically navigate to the /about page
    };

    return (
        <header>
          <div className='flex flex-row justify-between content-center'>
            <div>
              <Button className='bg-sky-500 hover:bg-sky-700 text-xl rounded-none' onClick={goToHome}>WorkQuest</Button>
            </div>
            <div>
            <Button className='bg-gray-100 text-black hover:bg-gray-300 text-base rounded-none mx-1' onClick={goToJobs} >Jobs</Button>
            <Button className='bg-gray-100 text-black hover:bg-gray-300 text-base rounded-none mx-1'>Categories</Button>
            <Button className='bg-gray-100 text-black hover:bg-gray-300 text-base rounded-none mx-1 '>Help</Button>
            <button className='bg-inherit text-white hover:bg-gray-900 text-base rounded-none px-3 py-1.5 mx-1'>Login</button>
            </div>
          </div>
        </header>
    )
}

export default Navbar;