'use strict';

function initMap() {
    var uluru = {
        lat: 1.312717,
        lng: 103.900014
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}