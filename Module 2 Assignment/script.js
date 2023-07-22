var buttonCheck = false;
var button = document.getElementById("hideButton");

function myFunction() {
  var x = document.getElementsByClassName("city");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
}
function myFunction2() {
  var x = document.getElementsByClassName("city");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "block";
  }
}
function toggle() {
  var x = document.getElementsByClassName("city");
  if (buttonCheck === false) {
    myFunction();
    buttonCheck = true;
  } else {
    myFunction2();
    buttonCheck = false;
  }
}
button.addEventListener("click", toggle);

var lightOnOrOff=false;
var light=document.getElementById("light");
var image=document.getElementById("myImage");
function lighton(){
  var pic;
if(lightOnOrOff==false){
  image.src = "pic_bulboff.gif"
  lightOnOrOff = true;
}else{
  image.src  = "pic_bulbon.gif"
  lightOnOrOff = false;
}
}
light.addEventListener("click",lighton);

var MapWebButton=document.getElementById("OpenMapWebsite");
function openGoogleMaps() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
          var lat = position.coords.latitude;
          var lng = position.coords.longitude;
          // Open Google Maps website with the current location
          window.open(`https://www.google.com/maps?q=${lat},${lng}`, '_blank');
      });
  }
}MapWebButton.addEventListener("click",openGoogleMaps);

var latitudeValue;
  var longitudeValue;
  function getLocation(callback) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        latitudeValue = position.coords.latitude;
        longitudeValue = position.coords.longitude;
        callback();
      }
    );
  }

  function myMap() {
    var mapProp = {
      center: new google.maps.LatLng(latitudeValue, longitudeValue),
      zoom: 8
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
  }

  var mapButton = document.getElementById("Map");
  mapButton.addEventListener("click", function() {
    getLocation(myMap);
  });