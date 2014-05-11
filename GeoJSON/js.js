// JavaScript Document

var map = L.mapbox.map('map', 'byounger14.i74a2g7i')
    .setView([39.294786, -76.611196], 13);

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


// NEW HOUSE Aasha

var featureLayer_Aasha = L.mapbox.featureLayer()
	.addTo(map);
	
featureLayer_Aasha.loadURL('/Map_Dummy_Data_ACCE_Aasha.geojson')
	
// Add custom popups to each using our custom feature properties
featureLayer_Aasha.on('layeradd', function(e) {
		
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
		  color: '#018d8e' //Jade Dome
	  };

	var polyline = L.polyline([],polyline_options).addTo(map);
	// For each point in the map.featureLayer, grab its latitude and longitude
	// values and add them to the line.
	featureLayer_Aasha.eachLayer(function(l) {
	  polyline.addLatLng(l.getLatLng());
	});
});


// NEW HOUSE Fata

var featureLayer_Fata = L.mapbox.featureLayer()
	.addTo(map);
	
featureLayer_Fata.loadURL('/Map_Dummy_Data_ACCE_Fata.geojson')


	
// Add custom popups to each using our custom feature properties
featureLayer_Fata.on('layeradd', function(e) {
		
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
		  color: '#31607e' //Stone Blue
	  };

	var polyline = L.polyline([],polyline_options).addTo(map);
	// For each point in the map.featureLayer, grab its latitude and longitude
	// values and add them to the line.
	featureLayer_Fata.eachLayer(function(l) {
	  polyline.addLatLng(l.getLatLng());
	});
});

// NEW HOUSE Elpida

var featureLayer_Elpida = L.mapbox.featureLayer()
	.addTo(map);
	
featureLayer_Elpida.loadURL('/Map_Dummy_Data_ACCE_Elpida.geojson')


	
// Add custom popups to each using our custom feature properties
featureLayer_Elpida.on('layeradd', function(e) {
		
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
		  color: '#f6cd7b' //Yellow Haze
	  };

	var polyline = L.polyline([],polyline_options).addTo(map);
	// For each point in the map.featureLayer, grab its latitude and longitude
	// values and add them to the line.
	featureLayer_Elpida.eachLayer(function(l) {
	  polyline.addLatLng(l.getLatLng());
	});
});

// NEW HOUSE Iyali

var featureLayer_Iyali = L.mapbox.featureLayer()
	.addTo(map);
	
featureLayer_Iyali.loadURL('/DHouse_1.geojson')


	
// Add custom popups to each using our custom feature properties
featureLayer_Iyali.on('layeradd', function(e) {
		
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
		  color: '#1a3e58' //Blue Dusk
	  };

	var polyline = L.polyline([],polyline_options).addTo(map);
	// For each point in the map.featureLayer, grab its latitude and longitude
	// values and add them to the line.
	featureLayer_Iyali.eachLayer(function(l) {
	  polyline.addLatLng(l.getLatLng());
	});
});


// NEW HOUSE Aile

var featureLayer_Aile = L.mapbox.featureLayer()
	.addTo(map);
	
featureLayer_Aile.loadURL('/DHouse_2.geojson')


	
// Add custom popups to each using our custom feature properties
featureLayer_Aile.on('layeradd', function(e) {
		
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
		  color: '#ff6600' //Safety Orange 
	  };

	var polyline = L.polyline([],polyline_options).addTo(map);
	// For each point in the map.featureLayer, grab its latitude and longitude
	// values and add them to the line.
	featureLayer_Aile.eachLayer(function(l) {
	  polyline.addLatLng(l.getLatLng());
	});
});


// NEW HOUSE Gajok

var featureLayer_Gajok = L.mapbox.featureLayer()
	.addTo(map);
	
featureLayer_Gajok.loadURL('/DHouse_3.geojson')


	
// Add custom popups to each using our custom feature properties
featureLayer_Gajok.on('layeradd', function(e) {
		
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
		  color: '#199d5c' //Kelly Green 
	  };

	var polyline = L.polyline([],polyline_options).addTo(map);
	// For each point in the map.featureLayer, grab its latitude and longitude
	// values and add them to the line.
	featureLayer_Gajok.eachLayer(function(l) {
	  polyline.addLatLng(l.getLatLng());
	});
});


// NEW HOUSE Gesin

var featureLayer_Gesin = L.mapbox.featureLayer()
	.addTo(map);
	
featureLayer_Gesin.loadURL('/DHouse_4.geojson')


	
// Add custom popups to each using our custom feature properties
featureLayer_Gesin.on('layeradd', function(e) {
		
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
		  color: '#ffff73' //Daisy 
	  };

	var polyline = L.polyline([],polyline_options).addTo(map);
	// For each point in the map.featureLayer, grab its latitude and longitude
	// values and add them to the line.
	featureLayer_Gesin.eachLayer(function(l) {
	  polyline.addLatLng(l.getLatLng());
	});
});


// NEW HOUSE Khandaan

var featureLayer_Khandaan = L.mapbox.featureLayer()
	.addTo(map);
	
featureLayer_Khandaan.loadURL('/DHouse_5.geojson')


	
// Add custom popups to each using our custom feature properties
featureLayer_Khandaan.on('layeradd', function(e) {
		
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
		  color: '#5cb1ae' //Jade Dome (teal) 
	  };

	var polyline = L.polyline([],polyline_options).addTo(map);
	// For each point in the map.featureLayer, grab its latitude and longitude
	// values and add them to the line.
	featureLayer_Khandaan.eachLayer(function(l) {
	  polyline.addLatLng(l.getLatLng());
	});
});


// NEW HOUSE Porodica

var featureLayer_Porodica = L.mapbox.featureLayer()
	.addTo(map);
	
featureLayer_Porodica.loadURL('/DHouse_6.geojson')


	
// Add custom popups to each using our custom feature properties
featureLayer_Porodica.on('layeradd', function(e) {
		
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
		  color: '#27160f' //Dark Chocolate 
	  };

	var polyline = L.polyline([],polyline_options).addTo(map);
	// For each point in the map.featureLayer, grab its latitude and longitude
	// values and add them to the line.
	featureLayer_Porodica.eachLayer(function(l) {
	  polyline.addLatLng(l.getLatLng());
	});
});


// NEW HOUSE Semejstvo

var featureLayer_Semejstvo = L.mapbox.featureLayer()
	.addTo(map);
	
featureLayer_Semejstvo.loadURL('/DHouse_7.geojson')


	
// Add custom popups to each using our custom feature properties
featureLayer_Semejstvo.on('layeradd', function(e) {
		
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
		  color: '#5e52a4' //Iris (Blue) 
	  };

	var polyline = L.polyline([],polyline_options).addTo(map);
	// For each point in the map.featureLayer, grab its latitude and longitude
	// values and add them to the line.
	featureLayer_Semejstvo.eachLayer(function(l) {
	  polyline.addLatLng(l.getLatLng());
	});
});