// Get the result input element
const resultElement = document.getElementById("result");

// Function to display values in the result input element
function display(value) {
  resultElement.value += value;
}

// Function to clear the result input element
function clearScreen() {
  resultElement.value = "";
}

// Function to perform calculation and display the result
function calculate() {
  try {
    resultElement.value = eval(resultElement.value);
  } catch (error) {
    resultElement.value = "Error";
  }
}
