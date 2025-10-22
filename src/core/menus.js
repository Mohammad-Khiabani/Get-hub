// -------------------------------
// 📦 External Packages
// -------------------------------

import inquirer from "inquirer";
import chalk from "chalk";
import boxen from "boxen";
import chalkAnimation from "chalk-animation";

// -------------------------------
// 🧱 Internal Modules
// -------------------------------

import { clearScreen } from "../utils/clearScreen.js";
import { exitAndBackHandler, exitProgram } from "./handlers.js";
import figletAsync from "../utils/figletAsync.js";
import { repeatedChoices, welcomeText } from "../constants/messages.js";
import {
  downloadPackage,
  repositories,
  showPackagesMenu
} from "../services/github.js";
import { boxedHandler } from "../services/ui.js";
import { sleep } from "../utils/sleep.js";

// -------------------------------
// ⚙️ Local Functions & Variables
// -------------------------------

/**
 * Display the About screen with the welcome text and wait for user choice.
 *
 * Shows the formatted welcomeText inside a green box, then prompts the user
 * to either return to the previous stage or exit the program. The selection
 * is forwarded to exitAndBackHandler which will run the appropriate action.
 *
 * @returns {Promise<void>}
 *
 * @example
 * await showAbout();
 */

async function showAbout() {
  // help
  console.log(chalk.green(boxen(welcomeText, { padding: 1 })));

  /** @type {AboutAnswer} */
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "prompts",
      message: "Choose 'Back' to return, or 'Exit' to quit the program.",
      choices: repeatedChoices
    }
  ]);

  const command = answer.prompts;

  exitAndBackHandler(command, null, showMainMenu, () => {});
}

/**
 * Show repository details and prompt actions for a selected package.
 *
 * - Clears the screen.
 * - Looks up repository metadata from the shared `repositories` list using pkgName.
 * - Renders an animated ASCII title for the package, waits, then stops the animation.
 * - Displays the repository description inside a styled box.
 * - Prompts the user to Download, Back, or Exit and delegates handling to exitAndBackHandler.
 *
 * @param {string} pkgName - The repository identifier selected by the user (matches RepoMeta.value).
 * @returns {Promise<void>}
 *
 * @throws {Error} If no repository matches pkgName.
 *
 * @example
 * await showPackageDetails("Enigma-Machine");
 */

async function showPackageDetails(pkgName) {
  clearScreen();

  // finding a repository object from the list of repositories
  const [repoDetails] = repositories.filter(repo => repo.value === pkgName);

  // Animationed title
  const data = await figletAsync(repoDetails.value, {
    font: "Standard",
    horizontalLayout: "default",
    verticalLayout: "default"
  });

  const pkgTitle = chalkAnimation.karaoke(data);
  await sleep(5700);
  pkgTitle.stop();

  // description;
  const boxedOptions = {
    title: repoDetails.name,
    titleAlignment: "center",
    borderStyle: "round",
    borderColor: "yellow"
  };

  const boxed = boxedHandler(repoDetails.description, boxedOptions);

  console.log(boxed);

  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "repository",
      message: chalk.green("Select 'Download' to download"),
      choices: [{ name: "Download", value: "download" }, ...repeatedChoices]
    }
  ]);

  const command = answer.repository;
  exitAndBackHandler(command, repoDetails, showPackagesMenu, downloadPackage);
}

/**
 * Present the main menu and route the selected command.
 *
 * Available options:
 * - About: shows the About screen.
 * - Show all packages: opens the packages list flow.
 * - Exit: runs the goodbye animation and exits the process.
 *
 * @returns {Promise<void>}
 *
 * @example
 * await showMainMenu();
 */

async function showMainMenu() {
  clearScreen();
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "command",
      message: "Select the option you want...",
      choices: ["About", "Show all packages", repeatedChoices[1]],
      required: true
    }
  ]);

  const command = answer.command;

  switch (command) {
    case "About":
      showAbout();
      break;
    case "Show all packages":
      await showPackagesMenu();
      break;
    case "Exit":
      await exitProgram("Goodbye my friend");
    default:
      console.log("nothing");
  }
}

export { showMainMenu, showAbout, showPackageDetails };
