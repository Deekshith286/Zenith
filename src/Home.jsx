import React from 'react';
import { Button } from './components/ui/button'; 
import { Link } from 'react-router-dom';
const Home=()=>{
    return (
        <div>
        <div className="flex justify-center mt-10">
        <h1 className='text-4xl'>welcome to fake store</h1>
        </div>
        <div className="flex justify-center mt-10">
                      <Button className="text-lg ml-5"> 
                        <Link to={"/products"}>
                           shop now
                     </Link>
             </Button>
        </div>
        </div>
        
    )
}
export default Home;