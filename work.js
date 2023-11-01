import { projectsArray } from "/projects.js"

console.log(projectsArray)

const projectsEl = document.getElementById('projects-el')

function render(){
    let projectsHTML = ""

    projectsArray.forEach(function(project){
        // Write project HTML
        projectsHTML += `
        <div class="project-card">
            <h2 class="project-name">${project.name}</h2>
            <p class="project-description">${project.description}</p>
            <hr>
            <div class="project-content">
                <img class="project-img" src="${project.img}">
                <p>${project.text}</p>
            </div>
            <a class="project-btn" href="${project.link}" target="_blank">Visit project</a>
        </div>
        `
    })

    projectsEl.innerHTML = projectsHTML
}

render()