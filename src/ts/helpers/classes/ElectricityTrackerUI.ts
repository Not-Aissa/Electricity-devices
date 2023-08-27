import Div from "../../types/elements/Div";
import Image from "../../types/elements/Image";
import Span from "../../types/elements/Span";
import dom from "./Dom";
import Electricity from "./Electricity";

const monitorStatus = dom.select<Div>("#monitor_status");
const computerStatus = dom.select<Div>("#computer_status");
const electricityStatus = dom.select<Div>("#electricity_status");
const electricityStatusElm = dom.select<Span>("#electricity_status_elm");
const monitorStatusElm = dom.select<Span>("#monitor_status_elm");
const fanImage = dom.select<Image>("#fan_img");

class ElectricityTrackerUI {
  public static updateDevicesStatus(electricity: Electricity): void {
    if (electricity.electricityStatus === "off") this.electricityOFF();
    else this.electricityON();
  }

  private static electricityOFF(): void {
    dom.classList(monitorStatus, "remove", ["off", "on"]);
    dom.classList(monitorStatus, "add", "no-signal");
    monitorStatusElm.textContent = "";
    dom.classList(computerStatus, "remove", ["off", "on"]);
    dom.classList(computerStatus, "add", "no-signal");
    dom.classList(electricityStatus, "remove", "on");
    dom.classList(electricityStatus, "add", "off");
    dom.classList(fanImage, "remove", "fast");
    electricityStatusElm.textContent = "Off";
  }

  private static electricityON(): void {
    dom.classList(monitorStatus, "remove", ["no-signal", "on"]);
    dom.classList(monitorStatus, "add", "off");
    monitorStatusElm.textContent = "Monitor off";
    dom.classList(computerStatus, "remove", ["no-signal", "on"]);
    dom.classList(computerStatus, "add", "off");
    dom.classList(electricityStatus, "remove", "off");
    dom.classList(electricityStatus, "add", "on");
    electricityStatusElm.textContent = "On";
  }
}

export default ElectricityTrackerUI;
