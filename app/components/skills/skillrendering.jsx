
import Image from "next/image"
import React from 'react';

function Skillrendering({selectedSkill}) {
    return (
        <div className='flex flex-col px-12   border border-gray-500 rounded-lg h-full '>
            {!selectedSkill &&<p className="my-auto">Please select an option to see details</p>}
            {selectedSkill && <p className="my-auto">{selectedSkill}</p>}
        </div>
    )
}
export default Skillrendering;
