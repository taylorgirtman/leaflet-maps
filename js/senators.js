let map = L.map('mapid').setView([28.024857, -83.647345], 6.10);

L.tileLayer('https://api.mapbox.com/styles/v1/taylorgirtman/ck2xig3t32mur1cmqrcr0abgh/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidGF5bG9yZ2lydG1hbiIsImEiOiJjazJ4Z2x0YzAwYjh4M2JyNjdsOXZ6dW96In0.y1-KyFbXSPfMxJg_8QKccg', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18
}).addTo(map);

for ( let i = 0; i < places.length; i++ ) {
  L.marker( [places[i].latitude, places[i].longitude ] )
  .bindPopup( '<h3>' + places[i].title + '</h3>' + '<p>' + places[i].description + '</p>')
  .addTo( map );
}
