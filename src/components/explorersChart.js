import { Chart } from "chart.js/auto";
import explorersData from "../data/explorers.yaml";

export function renderExplorersChart() {
  const explorersChart = document
    .getElementById("explorersChart")
    .getContext("2d");
  if (!explorersChart) return;

  const chartInstance = new Chart(explorersChart, {
    type: "doughnut",
    data: {
      labels: ["Chrome", "Edge", "Safari"],
      datasets: [
        {
          data: [
            explorersData.chrome,
            explorersData.edge,
            explorersData.safari,
          ],
          backgroundColor: ["#4bc0c0", "#0078D7", "#ffcd56"],
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "70%",
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            usePointStyle: true,
            pointStyle: "circle",
          },
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              return `${
                context.label
              }: ${context.raw.toLocaleString()} usuarios`;
            },
          },
        },
        title: {
          display: true,
          text: "Usuarios por navegador",
        },
      },
    },
  });

  function resizeChart() {
    chartInstance.resize();
  }

  window.addEventListener("load", resizeChart);
  window.addEventListener("resize", resizeChart);
}
