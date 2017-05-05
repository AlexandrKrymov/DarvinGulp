var mapMain;
var mapContacts;
function mapContactsResponsive() {
    mapMain.setCenter([55.655275, 37.553648]);
    if($(window).width() <=768){
        mapMain.behaviors.disable('drag');
        //mapContacts.behaviors.disable('multiTouch');

    }else{
        mapMain.behaviors.enable('drag');
        mapMain.behaviors.enable('multiTouch');
    }
    if($(window).width() <=450){
        if($(document).find('#map-contacts').length > 0){
            ymaps.ready(function () {
                mapMain.setZoom(2);
            });

        }

    }else{
        if($(document).find('#map-contacts').length > 0){
            ymaps.ready(function () {
                mapMain.setZoom(3);
            });
        }
    }
}
function initMaps(){

    if($(document).find('#map-main').length > 0){
        mapMain = new ymaps.Map("map-main", {
            center: [56.015138, 37.827778],
            zoom: 15,
            scroll:false,
            duration: 1000,
            controls:[]
        });

        mapMain.geoObjects
            .add(new ymaps.Placemark([56.015138, 37.827778], {
                    iconCaption: 'г. Пушкино, ул. Заводская, д. 19'
                },
                {
                    preset: 'islands#redDotIconWithCaption'
                }
            ));
        mapMain.behaviors.disable('scrollZoom');
        mapMain.behaviors.disable('drag');
    }




}

ymaps.ready(initMaps);
