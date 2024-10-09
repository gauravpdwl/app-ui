import { useEffect, useState } from 'react';
import officeWorking from '../../assets/office-working.jpg';

function Home(){

    const [isLoading, setIsLoading] = useState(true);  // Track loading state

    // Simulating loading (e.g., fetching data or waiting for image to load)
    useEffect(() => {
        // Simulate a loading delay or data fetch with a timeout
        const timer = setTimeout(() => {
            setIsLoading(false);  // Set loading to false after "loading" is done
        }, 1000);  // 1 seconds loading time

        return () => clearTimeout(timer);  // Cleanup timer when component unmounts
    }, []);

    return(
        <div id="herosection" className='flex flex-row justify-between my-12 mx-2'>
            {isLoading ? "": (
                <>
                    <div className='flex-1 flex items-center p-8'>
                        <p className='text-6xl content-center'>Unlock New Opportunities, Start Your Career Journey.</p>
                    </div>
                    <div className='flex-1 flex items-center justify-center p-4'>
                        <img src={officeWorking} alt="Office-Work" style={{
                            maxWidth: 'auto',  // Image will scale down to fit its container
                            height: 'auto',     // Maintains aspect ratio
                            }}
                            className='rounded-lg'
                        />
                    </div>
                </>
            )}
        </div>
    )
}

export default Home;