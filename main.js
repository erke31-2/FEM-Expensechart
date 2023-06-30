let charts = document.getElementById("charts");
const currentDay = new Date().toUTCString().slice(0, 3).toLowerCase();

const getData = async () => {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((d) => {

        const chart = document.createElement("div");
        chart.classList.add("chart");

        const chartBar = document.createElement("div");
        chartBar.classList.add("chart-bar");
        chartBar.style.height = `${d.amount * 2}px`
        if (d.day === currentDay) {
          chartBar.classList.add("today");
        }
        chartBar.setAttribute("chart-bar-amount", `$${d.amount}`)



        const amount = document.createElement("p");
        amount.textContent = d.day;

        chart.appendChild(chartBar);
        chart.appendChild(amount);
        charts.appendChild(chart);
      });
    })
    .catch((error) => {
      console.error("Failed to fetch data", error);
    });
};
document.addEventListener("DOMContentLoaded", getData);
