import "../assets/style/common.css";
import "../assets/style/layout.css";
import "../assets/style/tooltip.css";

import "../lib/chart.min";
import {statistic__dashboard} from "../components/statistic/statistic__sales/statisic__dashboard/dashboard";

if (document.getElementById("sales")) {
  const dashboard = (() => {
    const dashboard = new Chart(
      document.getElementById("sales"),
      statistic__dashboard,
    );
  })();
}
