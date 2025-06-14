// get necessary elements
const getField = document.getElementById("user-input");
const getCheckButton = document.getElementById("check-btn");
const getClearButton = document.getElementById("clear-btn");
const resultField = document.getElementById("results-div")

// declare functions
const isValid = (number) => {
  const testRegex = /^1?\s*(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
  return testRegex.test(number)
}

const clearFields = (e) => {
  e.preventDefault();
  getField.value = "";
  resultField.innerText = "";
  resultField.style.backgroundColor = null;
}

const checkFields = (e) => {
  e.preventDefault();
  const number = getField.value;
  if (!number) {
    alert("Please provide a phone number");
  } else if (!isValid(number)) {
    resultField.innerText = `Invalid US number: ${number}`;
    resultField.style.backgroundColor = "var(--red)";
    } else {
      resultField.innerText = `Valid US number: ${number}`;
    resultField.style.backgroundColor = "var(--green)";
    }
}

// adding listeners to buttons
getCheckButton.addEventListener("click", (e) => checkFields(e));
getClearButton.addEventListener("click", (e) => clearFields(e));
