import "../assets/style/common.css";
import "../assets/style/layout.css";
import "../assets/style/tooltip.css";

import "../lib/chart.min";
import {statistic__count} from "../components/statistic/statistic__sales/statistic__count/count";

if (document.getElementById("count")) {
  const count = (() => {
    const count = new Chart(document.getElementById("count"), statistic__count);
  })();
}
