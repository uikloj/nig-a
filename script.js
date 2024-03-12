//ЗАГРУЗКА КАРТЫ И ПРИМЕР...
var map = L.map('map').setView([51.505, -0.09], 3); // Устанавливаем центр и масштаб

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



var redIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
   iconSize: [25, 41],
   iconAnchor: [12, 41],
   popupAnchor: [1, -34]
   });

var rdIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
   iconSize: [25, 41],
   iconAnchor: [12, 41],
   popupAnchor: [1, -34]
   });


var reIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png',
   iconSize: [25, 41],
   iconAnchor: [12, 41],
   popupAnchor: [1, -34]
   });
// L.market([51.505, -0.09]).addTo(map)
//     .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
//     .openPopup();


L.marker([40.7128, -74.0060 ],{icon: rdIcom}).addTo(map)  
    .bindPopup("привет мир")
    // .openPopup();

L.marker([50.7128, -44.0060 ],{icon: reIcom}).addTo(map)  
    .bindPopup("привет мир76")
    // .openPopup();


L.marker([70.7128, -94.0060 ],{icon: redIcom}).addTo(map)  
    .bindPopup("привет мир99")
    // .openPopup();
fetch("Coordinates.csv")
.then(response=>{
    for(var i = 1; i < rows.length; i++) {
        var columns = rows[i].split(",");

        var country = columns[0];
        var capitkl = columns[1];
        var latitude = parseFloat(columns[2]);
        var longitude = parseFloat(columns[3]);

        L.marker([latitude,longitude],{icon: redIcom})
            .addTo(map)
            .bindPopup(country +"" + capitkl)
            .openPopup();
        

    }
})