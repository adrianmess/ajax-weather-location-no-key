apiReq("https://ipinfo.io/json", locations);


function apiReq(url, callbackFunction){
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", url, true)
    xhttp.send()
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            callbackFunction(this.responseText);
                }
        }
}

function locations(data){
   var locationInfo = JSON.parse(data)
   console.log(locationInfo);
  var location = locationInfo.loc;
      var locationSplit = location.split(",");
    var longitude = locationSplit[0];
    var latitude = locationSplit[1];
    
    document.getElementById("city").innerHTML = locationInfo.city;
    weatherUrl = `https://api.weather.gov/points/${longitude},${latitude}/forecast/hourly`;
    apiReq(weatherUrl, weather)
}

function weather(data){
   var weatherInfo = JSON.parse(data).properties.periods[0];
   var temp = weatherInfo.temperature;
    var icon = weatherInfo.icon;
    
   document.getElementById("temp").innerHTML = temp+'F';
   document.getElementById("img").src = icon;
}



// console.log(locations)


// var weather = function(){
//     var xhttpWeather = new XMLHttpRequest();

//     xhttpWeather.onreadystatecheange = function() {
//          if (this.readyState == 4 && this.status == 200) {
  
//               }
//          }
//         xhttpWeather.open("Get", `https://api.weather.gov/points/${longitude},${latitude}/forecast/hourly`, true);
//             xhttp.setRequestHeader("Content-Type", "text/json")
//         xhttpWeather.send();
// }




   
    
