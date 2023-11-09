// const fetchprojects = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     return await res.json()
// }

import ListOfPosts from "./[id]/ListOfPosts"

 
export default function projects({ params }) {
 
    return (
        <section >
            <h3>Check</h3>
           <ListOfPosts/>
        </section>
    )
}