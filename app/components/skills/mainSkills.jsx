
import Image from "next/image"
import React from 'react';
import Skillrendering from "./Skillrendering"
import SkillNavigator from "./SkillNavigator"
import Skillvar from "./Skillvar"



function MainSkills() {
    return (
        <>
            <div className='flex flex-col text-center px-12  mx-24 bg-white bg-opacity-20 py-5 rounded-lg '>
                <h2 className='font-bold text-2xl text-sky-200'>My main Skills</h2>
                <p className="pt-2 pl-2 text-xs text-sky-200 "> Select one of the <span className="font-bold text-white text-sm">fields</span> below to see my particular skillset on it. </p>
                <p className=" pl-2 text-xs text-sky-200 "> Then select any <span className="font-bold text-white text-sm">technology</span> (right side) to see details </p>
                <Skillvar/>

                <div className="flex flex-row">
                <div className="flex-1 ">
                    <Skillrendering />
                </div>
                <div className="flex-1  bg-white bg-opacity-5  px-12  py-5  m-5  ">
                    <SkillNavigator />
                </div>
                </div>

            </div>
        </>
    )
}
export default MainSkills;
