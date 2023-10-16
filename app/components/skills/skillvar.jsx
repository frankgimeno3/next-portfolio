1
import Image from "next/image"
import React from 'react';

function Skillvar({setSkills}) {

    const setFrontend = ()=>{
        setSkills("Frontend")  
    }

    const setBackend = ()=>{
        setSkills("Backend")  
    }
    const setOther = ()=>{
        setSkills("Other")  
    }

    return (
        <>
            <p className="text-md text-sky-50 mt-5"> Fields</p>
            <ul className="flex flex-row justify-center pb-3">
                <button className='py-2  hover:shadow-xl  mt-2 w-20 bg-sky-50   text-xs rounded-lg shadow hover:scale-110 
                hover-bg-white text-gray-700 transition-transform duration-1000'
                onClick={setFrontend}>
                    Frontend
                </button>                
                <button className='py-2 hover:shadow-xl mx-4 mt-2 w-20 bg-sky-50   text-xs rounded-lg shadow hover:scale-110
                 hover-bg-white text-gray-700 transition-transform duration-1000'
                 onClick={setBackend}>
                    Backend
                </button>                
                <button className='py-2 hover:shadow-xl  mt-2  w-20 bg-sky-50   text-xs rounded-lg shadow hover:scale-110 
                hover-bg-white text-gray-700 transition-transform duration-1000'
                onClick={setOther}>
                    Other
                </button>

            </ul>
        </>

    )
}
export default Skillvar;
