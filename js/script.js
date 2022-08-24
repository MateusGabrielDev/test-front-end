const modal = document.querySelector(".modal")
let openedModal = false;

function showModal() {
  openedModal = !openedModal;
  
  if(openedModal === true) {
    modal.style="visibility: visible"
  }else {
    modal.style="visibility: hidden"
  }  
}