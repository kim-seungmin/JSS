const pr = document.getElementById("geo");

function onGeoOK(position){
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    pr.innerText+=lat+", "+long;
}

function onGeoErr(){
    alert("err");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoErr);
