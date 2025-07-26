// Libraries JS
import _ from "lodash";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "gridjs/dist/theme/mermaid.min.css";
import "./css/shared/site.css";
import "./css/shared/theme.css";
import "./css/style.scss";

// Scripts
import "bootstrap";

// Components
import { renderLineChart } from "./components/lineChart.js";
import { renderDevicesChart } from "./components/devicesChart";
import { renderCountriesMap } from "./components/countriesMap.js";
import { renderExplorersChart } from "./components/explorersChart";
import { renderLogsTable } from "./components/logsTable";

// Data
import logsData from "./data/logs.json5";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./service-worker.js")
      .then((registration) => {
        console.log("SW registrado", registration);
      })
      .catch((err) => {
        console.log("SW no registrado", err);
      });
  });
}

// Render Components
document.addEventListener("DOMContentLoaded", () => {
  renderLineChart();
  renderDevicesChart();
  renderCountriesMap();
  renderExplorersChart();
  renderLogsTable();

  let sumaTiempos = 0;
  let contador = 0;

  const timeIndex = logsData.columns.indexOf("Tiempo en la página (min)");

  for (let i = 0; i < logsData.data.length; i++) {
    const fila = logsData.data[i];
    const tiempo = fila[timeIndex];

    if (typeof tiempo === "number") {
      sumaTiempos += tiempo;

      contador++;
    }
  }

  const promedio = contador ? sumaTiempos / contador : 0;

  document.getElementById("averageTime").innerText = _.join(
    [promedio, "min"],
    " "
  );
});
