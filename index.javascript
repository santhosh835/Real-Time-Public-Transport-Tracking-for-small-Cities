let map;
let marker;

function initMap() {

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: { lat: 10.7905, lng: 78.7047 } // Example location
    });

    marker = new google.maps.Marker({
        position: { lat: 10.7905, lng: 78.7047 },
        map: map,
        title: "Bus Location"
    });

    setInterval(updateLocation, 5000);
}

function updateLocation() {

    fetch("http://localhost:8080/api/bus/location")
        .then(response => response.json())
        .then(data => {

            let newPos = {
                lat: data.latitude,
                lng: data.longitude
            };

            marker.setPosition(newPos);
        });
}
