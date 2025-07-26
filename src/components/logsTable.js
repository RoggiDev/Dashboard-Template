import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import logsData from "../data/logs.json5";

export function renderLogsTable() {
  const tableContainer = document.getElementById("grid-table");
  if (!tableContainer) return;

  new Grid({
    columns: logsData.columns,
    data: logsData.data,
    pagination: {
      enabled: true,
      limit: 15,
    },
    search: true,
    sort: true,
    language: {
      search: {
        placeholder: "Buscar...",
      },
      pagination: {
        previous: "Anterior",
        next: "Siguiente",
        showing: "Mostrando",
        results: () => "resultados",
      },
    },
  }).render(tableContainer);
}
