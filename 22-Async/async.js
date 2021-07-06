// add global variable containing XHR object here
let httpRequest = new XMLHttpRequest();
let url = API.url;

// add get() function here
function get(url, success, fail) {
  httpRequest.open('GET', url);
  httpRequest.onload = function() {
    if(httpRequest.status === 200) {
      success(httpRequest.responseText);
    }
    else {
      fail(httpRequest.status);
    }
  }
  httpRequest.send();
}

//function to convert temperature
function tempToF(kelvin) {
  return((kelvin - 273.15) * 1.8 + 32).toFixed(0);
}

function failHandler(status) {
  console.log(status);
  const weatherDiv = document.querySelector('#weather');
  weatherDiv.classList.remove('hidden');
}

function successHandler(data) {
  const dataObj = JSON.parse(data);
  const weatherDiv = document.querySelector('#weather');
  const weatherFragment = `
  <img
  src="http://openweathermap.org/img/w/${dataObj.weather[0].icon}.png"
  alt="${dataObj.weather[0].description}"
  class="weather-icon"
  />
  <h3 class="detail"> ${dataObj.name} | ${dataObj.weather[0].description}</h3>
  <span class="tempF">${tempToF(dataObj.main.temp)}&deg;</span>
  `
  weatherDiv.innerHTML = weatherFragment;
  weatherDiv.classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', function() {
  console.log(URL);
  get(url, successHandler, failHandler);
})