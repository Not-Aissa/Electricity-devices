import Div from "../../types/elements/Div";
import Span from "../../types/elements/Span";
import dom from "./Dom";
import Monitor from "./Monitor";

const monitorStatus = dom.select<Div>("#monitor_status");
const monitorStatusElm = dom.select<Span>("#monitor_status_elm");

class MonitorUI {
  public static updateMonitorStatus(monitor: Monitor): void {
    if (monitor.isRunning) this.monitorRunning();
    else this.monitorNotRunning();
  }

  private static monitorRunning(): void {
    dom.classList(monitorStatus, "remove", "off");
    dom.classList(monitorStatus, "add", "on");
    monitorStatusElm.textContent = "Monitor on";
  }

  private static monitorNotRunning(): void {
    dom.classList(monitorStatus, "remove", "on");
    dom.classList(monitorStatus, "add", "off");
    monitorStatusElm.textContent = "Monitor off";
  }
}

export default MonitorUI;
