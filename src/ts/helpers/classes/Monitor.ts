import ElectricityDeviceOptions from "../types/ElectricityDeviceOptions";
import ElectricityDevice from "./ElectricityDevice";
import MonitorUI from "./MonitorUI";

class Monitor extends ElectricityDevice {
  public constructor(options: ElectricityDeviceOptions) {
    super(options);
  }

  public on(): void {
    if (this._electricity.electricityStatus === "on") {
      this._isRunning = true;

      MonitorUI.updateMonitorStatus(this);
    } else this._isRunning = false;
  }

  public off(): void {
    if (this._electricity.electricityStatus === "on") {
      this._isRunning = false;

      MonitorUI.updateMonitorStatus(this);
    }
  }
}

export default Monitor;
