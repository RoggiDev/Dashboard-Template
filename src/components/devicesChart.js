import Chart from "chart.js/auto";
import devicesData from "../data/devices.yaml";

export function renderDevicesChart() {
  const canvas = document.getElementById("devicesChart").getContext("2d");
  if (!canvas) return;

  const chartInstance = new Chart(canvas, {
    type: "bar",
    data: {
      labels: ["PC", "Tablet", "Phone"],
      datasets: [
        {
          label: "Usuarios",
          data: [devicesData.pc, devicesData.tablet, devicesData.phone],
          backgroundColor: ["#4bc0c0", "#36a2eb", "#ffcd56"],
          borderRadius: 6,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: (context) =>
              `${context.label}: ${context.raw.toLocaleString()} usuarios`,
          },
        },
        title: {
          display: true,
          text: "Usuarios por tipo de dispositivo",
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
