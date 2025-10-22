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
import { showMainMenu } from "./menus.js";
import { sleep } from "../utils/sleep.js";

// -------------------------------
// ⚙️ Local Functions & Variables
// -------------------------------

/**
 * Render and display the startup banner animation.
 *
 * Creates ASCII art using figlet, wraps it in a styled box,
 * plays an intro animation, waits briefly, and stops the animation.
 * This function only shows the startup message; it does not clear the screen
 * or navigate to menus.
 *
 * @returns {Promise<void>}
 * @throws {Error} If figlet rendering or animation initialization fails.
 *
 * @example
 * await startUpMessage(); // Shows the intro animation and then stops it.
 */

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

/**
 * Orchestrate the CLI startup: show intro → clear screen → show main menu.
 *
 * Runs the startup message animation, clears the terminal,
 * and then presents the application's main menu to the user.
 * Errors are caught and logged without rethrowing.
 *
 * @returns {Promise<void>}
 *
 * @example
 * // Entry point of the CLI application:
 * await startCLI();
 */

async function startCLI() {
  try {
    await startUpMessage();

    clearScreen();

    showMainMenu();
  } catch (err) {
    console.error("Error:", err);
  }
}

export { startCLI, startUpMessage };
