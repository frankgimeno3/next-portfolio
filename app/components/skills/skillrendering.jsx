
import Image from "next/image"
import React from 'react';

import Express from "./contents/backcontent/Express"
import Mongo from "./contents/backcontent/Mongo"
import NextBackend from "./contents/backcontent/NextBackend"

import Flutter from "./contents/frontcontent/Flutter"
import Next from "./contents/frontcontent/Next"
import Tailwind from "./contents/frontcontent/Tailwind"
import Typescript from "./contents/frontcontent/Typescript"

import Jira from "./contents/othercontent/Jira"
import Firebase from "./contents/othercontent/Firebase"
import Github from "./contents/othercontent/Github"
import Nextauth from "./contents/othercontent/Nextauth"

function Skillrendering({selectedSkill}) {
    return (
        <div className='flex flex-col px-12   border border-gray-500 rounded-lg h-full '>
            {!selectedSkill &&<p className="my-auto">Please select an option to see details</p>}
            {selectedSkill === "Express" && <Express  />}
            {selectedSkill === "Mongo" && <Mongo/>}
            {selectedSkill === "NextBackend" && <NextBackend/>}
            {selectedSkill === "Flutter" && <Flutter/>}

            {selectedSkill === "Next" && <Next/>}
            {selectedSkill === "Tailwind" && <Tailwind/>}
            {selectedSkill === "Typescript" && <Typescript/>}

            {selectedSkill === "Jira" && <Jira/>}
            {selectedSkill === "Firebase" && <Firebase/>}
            {selectedSkill === "Github" && <Github/>}
            {selectedSkill === "Nextauth" && <Nextauth/>}
        </div>
    )
}
export default Skillrendering;
