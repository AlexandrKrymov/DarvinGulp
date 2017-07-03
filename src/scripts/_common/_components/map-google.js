var footerMap;
function initMap() {

    var markers = [
        ['Triburg Head Office.', 24.976332, 55.075576],
        ['New Warehouse.', 24.970383, 55.097272]];

    var infoWindowContent = [['<div class="map-bounds-info">' + '<p>Triburg Head Office.</p>' + 'Triburg Freight Services LLC <br/>Supply Chain Management Warehousing & Logistics<br/> PO Box 16939, Jebel Ali Free Zone Dubai, United Arab Emirates' + '</div>'], ['<div class="map-bounds-info">' + '<p>Our New Warehouse.</p>' + 'EFG-Xyz Dubai<br/> Contact:+971 55 55 44 666' + '</div>']];
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    var bounds = new google.maps.LatLngBounds();


    if ($('#map-footer')) {
        footerMap = new google.maps.Map(document.getElementById('map-footer'), {
            center: {lat: 24.976332, lng: 55.075576},
            zoom: 10,
            disableDefaultUI: true,
            scrollwheel: false,
            mapTypeId: 'roadmap'
        });

        for (i = 0; i < markers.length; i++) {
            var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
            bounds.extend(position);
            marker = new google.maps.Marker({
                position: position,
                icon: '/assets/images/map-marker.png',
                map: footerMap,
                title: markers[i][0]
            });
            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    infoWindow.setContent(infoWindowContent[i][0]);
                    infoWindow.open(footerMap, marker);
                }
            })(marker, i));
            footerMap.fitBounds(bounds);
        }
        var boundsListener = google.maps.event.addListener((footerMap), 'bounds_changed', function (event) {
            this.setZoom(11);
            google.maps.event.removeListener(boundsListener);
        });
    }
}

if (typeof google === 'object' && typeof google.maps === 'object') {
    initMap();
}


function mapResponsive() {
    if($('#js-item-card-map').length){
        if (typeof google === 'object' && typeof google.maps === 'object') {
            if($(window).width() < 768){
                map.setOptions({ 'draggable': false });
                map.setOptions({ 'scrollwheel': false });
            }
            map.setCenter({lat: 24.976332, lng: 55.075576});
            google.maps.event.trigger(map, 'resize');
        }
    }
}
$(window).on('load',function () {
    mapResponsive();
}).on('resize',function () {
  
    mapResponsive();
});
