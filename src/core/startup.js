// -------------------------------
// 📦 External Packages
// -------------------------------

import chalkAnimation from "chalk-animation";

// -------------------------------
// 🧱 Internal Modules
// -------------------------------

import figletAsync from "../utils/figletAsync.js";
import { boxedHandler } from "../services/ui.js";
import { clearScreen } from "../utils/clearScreen.js";
import { showMainMenue } from "./menus.js";
import { sleep } from "../utils/sleep.js";

// -------------------------------
// ⚙️ Local Functions & Variables
// -------------------------------

async function startUpMessage() {
  try {
    const data = await figletAsync("GETHUB", {
      font: "Slant",
      horizontalLayout: "default",
      verticalLayout: "default"
    });

    const boxedOptions = {
      borderStyle: "double",
      borderColor: "magenta"
    };

    const boxed = boxedHandler(data, boxedOptions);

    const animation = chalkAnimation.radar(boxed);

    await sleep(5000);
    animation.stop();

    console.log("animation startup ok");
  } catch (err) {
    throw err;
  }
}

async function startCLI() {
  try {
    await startUpMessage();

    clearScreen();

    showMainMenue();
  } catch (err) {
    console.error("Error:", err);
  }
}

export { startCLI, startUpMessage };
