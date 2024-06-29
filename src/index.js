import "./styles.css";

import * as TX from "tradex-chart";
import config from "./config";
import TEST from "./custom-indicator";
import chartDCA from "./chart-dca";

const chart = document.createElement("tradex-chart");
const app = document.getElementById("app");
app.appendChild(chart);
chart.start(config);
/*
// add custom indicator definition
chart.setIndicators({
  TEST: {
    id: "TEST",
    name: "Custom Indicator",
    event: "addIndicator",
    ind: TEST
  }
});
chart.addIndicator("TEST", "Test1", { data: [] });
*/
// register custom overlay
chart.setCustomOverlays({
  dca: {
    class: chartDCA,
    location: "primaryPane",
  },
});
// add custom overlay
chart.addOverlay("dca", "chartPane");

window.chart = chart;
