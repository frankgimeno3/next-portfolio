1
import Image from "next/image"
import React from 'react';

function Skillvar() {
    return (
        <>
            <p className="text-md text-sky-50 mt-5"> Fields</p>
            <ul className="flex flex-row justify-center pb-3">
                <button className='py-2  hover:shadow-xl  mt-2 w-20 bg-sky-50   text-xs rounded-lg shadow hover:scale-110 hover-bg-white text-gray-700 transition-transform duration-1000'>
                    Frontend
                </button>                
                <button className='py-2 hover:shadow-xl mx-4 mt-2 w-20 bg-sky-50   text-xs rounded-lg shadow hover:scale-110 hover-bg-white text-gray-700 transition-transform duration-1000'>
                    Backend
                </button>                
                <button className='py-2 hover:shadow-xl  mt-2  w-20 bg-sky-50   text-xs rounded-lg shadow hover:scale-110 hover-bg-white text-gray-700 transition-transform duration-1000'>
                    Other
                </button>

            </ul>
        </>

    )
}
export default Skillvar;
