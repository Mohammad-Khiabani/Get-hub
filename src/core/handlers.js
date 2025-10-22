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

/**
 * Gracefully exit the program with a farewell animation.
 *
 * Clears the screen, renders a figlet "Goodbye" banner, animates it with
 * a rainbow effect, waits briefly, stops the animation, clears the screen again,
 * and terminates the Node.js process.
 *
 * @returns {Promise<void>}
 * @throws {Error} If figlet rendering or animation setup fails.
 *
 * @example
 * await exitProgram(); // Shows goodbye animation and exits the process
 */

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

/**
 * Handle common menu selections: Back, Exit, or default action to proceed.
 *
 * - `value` is the menu choice the user selected.
 * - If `value` is "Back" the function invokes `backStage` to return to the previous stage.
 * - If `value` is "Exit" the function runs the exit flow and terminates the process.
 * - Otherwise the function calls `defaultFunc(repoData)` to continue to the next menu or perform the default action.
 *
 * @param {string} value - Selected menu value from the UI, e.g. "Back" or "Exit".
 * @param {any} repoData - Repository metadata used by the default action when proceeding (e.g., selected repo info).
 * @param {() => void} backStage - Callback invoked to return to the previous UI stage.
 * @param {(data: any) => void|Promise<void>} defaultFunc - Default handler executed when the selection is neither Back nor Exit; typically advances to the next menu or starts download.
 * @returns {Promise<void>}
 *
 * @example
 * // choice is the selected menu value, data is repo metadata
 * await exitAndBackHandler(choice, data, () => showPreviousMenu(), d => showRepoDetails(d));
 */

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
