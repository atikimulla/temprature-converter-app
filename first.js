const celsiusField = document.getElementById("celsius");
const degree = document.getElementById("degree");
const convertBtn = document.getElementById("convert-btn");
const tempType = document.getElementById("temp.type"); // Corrected selector

window.addEventListener("load", () => {
  degree.value = "";
  celsiusField.innerHTML = "";
});

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convertBtn.innerHTML = "<span><i class='fa-solid fa-spinner fa-spin'></i>Converting...</span>";

  setTimeout(() => {
    convertToCelsius();
    convertBtn.innerHTML = "<span>Convert</span>";
  }, 1200);
});

function convertToCelsius() {
  let inputValue = parseFloat(degree.value);

  if (tempType) {
    if (tempType.value === "fahrenheit") {
      const fahrenheitToCelsius = (inputValue - 32) * (5 / 9);
      celsiusField.innerHTML = `${fahrenheitToCelsius.toFixed(3)}&deg;C`;
    } else if (tempType.value === "kelvin") {
      const kelvinToCelsius = inputValue - 273.15;
      celsiusField.innerHTML = `${kelvinToCelsius.toFixed(3)}&deg;C`;
    }
  } else {
    console.error("Element with ID 'temp.type' not found.");
  }
}
