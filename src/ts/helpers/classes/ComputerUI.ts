import Div from "../../types/elements/Div";
import Image from "../../types/elements/Image";
import Span from "../../types/elements/Span";
import Computer from "./Computer";
import dom from "./Dom";

const computerStatus = dom.select<Div>("#computer_status");
const monitorStatusElm = dom.select<Span>("#monitor_status_elm");
const fanImage = dom.select<Image>("#fan_img");

class ComputerUI {
  public static updateComputerStatus(computer: Computer): void {
    if (computer.isRunning) this.computerRunning();
    else this.computerNotRunning();
  }

  private static computerRunning(): void {
    dom.classList(computerStatus, "remove", "off");
    dom.classList(computerStatus, "add", "on");
    dom.classList(fanImage, "remove", "slow");
    dom.classList(fanImage, "add", "fast");

    setTimeout(() => {
      monitorStatusElm.textContent = "Loading...";
    }, 1500);

    setTimeout(() => {
      monitorStatusElm.textContent = "Welcome";
    }, 3000);
  }

  private static computerNotRunning(): void {
    dom.classList(computerStatus, "remove", "on");
    dom.classList(computerStatus, "add", "off");
    dom.classList(fanImage, "remove", "fast");
  }
}

export default ComputerUI;
