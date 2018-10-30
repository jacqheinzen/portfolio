// // Using vanilla JavaScript for mouseover dropdown menu//
// const projectNav = document.getElementsByTagName("li");
// const projectList = document.querySelector(".project-list");
// const contactForm = document.querySelector(".contact-form");

// function showList() {
//     console.log(projectList.style)
//    if (projectList.style.display === "none" || projectList.style.display === "") {
//        projectList.style.display = "flex";
//        projectList.style.flexDirection = "column";
//    }
// }

// function hideList() {
//     if (projectList.style.display === "flex") {
//         projectList.style.display = "none";
//     }
// }

// function showContact() {
//     if (contactForm.style.display === "none" || contactForm.style.display === "") {
//         contactForm.style.display = "block";
//     }
// }


// projectNav[1].addEventListener('mouseover', showList);
// projectNav[1].addEventListener('mouseout', hideList);
// projectNav[2].addEventListener('click', showContact);

var modal = document.querySelector(".contact-modal")
var button = document.querySelector(".modal-nav")
var exit = document.querySelector(".exit-modal")//add html for span element to exit modal//

function showModal() {
    modal.style.display = "block";
}
function hideModal() {
    modal.style.display = "none";
}
button.addEventListener('click', showModal);
exit.addEventListener('click', hideModal);