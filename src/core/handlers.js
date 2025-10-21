// -------------------------------
// 📦 External Packages
// -------------------------------

import chalkAnimation from "chalk-animation";

// -------------------------------
// 🧱 Internal Modules
// -------------------------------

import { clearScreen } from "../utils/clearScreen.js";
import figletAsync from "../utils/figletAsync.js";
import { sleep } from "../utils/sleep.js";

// -------------------------------
// ⚙️ Local Functions & Variables
// -------------------------------

async function exitProgram() {
  clearScreen();

  const goodbyeAscii = await figletAsync("Goodbye my friend", {
    font: "Slant",
    horizontalLayout: "default",
    verticalLayout: "default"
  });

  const goodbyAnimation = chalkAnimation.rainbow(goodbyeAscii);
  await sleep(5000);
  goodbyAnimation.stop();

  clearScreen();

  // close the terminal
  process.exit();
}

async function exitAndBackHandler(value, repoData, backStage, defaultFunc) {
  switch (value) {
    case "Back":
      console.log("back");
      backStage();
      break;
    case "Exit":
      await exitProgram();
    default:
      defaultFunc(repoData);
      break;
  }
}

export { exitProgram, exitAndBackHandler };
