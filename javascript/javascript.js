const projectNav = document.getElementsByTagName("li");
const projectList = document.querySelector(".project-list");

function showList() {
    console.log(projectList.style)
   if (projectList.style.display === "none" || projectList.style.display === "") {
       projectList.style.display = "flex";
       projectList.style.flexDirection = "column";
   }
}

function hideList() {
    if (projectList.style.display === "flex") {
        projectList.style.display = "none";
    }
}

projectNav[1].addEventListener('mouseover', showList);
projectNav[1].addEventListener('mouseout', hideList);