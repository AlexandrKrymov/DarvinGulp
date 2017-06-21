var mapContacts;
function mapContactsResponsive() {
    if($('#map-contacts').length > 0){
        mapContacts.panTo( 55.753321, 37.857773);
        mapContacts.setZoom(15);
        if($(window).width() <=768){
            mapContacts.behaviors.disable('drag');
            mapContacts.behaviors.enable('multiTouch');

        }else{
            mapContacts.behaviors.enable('drag');
            mapContacts.behaviors.enable('multiTouch');
        }
    }

}
function initMaps(){

    if($(document).find('#map-contacts').length > 0){
        mapContacts = new ymaps.Map("map-contacts", {
            center: [55.753321, 37.857773],
            zoom: 15,
            scroll:false,
            duration: 1000,
            controls:[]
        });

        mapContacts.geoObjects
            .add(new ymaps.Placemark([55.753321, 37.857773], {
                    hintContent: '',
                    balloonContent: ''
                },
                {
                    iconLayout: 'default#image',
                    iconImageHref: 'assets/images/map-marker.png',
                    iconImageSize: [212, 126],
                    iconImageOffset: [-212, -126]
                }
            ))
            .add(new ymaps.Placemark([56.015138, 37.827778], {
                    iconCaption: 'г. Пушкино, ул. Заводская, д. 19'
                },
                {
                    preset: 'islands#redDotIconWithCaption'
                }
            ));
        mapContacts.behaviors.disable('scrollZoom');
        mapContacts.controls.add('routeEditor');
        mapContacts.controls.add('zoomControl');
        mapContacts.controls.add('searchControl');
    }




}

ymaps.ready(initMaps);

$(window).on('resize',function(){
    ymaps.ready(mapContactsResponsive);
});
