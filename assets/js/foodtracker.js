// Declare the map variable globally so it can be accessed inside initMap function
let map;
let marker;

function initMap() {
    const initialPosition = { lat: 28.7041, lng: 77.1025 }; // Placeholder: New Delhi coordinates

    // Create a new map instance with specific options
    map = new google.maps.Map(document.getElementById("map"), {
        center: initialPosition,
        zoom: 14,
        disableDefaultUI: true, // Optional: Hide default map controls
        styles: [
            { "elementType": "geometry", "stylers": [{ "color": "#212121" }] },
            { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] },
            { "elementType": "labels.text.fill", "stylers": [{ "color": "#757575" }] },
            { "elementType": "labels.text.stroke", "stylers": [{ "color": "#212121" }] },
            { "featureType": "administrative.land_parcel", "elementType": "labels.text.fill", "stylers": [{ "color": "#bdbdbd" }] },
            { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#757575" }] },
            { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#181818" }] },
            { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{ "color": "#616161" }] },
            { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#1e1e1e" }] },
            { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#757575" }] },
            { "featureType": "road", "elementType": "labels.text.stroke", "stylers": [{ "color": "#212121" }] },
            { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#3e3e3e" }] },
            { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#3e3e3e" }] },
            { "featureType": "road.highway", "elementType": "labels.text.fill", "stylers": [{ "color": "#f5f5f5" }] },
            { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#2f2f2f" }] },
            { "featureType": "transit.station", "elementType": "labels.text.fill", "stylers": [{ "color": "#616161" }] },
            { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#000000" }] },
            { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#3d3d3d" }] }
        ]
    });

    // Create a marker to indicate a location on the map
    marker = new google.maps.Marker({
        position: initialPosition,
        map: map,
        title: "Order is on its way!"
    });
}
