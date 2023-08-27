import storageGet from "../functions/storageGet";
import ElectricityStatus from "../types/ElectricityStatus";

class Electricity {
  private _electricityStatus: ElectricityStatus;

  public constructor() {
    this._electricityStatus = storageGet("electricityStatus", false) || "off";
  }

  public get electricityStatus(): ElectricityStatus {
    return this._electricityStatus;
  }

  public set electricityStatus(newES: ElectricityStatus) {
    this._electricityStatus = newES;
  }
}

export default Electricity;
