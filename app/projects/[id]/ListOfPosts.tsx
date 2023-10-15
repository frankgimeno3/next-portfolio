// const fetchprojects = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     return await res.json()
// }
import Likebutton from "./Likebutton"

const fetchprojects = async () => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {cache:'no-store'})
    .then(res =>res.json())
}

export default async function ListOfPosts() {
    const projects = await fetchprojects()

    return   projects.slice(0, 5).map(project => (
                <article className="text-white p-12" key={project.id}>
                    <h2 className="font-bold">{project.title}</h2>
                    <h2>{project.body}</h2>
                    <Likebutton id={project.id}/>
                </article>

            ))
    
}