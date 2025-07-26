import Chart from "chart.js/auto";

export function renderLineChart() {
  const ctx = document.getElementById("lineChart").getContext("2d");
  if (!ctx) return;

  const chartInstance = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"],
      datasets: [
        {
          label: "Visitantes",
          data: [850, 1150, 1500, 2100, 1950, 2700, 3400],
          pointRadius: 5,
          pointBackgroundColor: "rgb(75, 192, 192)",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Crecimiento de Visitantes (Enero - Julio)",
        },
      },
    },
  });

  window.addEventListener("resize", () => {
    chartInstance.resize();
  });
}
