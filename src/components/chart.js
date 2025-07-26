import { Chart, registerables } from "chart.js";

export function renderChart() {
  Chart.register(...registerables);

  const ctx = document.getElementById("myChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Ene", "Feb", "Mar", "Abr"],
      datasets: [
        {
          label: "Ventas",
          data: [12, 19, 3, 5],
          backgroundColor: ["rgba(54, 162, 235, 0.6)"],
          borderColor: ["rgba(54, 162, 235, 1)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
