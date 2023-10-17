
import Image from "next/image"
import React from 'react';

function Other({setSelectedSkill}) {
    const setFirebase = ()=>{
        setSelectedSkill("Firebase")
    }
    const setNextauth = ()=>{
        setSelectedSkill("Nextauth")
    }
    const setGithub = ()=>{
        setSelectedSkill("Github")
    }
    const setJira = ()=>{
        setSelectedSkill("Jira")
    }
    return (
        <>
            <p className="py-2"><span className="font-bold">Other </span>Technologies</p>
            <div className="flex flex-row justify-center mx-auto h-28 my-4">
                <div className="m-2 rounded-lg shadow-2xl overflow-hidden transform transition duration-1000 hover:scale-110"
                onClick={setFirebase}>
                    <Image src={"/languages/Firebase.jpg"} alt="" width={100} height={100} className="object-cover" /> </div>
                <div className="m-2 rounded-lg shadow-2xl overflow-hidden transform transition duration-1000 hover:scale-110"
                onClick={setNextauth}>
                    <Image src={"/languages/nextauth.png"} alt="" width={200} height={200} className="object-cover" /> </div>
            </div>
            <div className="flex flex-row justify-center mx-auto h-28">
                <div className="m-2 rounded-lg shadow-2xl overflow-hidden transform transition duration-1000 hover:scale-110 hover:shadow-2xl"
                onClick={setGithub}>
                    <Image src={"/languages/github.jpg"} alt="" width={145} height={100} className="object-cover" /> </div>
                <div className="m-2 rounded-lg shadow-2xl overflow-hidden transform transition duration-1000 hover:scale-110 hover:shadow-2xl"
                 onClick={setJira}>
                    <Image src={"/languages/jira.png"} alt="" width={200} height={100} className="object-cover " /> </div>
            </div>
        </>
    )
}
export default Other;
