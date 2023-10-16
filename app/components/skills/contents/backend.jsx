
import Image from "next/image"
import React from 'react';

function Backend({setSelectedSkill}) {
    
    const setExpress = ()=>{
        setSelectedSkill("Express")
    }
    const setNextBackend = ()=>{
        setSelectedSkill("NextBackend")
    }
    const setMongo = ()=>{
        setSelectedSkill("Mongo")
    }
    return (
        <>
            <p className="py-2"><span className="font-bold">Backend </span>Technologies</p>
            <div className="flex flex-row justify-center mx-auto h-28 my-4">
                <div className="m-2 rounded-lg shadow-2xl overflow-hidden transform transition duration-1000 hover:scale-110  "
                onClick={setExpress}>
                    <Image src={"/languages/express.png"} alt="" width={200} height={250} className="object-cover" /> </div>
                <div className="m-2 rounded-lg shadow-2xl overflow-hidden transform transition duration-1000 hover:scale-110  "
                onClick={setNextBackend}>
                    <Image src={"/languages/next.webp"} alt="" width={180} height={200} className="object-cover" /> </div>
            </div>
            <div className="flex flex-row justify-center mx-auto h-28">
                <div className="m-2 rounded-lg shadow-2xl overflow-hidden transform transition duration-1000 hover:scale-110 hover:shadow-2xl "
                onClick={setMongo}>
                    <Image src={"/languages/mongo.jpg"} alt="" width={200} height={150} className="object-cover" />
                </div>
            </div>
        </>
    )
}
export default Backend;
