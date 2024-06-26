import "../styles/style.scss";
import "../styles/reset.scss";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";

const circle: HTMLDivElement = document.querySelector(".box-circle-menu")!;
const boxNavigationList: HTMLUListElement = document.querySelector(".box-navigation-list")!;
const iconHouse: HTMLElement = document.querySelector(".bi-list")!;

circle!.onclick = () => {
    boxNavigationList?.classList.toggle("active");
    iconHouse.classList.toggle("bi-x");
};

function generateBoxProject(data: IProject[]) {
    data.map(project => {
        generateBox(project);
    })
}

function loadProject() {
    fetch("src/doc/script/project.json")
        .then(response => response.json())
        .then(data => generateBoxProject(data))
        .catch(error => {
            console.log(error);
        });
}


function generateBox(project: IProject) {
    const box = document.querySelector(".box-project-content");
    box!.innerHTML += `
    <div class="project-body">
        <h3>
            <a  
                href=${project.linkProject}
                target="_blank"
                rel="noopener noreferrer">
                ${project.title}
            </a>
        </h3>

        <div class="img">
            <img src=${project.img} alt="imagem projeto"/>
        </div>

        <div class="description">
            <p>${project.description}</p>
        </div>
        
        <div class="tech">
            <span>${project.tecnologic.join(" - ")}</span>
        </div>
    </div>
    `;
}

window.addEventListener("load", loadProject);