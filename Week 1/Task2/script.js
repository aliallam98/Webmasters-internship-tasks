const galleryImages = document.querySelectorAll(".gallery-grid a"); // Select anchor tags
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-button");
const modalImage = document.querySelector(".modal-image");

console.log(galleryImages);

galleryImages.forEach((imageLink) => {
  imageLink.addEventListener("click", (event) => {
    console.log("first");

    event.preventDefault(); // Prevent default behavior (navigating to a new page)

    // Get the clicked image source
    const clickedImageSrc = imageLink.querySelector("img").src;

    // Update modal image source
    modalImage.src = clickedImageSrc;

    // Show the modal
    modal.classList.remove("hidden"); // Assuming the hidden class hides the modal
  });
});

closeButton.addEventListener("click", () => {
  modal.classList.add("hidden");
  modalImage.src = "";
});
