import 'bootstrap-icons/font/bootstrap-icons.css';
import type { IProject } from './interface/IProject';

const circle = document.querySelector<HTMLButtonElement>(".box-circle-menu")!;
const boxNavigationList = document.querySelector<HTMLUListElement>(".box-navigation-list")!;
const iconHouse = document.querySelector<HTMLElement>(".bi-list")!;

circle.addEventListener("click", () => {
    boxNavigationList.classList.toggle("active");
    iconHouse.classList.toggle("bi-x");
});

function generateBoxProject(data: IProject[]) {
    const box = document.querySelector(".box-project-content");
    if (!box) return;

    const html = data.map(project => generateBox(project)).join("");
    box.innerHTML = html;
}

function loadProject() {
    fetch("src/doc/script/project.json")
        .then(response => response.json())
        .then(data => generateBoxProject(data))
        .catch(error => {
            console.error("Erro ao carregar projetos:", error);
        });
}

function generateBox(project: IProject): string {
    return `
    <div class="project-body">
        <h3>
            <a  
                href="${project.vercel || project.linkProject}"
                target="_blank"
                rel="noopener noreferrer">
                ${project.title}
            </a>
        </h3>

        <div class="description">
            <p>${project.description}</p>
        </div>
        
        <div class="tech">
            <span>${project.tecnologic.join(" - ")}</span>
        </div>

        <div class="links">
            <a href="${project.linkProject}" target="_blank" rel="noopener noreferrer" aria-label="Repositório no GitHub" title="Ver código no GitHub">
                <i class="bi bi-github"></i>
            </a>
            ${project.vercel ? `<a href="${project.vercel}" target="_blank" rel="noopener noreferrer" aria-label="Ver deploy" title="Ver projeto online"><i class="bi bi-box-arrow-up-right"></i></a>` : ''}
        </div>
    </div>
    `;
}

window.addEventListener("load", loadProject);
