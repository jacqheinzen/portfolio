const projectNav = document.getElementsByTagName("li");
const projectList = document.querySelector(".project-list");
const contactForm = document.querySelector(".contact-form");

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

function showContact() {
    if (contactForm.style.display === "none" || contactForm.style.display === "") {
        contactForm.style.display = "block";
    }
}


projectNav[1].addEventListener('mouseover', showList);
projectNav[1].addEventListener('mouseout', hideList);
projectNav[2].addEventListener('click', showContact);