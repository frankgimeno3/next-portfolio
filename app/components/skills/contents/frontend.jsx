
import Image from "next/image"
import React from 'react';

function Frontend({setSelectedSkill}) {
    return (
        <>
            <p className="py-2"><span className="font-bold">Frontend </span>Technologies</p>
            <div className="flex flex-row justify-center mx-auto h-28 my-4">
                <div className="m-2 rounded-lg shadow-2xl overflow-hidden transform transition duration-1000 hover:scale-110  ">
                    <Image src={"/languages/ts.png"} alt="" width={100} height={100} className="object-cover" /> </div>
                <div className="m-2 rounded-lg shadow-2xl overflow-hidden transform transition duration-1000 hover:scale-110  ">
                    <Image src={"/languages/next.webp"} alt="" width={180} height={200} className="object-cover" /> </div>
            </div>
            <div className="flex flex-row justify-center mx-auto h-28">
                <div className="m-2 rounded-lg shadow-2xl overflow-hidden transform transition duration-1000 hover:scale-110 hover:shadow-2xl ">
                    <Image src={"/languages/ft.png"} alt="" width={200} height={150} className="object-cover" /> </div>
                <div className="m-2 rounded-lg shadow-2xl overflow-hidden transform transition duration-1000 hover:scale-110 hover:shadow-2xl">
                    <Image src={"/languages/tw.png"} alt="" width={180} height={200} className="object-cover " /> </div>
            </div>
        </>
    )
}
export default Frontend;
