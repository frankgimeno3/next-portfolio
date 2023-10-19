"use client"


import Image from "next/image"
import React, { useState } from 'react';
import Skillrendering from "./skillrendering"
import SkillNavigator from "./skillNavigator"
import Skillvar from "./skillvar"



function MainSkills() {
    const [skills, setSkills] = useState("")
    const [selectedSkill, setSelectedSkill] = useState("")
    return (
        <>
            <div className='flex flex-col text-center md:px-12  md:mx-24 bg-white bg-opacity-20 md:py-12 py-5 md:rounded-lg '>
                <h2 className='font-bold text-2xl text-sky-200 transform transition duration-1000 hover:scale-105 md:py-5'>
                    My main Skills</h2>
                <p className="pt-2 pl-2 text-sm text-sky-200 "> Select one of the <span className="font-bold text-white text-sm">fields</span> below to see my particular skillset on it. </p>
                <p className=" pl-2 text-sm text-sky-200 "> Then select any <span className="font-bold text-white text-sm">technology</span> (right side) to see details </p>
                <Skillvar setSkills={setSkills}/>

                <div className="flex flex-col md:flex-row">
                    <div className="hidden md:block flex-1 px-5 md:py-5 ">
                        <Skillrendering selectedSkill={selectedSkill}/>
                    </div>
                    <div className="flex-1  p-5">
                        <SkillNavigator skills={skills} setSelectedSkill={setSelectedSkill}/>
                    </div>
                    <div className="md:hidden flex-1 px-5 md:py-5 ">
                        <Skillrendering selectedSkill={selectedSkill}/>
                    </div>
                </div>

            </div>
        </>
    )
}
export default MainSkills;
