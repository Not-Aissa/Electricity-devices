import Computer from "./ts/helpers/classes/Computer";
import dom from "./ts/helpers/classes/Dom";
import Electricity from "./ts/helpers/classes/Electricity";
import ElectricityTracker from "./ts/helpers/classes/ElectricityTracker";
import ElectricityTrackerUI from "./ts/helpers/classes/ElectricityTrackerUI";
import Monitor from "./ts/helpers/classes/Monitor";
import MonitorUI from "./ts/helpers/classes/MonitorUI";
import Div from "./ts/types/elements/Div";

const monitorStatus = dom.select<Div>("#monitor_status");
const computerPower = dom.select<Div>("#computer_power");
const electricityPower = dom.select<Div>("#electricity_power");

const electricity = new Electricity();

const electricityTracker = new ElectricityTracker({ electricity });

const monitor = new Monitor({ electricity, electricityTracker });

const computer = new Computer({ electricity, electricityTracker });

window.addEventListener("load", () => {
  MonitorUI.updateMonitorStatus(monitor);
  ElectricityTrackerUI.updateDevicesStatus(electricity);
});

monitorStatus.addEventListener("click", () => {
  if (monitor.isRunning) monitor.off();
  else monitor.on();
});

computerPower.addEventListener("click", () => {
  if (computer.isRunning) {
    computer.off();
    monitor.off();
  } else {
    computer.on();
    monitor.on();
  }
});

electricityPower.addEventListener("click", () => {
  if (electricity.electricityStatus === "off") electricityTracker.on();
  else electricityTracker.off();
});
