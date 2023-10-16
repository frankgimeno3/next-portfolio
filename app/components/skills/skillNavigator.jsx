import React from 'react';
import Frontend from "./contents/frontend";
import Backend from "./contents/backend";
import Other from "./contents/other";

function SkillNavigator({ setSelectedSkill, skills }) {
    return (
        <div className='flex flex-col bg-white bg-opacity-10 px-12 py-5 w-full rounded-lg border border-gray-300'>
            {!skills && <p className='py-24'>Please select a field to see my skills in than field</p> }
            {skills === "Frontend" && <Frontend setSelectedSkill={setSelectedSkill} />}
            {skills === "Backend" && <Backend setSelectedSkill={setSelectedSkill} />}
            {skills === "Other" && <Other setSelectedSkill={setSelectedSkill} />}
        </div>
    );
}

export default SkillNavigator;