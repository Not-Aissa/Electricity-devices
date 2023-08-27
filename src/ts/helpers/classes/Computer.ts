import ElectricityDeviceOptions from "../types/ElectricityDeviceOptions";
import ComputerUI from "./ComputerUI";
import ElectricityDevice from "./ElectricityDevice";

class Computer extends ElectricityDevice {
  public constructor(options: ElectricityDeviceOptions) {
    super(options);
  }

  public on(): void {
    if (this._electricity.electricityStatus === "on") {
      this._isRunning = true;

      ComputerUI.updateComputerStatus(this);
    } else this._isRunning = false;
  }

  public off(): void {
    if (this._electricity.electricityStatus === "on") {
      this._isRunning = false;

      ComputerUI.updateComputerStatus(this);
    }
  }
}

export default Computer;
