import Header from "../../components/Header"
import { useContext } from "react"
import { Context } from "../../context/Context"

export default function Project (){
    const{ projects, inProgress, ideas} = useContext(Context)
    return(
        <>
        <Header></Header>
        <div className='container'>
            <div className='blogs'>
                <div className='finished-projects'>
                    <h1>Finished Projects</h1>
                    <div className='row'>
                        <div className='col'>
                        {projects.map((project,key) =>(
                            <div key={key}>
                                <h2 id="project-title">{project.data.title}</h2>
                                <p id="projects-desc" className= "noHover">{project.data.description}</p>
                                <p id="projects-tech" className= "noHover">{project.data.technology}</p>
                                <a id="github" target="_blank" rel="noreferrer" href={project.data.link}>Github</a>
                            </div>

                        ))}
                        </div>
                    </div>
                </div>                  
            </div>
        </div>
        <hr/>
        <div className="container">
            <div className="blogs">
                <div className="unfinished-projects">
                    <h1>In-Progress</h1>
                    <div className="row">
                        <div className="col">
                            {inProgress.map((inProg, key)=>(
                                <div key={key}>
                                    <h2 id="project-title">{inProg.data.title}</h2>
                                    <p id="projects-desc" className="noHover">{inProg.data.description}</p>
                                    <p id="projects-tech" className="noHover">{inProg.data.technology}</p>
                                    <a id="github" target="_blank" rel="noreferrer" href={inProg.data.link}>Github</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr></hr>
        <div className="container">
            <div className="blogs">
                <div className="unfinished-projects">
                    <h1>Ideas?</h1>
                    <div className="row">
                        <div className="col">
                            {ideas.map((idea,key)=>(
                                <div key={key}>
                                    <h2 id="projects-desc">{idea.data.title}</h2>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr></hr>
        </>
    )
}