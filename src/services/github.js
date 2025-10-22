// -------------------------------
// 📦 External Packages
// -------------------------------
import chalk from "chalk";
import degit from "degit";
import inquirer from "inquirer";

// -------------------------------
// 🧱 Internal Modules
// -------------------------------
import { boxedHandler } from "./ui.js";
import { clearScreen } from "../utils/clearScreen.js";
import { showMainMenue, showPackageDetails } from "../core/menus.js";
import { exitProgram } from "../core/handlers.js";
import { repeatedChoices, username } from "../constants/messages.js";

let repositories = [...repeatedChoices];

// -------------------------------
// ⚙️ Local Functions & Variables
// -------------------------------
async function getrepositories() {
  const boxedOptions = {
    title: chalk.whiteBright("Error"),
    titleAlignment: "center",
    borderStyle: "double",
    borderColor: "yellow"
  };

  try {
    const request = await fetch(
      `https://api.github.com/users/${username}/repos`
    );

    if (!request.ok) {
      const description = chalk.red.bold("Github Account not find!!");
      const boxed = boxedHandler(description, boxedOptions);
      console.log(boxed);

      return false;
    }
    const response = await request.json();

    response.forEach(repo =>
      repositories.push({
        name: repo.name,
        value: repo.name,
        description: repo.description,
        url: repo.html_url
      })
    );

    return true;
  } catch (err) {
    const description = chalk.red.bold("No internet connection :(");
    const boxed = boxedHandler(description, boxedOptions);
    console.log(boxed);

    return false;
  }
}

async function downloadPackage(repoData) {
  clearScreen();

  const match = repoData.url.match(/github\.com\/([^\/]+\/[^\/]+)/);

  console.log(chalk.green(chalk.bold("\n Installing package...")));

  if (match) {
    const repoPath = match[1];
    const emitter = degit(repoPath, {
      cache: false,
      force: true,
      verbose: true
    });

    emitter
      .clone(`downloads/${repoData.value}`)
      .then(() => {
        clearScreen();
        console.log(
          chalk.bgGreen(
            chalk.bold(
              "\n ✅ Repo cloned successfully! \n --Visit the downloads directory--"
            )
          )
        );
      })
      .catch(err => console.error("❌ Error:", err));
  }
}

async function showPackagesMenu() {
  clearScreen();

  repositories.splice(2, repositories.length - 1);
  const connection = await getrepositories();

  if (connection) {
    const answer = await inquirer.prompt([
      {
        type: "list",
        name: "packagenames",
        message: chalk.green("Select one of packages to download"),
        choices: repositories.map(repo => ({
          name: repo.name,
          value: repo.value
        }))
      }
    ]);

    const command = answer.packagenames;

    switch (command) {
      case "Back":
        console.log("back");
        showMainMenue();
        break;
      case "Exit":
        await exitProgram();
      default:
        showPackageDetails(command);
        break;
    }
  }
}

export { repositories, getrepositories, downloadPackage, showPackagesMenu };
