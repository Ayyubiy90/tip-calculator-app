// Select DOM elements
const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("people");
const tipButtons = document.querySelectorAll(".tip-btn");
const customTipInput = document.getElementById("custom-tip");
const tipAmountElement = document.getElementById("tip-amount");
const totalPerPersonElement = document.getElementById("total-per-person");
const resetButton = document.getElementById("reset-btn");

// Initialize variables
let billValue = 0;
let tipPercentage = 0;
let numberOfPeople = 1;

// Add event listeners
billInput.addEventListener("input", handleBillInput);
peopleInput.addEventListener("input", handlePeopleInput);
tipButtons.forEach((button) =>
  button.addEventListener("click", handleTipButtonClick)
);
customTipInput.addEventListener("input", handleCustomTipInput);
resetButton.addEventListener("click", resetCalculator);

// Event handler functions
function handleBillInput() {
  billValue = parseFloat(billInput.value) || 0;
  calculateTip();
}

function handlePeopleInput() {
  numberOfPeople = parseInt(peopleInput.value) || 1;
  calculateTip();
}

function handleTipButtonClick(event) {
  tipButtons.forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");
  customTipInput.value = "";
  tipPercentage = parseFloat(event.target.dataset.tip);
  calculateTip();
}

function handleCustomTipInput() {
  tipButtons.forEach((btn) => btn.classList.remove("active"));
  tipPercentage = parseFloat(customTipInput.value) || 0;
  calculateTip();
}

// Calculation function
function calculateTip() {
  if (billValue > 0 && numberOfPeople > 0) {
    const tipAmount = (billValue * tipPercentage) / 100 / numberOfPeople;
    const totalPerPerson = billValue / numberOfPeople + tipAmount;

    tipAmountElement.textContent = `$${tipAmount.toFixed(2)}`;
    totalPerPersonElement.textContent = `$${totalPerPerson.toFixed(2)}`;
  } else {
    tipAmountElement.textContent = "$0.00";
    totalPerPersonElement.textContent = "$0.00";
  }
}

// Reset function
function resetCalculator() {
  billInput.value = "";
  peopleInput.value = "";
  customTipInput.value = "";
  tipButtons.forEach((btn) => btn.classList.remove("active"));
  tipAmountElement.textContent = "$0.00";
  totalPerPersonElement.textContent = "$0.00";
  billValue = 0;
  tipPercentage = 0;
  numberOfPeople = 1;
}

// Initial calculation
calculateTip();
