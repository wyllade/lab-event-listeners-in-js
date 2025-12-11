// ===========================
// Step 1: Functions
// ===========================

// Change background color to a valid RGB color
function changeBackgroundColor() {
  document.body.style.backgroundColor = "rgb(173, 216, 230)"; // lightblue in rgb
}

// Reset background color (clears it)
function resetBackgroundColor() {
  document.body.style.backgroundColor = "";
}

// Display key pressed in expected format
function displayKeyPress(event) {
  const keyParagraph = document.getElementById("keyPressDisplay");
  if (keyParagraph) keyParagraph.textContent = `Key pressed: ${event.key}`;
}

// Display user input
function displayUserInput() {
  const inputValue = document.getElementById("textInput").value;
  const displayParagraph = document.getElementById("textInputDisplay");
  if (displayParagraph) displayParagraph.textContent = `You typed: ${inputValue}`;  // Changed from "Your input: " to "You typed: "
}

// Dynamic interaction example
function dynamicInteraction() {
  const inputValue = document.getElementById("textInput").value.toLowerCase();
  if (inputValue.includes("green")) {
    document.body.style.backgroundColor = "rgb(144, 238, 144)"; // lightgreen in rgb
  }
}

// ===========================
// Step 2: Setup Event Listeners
// ===========================

function setupEventListeners() {
  const changeBtn = document.getElementById("changeColorButton");
  const resetBtn = document.getElementById("resetColorButton");
  const textInput = document.getElementById("textInput");

  if (changeBtn) changeBtn.addEventListener("click", changeBackgroundColor);
  if (resetBtn) resetBtn.addEventListener("dblclick", resetBackgroundColor); // tests expect dblclick
  if (textInput) {
    textInput.addEventListener("input", displayUserInput);
    textInput.addEventListener("input", dynamicInteraction);
  }

  document.addEventListener("keydown", displayKeyPress);
}

// Only run in browser
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", setupEventListeners);
}

// ===========================
// ===========================
// Step 3: Export Functions for Jest Tests
// ===========================

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  dynamicInteraction,
  setupEventListeners
};
