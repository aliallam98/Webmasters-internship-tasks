const galleryImages = document.querySelectorAll(".gallery-grid a"); 
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-button");
const modalImage = document.querySelector(".modal-image");

console.log(galleryImages);

galleryImages.forEach((imageLink) => {
  imageLink.addEventListener("click", (event) => {
    // console.log("first");

    event.preventDefault(); 

    const clickedImageSrc = imageLink.querySelector("img").src;

    modalImage.src = clickedImageSrc;

    // Show the modal
    modal.classList.remove("hidden"); 
  });
});

closeButton.addEventListener("click", () => {
  modal.classList.add("hidden");
  modalImage.src = "";
});
