var mapMain;

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