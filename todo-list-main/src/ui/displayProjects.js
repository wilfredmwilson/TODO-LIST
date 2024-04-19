import { getFromLocalStorage } from "../localStorage/localStorage";

export default function displayProjects() {
  const projects = getFromLocalStorage();
  const projectList = document.querySelector('[data-project-list]');
  projects.forEach(project => {
    const projectUI = document.createElement('li');
    const projectTitle = document.createElement('span');
    const projectIcon = document.createElement('span');
    const removeProjectBtn = document.createElement('button');
    projectUI.classList.add('project');
    projectUI.dataset.index = project.id;
    projectTitle.textContent = project.title.toUpperCase();
    projectIcon.innerHTML = '<div class="icon"></div>'
    removeProjectBtn.classList.add('image');
    // removeProjectBtn.innerHTML = '<div class="image"></div>';
    projectUI.appendChild(projectIcon);
    projectUI.appendChild(projectTitle);
    projectUI.appendChild(removeProjectBtn);
    projectList.appendChild(projectUI);
  });
}
