ymaps.ready(init);
  var myMap,
      myPlacemark;

  function init() {
    myMap = new ymaps.Map("map", {
      center: [59.938631, 30.323055],
      zoom: 16,
      controls: []
    });

    myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {}, {
      iconLayout: 'default#image',
      iconImageHref: '/img/map-pin.svg',
      iconImageSize: [67, 100],
      iconImageOffset: [-33, -100]
    });

    myMap.geoObjects.add(myPlacemark);

    myMap.behaviors.disable('scrollZoom');
  }
