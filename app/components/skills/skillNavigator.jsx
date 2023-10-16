
import Image from "next/image"
import React from 'react';

function skillNavigator() {
    return (
        <div className='flex flex-col '>
            <p>Technologies</p>
            <div className="flex flex-row justify-center mx-auto">
                <div className="m-2 rounded-lg shadow overflow-hidden"> <Image src={"/languages/ft.png"} alt="" width={200} height={200}/> </div>
                <div className="m-2 rounded-lg shadow overflow-hidden"> <Image src={"/languages/ft.png"} alt="" width={200} height={200}/> </div>
            </div>
            <div className="flex flex-row justify-center mx-auto">
                <div className="m-2 rounded-lg shadow overflow-hidden"> <Image src={"/languages/ft.png"} alt="" width={200} height={200}/> </div>
                <div className="m-2 rounded-lg shadow overflow-hidden"> <Image src={"/languages/ft.png"} alt="" width={200} height={200}/> </div>
            </div>
         </div>
    )
}
export default skillNavigator;
