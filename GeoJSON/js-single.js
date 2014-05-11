// JavaScript Document

var map = L.mapbox.map('map', 'byounger14.i74a2g7i')
    .setView([39.294786, -76.611196], 13);
    map.zoomControl.setPosition('topright');

// As with any other AJAX request, this technique is subject to the Same Origin Policy:
// http://en.wikipedia.org/wiki/Same_origin_policy
// So the CSV file must be on the same domain as the Javascript, or the server
// delivering it should support CORS.
var featureLayer_Cidae = L.mapbox.featureLayer()
	.addTo(map);
	
featureLayer_Cidae.loadURL('/Map_Dummy_Data_ACCE_Cidae.geojson')


	
// Add custom popups to each using our custom feature properties
featureLayer_Cidae.on('layeradd', function(e) {
		
	var marker = e.layer,
		feature = marker.feature; 
		
	//create custom popup content
	var popupContent = '<h2>' + feature.properties.House + '</h2>' +
						'<img src="' + feature.properties.Image +
						 '">' 
		+ '<p>' +  feature.properties.School + '</p>'
		+ '<p>' + feature.properties.Subcategories + '</p>'
		+ '<p>' + feature.properties.Place + '</p>'
		+ '<p>' + feature.properties.Text + '</p>';

	//http://leafletjs.com/reference.html#popup
	marker.bindPopup(popupContent, {
		closeButton: false,
		minWidth: 320
	});
	
	
	var polyline_options = {
		  color: '#b4d165' //kiwi green
	  };

	var polyline = L.polyline([],polyline_options).addTo(map);
	// For each point in the map.featureLayer, grab its latitude and longitude
	// values and add them to the line.
	featureLayer_Cidae.eachLayer(function(l) {
	  polyline.addLatLng(l.getLatLng());
	});
});



var hide = document.getElementById('hideLayer');

hide.onclick = function(e) {
        featureLayer_Cidae.setFilter(function(f) {
            console.log('layerfunction',f);
            return false;

        });		
        console.log(map);
    };