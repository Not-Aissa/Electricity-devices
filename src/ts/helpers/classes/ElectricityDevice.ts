import ElectricityDeviceOptions from "../types/ElectricityDeviceOptions";
import Electricity from "./Electricity";
import ElectricityTracker from "./ElectricityTracker";

abstract class ElectricityDevice {
  protected _electricity: Electricity;
  protected _electricityTracker: ElectricityTracker;
  protected _isRunning: boolean;

  public constructor(options: ElectricityDeviceOptions) {
    this._electricity = options.electricity;
    this._electricityTracker = options.electricityTracker;
    this._isRunning = false;
    this._electricityTracker.addDevice(this);
  }

  public abstract on(): void;

  public abstract off(): void;

  public get isRunning(): boolean {
    return this._isRunning;
  }
}

export default ElectricityDevice;
