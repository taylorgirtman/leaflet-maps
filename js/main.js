let map = L.map('mapid').setView([41.396301, 13.425377], 4.65);

L.tileLayer('https://api.mapbox.com/styles/v1/taylorgirtman/ck2xgprdj2kv81cmlv2viynev/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidGF5bG9yZ2lydG1hbiIsImEiOiJjazJ4Z2x0YzAwYjh4M2JyNjdsOXZ6dW96In0.y1-KyFbXSPfMxJg_8QKccg', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18
}).addTo(map);

let marker1 = L.marker([41.902817, 12.496473]).addTo(map);
let marker2 = L.marker([45.464177, 9.189938]).addTo(map);
let marker3 = L.marker([40.851589, 14.268213]).addTo(map);
let marker4 = L.marker([45.067304, 7.681659]).addTo(map);
let marker5 = L.marker([38.116061, 13.362317]).addTo(map);

marker1.bindPopup("<b>Rome</b><br>The largest city in Italy is the capital and home to 2.3 million Italians.").openPopup();
marker2.bindPopup("<b>Milano</b><br>Population: 1,236,837");
marker3.bindPopup("<b>Napoli</b><br>Population: 959,470");
marker4.bindPopup("<b>Turin</b><br>Population: 870,456");
marker5.bindPopup("<b>Palermo</b><br>Population: 648,260");
