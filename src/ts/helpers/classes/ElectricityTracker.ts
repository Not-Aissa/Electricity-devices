import storageSet from "../functions/storageSet";
import ElectricityTrackerOptions from "../types/ElectricityTrackerOptions";
import Electricity from "./Electricity";
import ElectricityDevice from "./ElectricityDevice";
import ElectricityTrackerUI from "./ElectricityTrackerUI";

class ElectricityTracker {
  private _electricity: Electricity;
  private _devices: Array<ElectricityDevice>;

  public constructor(options: ElectricityTrackerOptions) {
    this._electricity = options.electricity;
    this._devices = new Array();
  }

  public on(): void {
    this._electricity.electricityStatus = "on";

    ElectricityTrackerUI.updateDevicesStatus(this._electricity);

    storageSet("electricityStatus", "on");
  }

  public off(): void {
    for (const device of this._devices) device.off();

    this._electricity.electricityStatus = "off";

    ElectricityTrackerUI.updateDevicesStatus(this._electricity);

    storageSet("electricityStatus", "off");
  }

  public addDevice(device: ElectricityDevice): void {
    this._devices.push(device);
  }

  public get devices(): Array<ElectricityDevice> {
    return this._devices;
  }
}

export default ElectricityTracker;
