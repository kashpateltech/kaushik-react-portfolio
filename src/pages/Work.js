import React from 'react';

function Work() {
    const projects = [
        {
            name: 'ARTHOUSE',
            image: './assets/images/arthouse.jpeg',
            deployed: 'https://raimeeab.github.io/arthouse-project/',
            github: 'https://github.com/Raimeeab/arthouse-project/tree/home_page',
            desc: 'ArtHouse is real world application designed for users to search for various artists and their artwork.Technologies used in this project are HTML, CSS, Foundation, JavaScript and Third party APIs',
            tech: 'JavaScript, Third Party APIs, Jquery'
        },
        {
            name: 'Work Day Scheduler',
            image: './assets/images/Workdayscheduler.png',
            deployed: 'https://kashpateltech.github.io/workdayscheduler/',
            github: 'https://github.com/kashpateltech/workdayscheduler',
            desc: 'Created a workday scheduler using bootstrap, Jquery. Used moment.js. Colour coded the hourly blocks depending on whether its the current hour or its already past or is in the future, used local storage to save the entries in the scheduler.',
            tech: 'JavaScript, Bootstrap, Jquery, Moment.js'
        },
        {
            name: 'Random Password Generator',
            image: './assets/images/randompasswordgenerator.png',
            deployed: 'https://kashpateltech.github.io/Randompasswordgenerator/',
            github: 'https://github.com/kashpateltech/Randompasswordgenerator',
            desc: 'Random Password Generator in JS This is my first JS project. I have added comments to make it easy to understand the code. I have primarily used IF, IF-ELSE and ELSE statements along with FOR loop. It will create random passwords depending on criteria the',
            tech: 'HTML/CSS, JavaScript, Jquery'
        }
    ]

    return (
        <>
            <main>
                <div className="page-section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 py-3">
                                {projects.map((project) => (
                                    <div class="widget-wrap wow fadeInUp">
                                        <article className="blog-entry container-fluid">
                                            <div className="entry-header">
                                                <div className="post-thumbnail">
                                                    <img
                                                        src={project.image}
                                                        alt="project-image" />
                                                </div>
                                            </div>
                                            <div className="post-title"><a href={project.github} target="_blank">{project.name} </a><span className="mai-logo-github"></span></div>
                                            <div className="entry-content"><a href={project.deployed} target="_blank">Deployed Link</a></div>
                                            <div className="entry-content">
                                                <p>{project.desc}</p>
                                                <p>Tech Stack: {project.tech}</p>
                                            </div>
                                        </article>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Work;
