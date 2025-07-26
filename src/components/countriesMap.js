import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/jsvectormap.css";
import "jsvectormap/dist/maps/world.js";

export function renderCountriesMap() {
  const mapElement = document.getElementById("worldMap");
  if (!mapElement) return;

  const map = new jsVectorMap({
    selector: "#worldMap",
    map: "world",
    zoomButtons: true,
    markers: [
      { name: "Ciudad de México", coords: [19.4326, -99.1332] },
      { name: "Nueva York", coords: [40.7128, -74.006] },
      { name: "Londres", coords: [51.5074, -0.1278] },
      { name: "Tokio", coords: [35.6895, 139.6917] },
      { name: "Buenos Aires", coords: [-34.6037, -58.3816] },
    ],
    markerStyle: {
      initial: {
        fill: "#FF5722",
        stroke: "#fff",
        r: 7,
      },
      hover: {
        stroke: "#000",
        "stroke-width": 2,
      },
    },
    labels: {
      markers: {
        render: (marker) => marker.name,
      },
    },
  });

  function resizeMap() {
    map.updateSize();
  }

  window.addEventListener("load", resizeMap);
  window.addEventListener("resize", resizeMap);
}
