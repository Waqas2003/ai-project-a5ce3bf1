// Add event listeners to buttons
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      console.log("Button clicked!");
    });
  });
});