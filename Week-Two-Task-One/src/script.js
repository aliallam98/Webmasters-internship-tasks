const menuButton = document.getElementById("menuButton");
const mobNav = document.getElementById("mobNav");

menuButton.addEventListener("click", function () {
    mobNav.classList.toggle("hidden"); 
});


const counterElements = document.querySelectorAll(".counter-number");
const animateCounters = () => {
    counterElements.forEach((counterElement) => {
      const targetNumber = parseInt(counterElement.textContent.replace("+", ""));
      const duration = 3000;
      let currentCount = 0;
  
      const animate = () => {
        currentCount = Math.floor(currentCount + (targetNumber - currentCount) * (Math.min(window.performance.now() / duration, 1))); // Linear increment
        counterElement.textContent = `${currentCount}+`;
  
        if (currentCount < targetNumber) {
          requestAnimationFrame(animate);
        }
      };
  
      animate();
    });
  };
window.addEventListener("load", animateCounters);

