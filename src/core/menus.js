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

async function showAbout() {
  // help
  console.log(chalk.green(boxen(welcomeText, { padding: 1 })));

  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "prompts",
      message: "Choose 'Back' to return, or 'Exit' to quit the program.",
      choices: repeatedChoices
    }
  ]);

  const command = answer.prompts;

  exitAndBackHandler(command, null, showMainMenue, () => {});
}

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

async function showMainMenue() {
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

export { showMainMenue, showAbout, showPackageDetails };
