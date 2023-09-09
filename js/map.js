require([
    "esri/Map",
    "esri/views/MapView",
    "esri/geometry/Point",
    "esri/symbols/SimpleMarkerSymbol",
    "esri/Graphic"
  ], function(Map, MapView, Point, SimpleMarkerSymbol, Graphic) {
    // Crear un punto con las coordenadas especificadas
    var point = new Point({
      latitude: 14.087399708397804,
      longitude: -87.20170163068413
    });

    // Crear un símbolo para el marcador
    var markerSymbol = new SimpleMarkerSymbol({
      color: [ 174, 214, 241],
      outline: {
        color: [255, 255, 255],
        width: 1
      }
    });

    // Crear un gráfico con el punto y el símbolo
    var graphic = new Graphic({
      geometry: point,
      symbol: markerSymbol
    });

    // Crear el mapa y la vista
    var map = new Map({
      basemap: "dark-gray-vector"
    });

    var view = new MapView({
      container: "map",
      map: map,
      center: point,
      zoom: 15,
      constraints: {
        rotationEnabled: false, // Deshabilitar la rotación del mapa
        minZoom: 15, // Establecer el nivel mínimo de zoom
        maxZoom: 15 // Establecer el nivel máximo de zoom
      }
    });

    // Agregar el gráfico al mapa
    view.graphics.add(graphic);
  });