
import Image from "next/image"
import React from 'react';

function Frontend({ setSelectedSkill }) {

    const setTypescript = () => {
        setSelectedSkill("Typescript")
    }
    const setNext = () => {
        setSelectedSkill("Next")
    }
    const setFlutter = () => {
        setSelectedSkill("Flutter")
    }
    const setTailwind = () => {
        setSelectedSkill("Tailwind")
    }
    return (
        <>
            <p className="py-2"><span className="font-bold">Frontend </span>Technologies</p>
            <div className="flex flex-row justify-center mx-auto md:h-28 my-4">
                <div className="md:m-2 mx-2   rounded-lg shadow-2xl overflow-hidden transform transition duration-1000 hover:scale-110  "
                    onClick={setTypescript}>
                    <Image src={"/languages/ts.png"} alt="" width={100} height={100} className="object-cover" /> </div>
                <div className="md:m-2 mx-2  rounded-lg shadow-2xl overflow-hidden transform transition duration-1000 hover:scale-110  "
                    onClick={setNext}>
                    <Image src={"/languages/next.webp"} alt="" width={180} height={200} className="object-cover" /> </div>
            </div>
            <div className="flex flex-row justify-center md:mx-auto mx-5 md:h-28">
                <div className="md:m-2 mx-1  rounded-lg shadow-2xl overflow-hidden transform transition duration-1000 hover:scale-110 hover:shadow-2xl "
                    onClick={setFlutter}>
                    <Image src={"/languages/ft.png"} alt="" width={200} height={150} className="object-cover" /> </div>
                <div className="md:m-2  mx-2 w-36 mx-auto mt-2 md:mt-0 rounded-lg shadow-2xl overflow-hidden transform transition duration-1000 hover:scale-110 hover:shadow-2xl"
                    onClick={setTailwind}>
                    <Image src={"/languages/tw.png"} alt="" width={180} height={200} className="object-cover " /> </div>
            </div>
        </>
    )
}
export default Frontend;
