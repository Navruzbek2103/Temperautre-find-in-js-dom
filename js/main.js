var elForm = document.querySelector("#form");
var elTempInput = document.querySelector("#temp1");
var elFahrenheit = document.querySelector("#fahrenheit");
var elBody = document.querySelector("body")
var elHeading = document.querySelector(".h1");
var result;

elForm.addEventListener("submit", function(evt){
  evt.preventDefault();

  var elValue = elTempInput.value.trim();

  if(elValue && Number(elValue) || elValue == 0){
    result = (Math.ceil(elTempInput.value * (9 / 5) + 32) + '^ F');

    var allResult = elFahrenheit.value = result;
  }
  else if(elValue && !Number(elValue)){
    alert("Iltimos, raqamli ma'lumot kiriting...")
  }
  else{
    alert("Error!");
  }

  if(elTempInput.value >= 36){
    elBody.style.backgroundColor = "#fb5f5f";
    elHeading.style.color = "white";

  }

  else if(elTempInput.value >= 1){
    elBody.style.backgroundColor = "#88fb5f";
    elHeading.style.color = "black";
  }

  else if(elTempInput.value >= 0){
    elBody.style.backgroundColor = "#9999fc";
    // elHeading.style.color = "black";
  }

});