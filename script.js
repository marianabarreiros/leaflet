// create a map in the "map" div, set the view to a given place and zoom
var map = L.map('map').setView([-12.9704, -38.5124], 13);
var marker = L.marker([-12.98248, -38.48236]).addTo(map).bindPopup('This is Salvador, BA.');


// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; Contribuidores do <a href="http://osm.org/copyright">OpenStreetMap</a>',
    maxZoom: 18,
}).addTo(map);

