const fetchprojects = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return await res.json()
}
export default async function projects({ params }) {
    const projects = await fetchprojects()

    return (
        <section >
            <h3>Check</h3>
            {projects.map(project => (
                <article className="text-white p-12" key={project.id}>
                    <h2 className="font-bold">{project.title}</h2>
                    <h2>{project.body}</h2>
                    <h3>Hey</h3>
                </article>

            ))}
        </section>
    )
}