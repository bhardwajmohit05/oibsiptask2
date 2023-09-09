// script.js
const ResultField = document.querySelector("#Result1");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
  degree.value = "";
  ResultField.innerHTML = "";
});

if(degree.value === ""){
  convertBtn.setAttribute("disabled","");
  setTimeout(() => {
    convertBtn.removeAttribute('disabled');
  }, 4000);
}


convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convertTemp();
  convertBtn.innerHTML = "<span class='icon'><i class='fa fa-spinner fa-spin'></i> Converting...</span>";
  setTimeout(() => {
    convertBtn.innerHTML ="<span>Convert</span>"
  }, 1000);
});

function convertTemp() {
  let inputValue = degree.value;
  
  setTimeout( () => {
    if (tempType.value === "fahrenheit") {
      const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
      ResultField.innerHTML = `${FahrenheitToCelsius.toFixed(3)} &deg;c`;
    } else if (tempType.value === "Celsius") {
      const CelsiusToFahrenheit = ((inputValue)*(9/5))+32;
      ResultField.innerHTML = `${CelsiusToFahrenheit.toFixed(3)} &deg;F`;
    }
   
  }, 1200)
}