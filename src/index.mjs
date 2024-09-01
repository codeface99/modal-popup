import "./styles.css";

// Get the modal
const modal = document.getElementById("modal");

// Get the trigger button
const openModalButtonElement = document.getElementById("open-modal-btn");

// Get the close button
const closeBtn = document.getElementById("close-btn");
const cancelBtn = document.getElementById("cancel-btn");
const confirmBtn = document.getElementById("confirm-btn");

// Add event listener to trigger button
openModalButtonElement.addEventListener("click", () => {
  // Show the modal
  modal.style.display = "block";
});

// Add event listener to close button
closeBtn.addEventListener("click", () => {
  // Hide the modal
  modal.style.display = "none";
});

// Add event listener to close button
cancelBtn.addEventListener("click", () => {
  // Hide the modal
  modal.style.display = "none";
});

// Add event listener to close button
confirmBtn.addEventListener("click", () => {
  alert("Confirmed!");
  // Hide the modal
  modal.style.display = "none";
});

// Add event listener to modal (for outside click)
modal.addEventListener("click", (e) => {
  // If the click is outside the modal content, hide the modal
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
