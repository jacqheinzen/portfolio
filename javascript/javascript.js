//Variables for Contact Modal//
var modal = document.querySelector(".contact-modal")
var button = document.querySelector(".modal-nav")
var exit = document.querySelector(".exit-modal")

//Functions for Contact Modal//
function showModal() {
    modal.style.display = "block";
}
function hideModal() {
    modal.style.display = "none";
}
button.addEventListener('click', showModal);
exit.addEventListener('click', hideModal);

//jQuery for anchor link scrolling//
$(".anchorLink").click(function(){
      var id = $(this).attr("href");
      var offset = $(id).offset();
      $("html, body").animate({
        scrollTop: offset.top
      }, 1000);
    });