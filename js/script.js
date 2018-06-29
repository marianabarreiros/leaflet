$(function() {
  // use below if you want to specify the path for leaflet's images
  //L.Icon.Default.imagePath = '@Url.Content("~/Content/img/leaflet")';

  var curLocation = [0, 0];
  // use below if you have a model
  // var curLocation = [@Model.Location.Latitude, @Model.Location.Longitude];

  if (curLocation[0] == 0 && curLocation[1] == 0) {
    curLocation = [-12.98248, -38.48236];
  }

// create a map in the "map" div, set the view to a given place and zoom

  var map = L.map('map').setView(curLocation, 13);
// add an OpenStreetMap tile layer
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; Contribuidores do <a href="http://osm.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  map.attributionControl.setPrefix(false);
  var marker = new L.marker(curLocation, {
    draggable: 'true'
  }).addTo(map);

  marker.on('dragend', function(event) {
    var position = marker.getLatLng();
    marker.setLatLng(position, {
      draggable: 'true'
    }).bindPopup(position).update();
  });


})

