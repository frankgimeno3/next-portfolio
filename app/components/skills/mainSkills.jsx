
import Image from "next/image"
import React from 'react';

function MainSkills() {
    return (
        <>
            <div className='flex flex-col text-left px-12  ml-24 bg-white bg-opacity-20 py-5 rounded-l-lg'>
                <h2 className='font-bold text-2xl text-sky-200'>My main Skills</h2>
                <p className="italic text-md text-sky-50 "> Select one of the fields below to see my particular skillset on it. Then select any option to see details in the left side</p>
            </div>
            <div className="flex flex-row ml-24">
                <div className="flex-1 ">

                </div>
                <div className="flex-1 flex flex-row bg-white bg-opacity-5 py-5 rounded-l-lg mt-5  ">
                 </div>
            </div>
        </>
    )
}
export default MainSkills;
