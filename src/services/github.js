// -------------------------------
// 📦 External Packages
// -------------------------------
import chalk from "chalk";
import degit from "degit";
import inquirer from "inquirer";

// -------------------------------
// 🧱 Internal Modules
// -------------------------------
import { boxedHandler } from "../ui/display.js";
import { clearScreen } from "../utils/clearScreen.js";
import { showMainMenu, showPackageDetails } from "../core/menus.js";
import {
  errorHandler,
  exitAndBackHandler,
  exitProgram
} from "../core/handlers.js";
import { repeatedChoices } from "../constants/messages.js";
import { inquirerHandler } from "../ui/prompts.js";

/**
 * Repository choice list exposed to menus.
 *
 * Starts with repeated menu choices (Back / Exit) and populated by getrepositories.
 *
 * @type {Array<RepoMeta|string>}
 */
let repositories = [...repeatedChoices];

// -------------------------------
// ⚙️ Local Functions & Variables
// -------------------------------

/**
 * Fetch the public repositories of the configured GitHub username and populate `repositories`.
 *
 * - Makes a GET request to GitHub API `/users/{username}/repos`.
 * - On success pushes mapped RepoMeta objects into `repositories`.
 * - On network error or non-OK response shows a boxed error message and returns false.
 *
 * @returns {Promise<boolean>} `true` if repositories were successfully fetched and appended, otherwise `false`.
 *
 * @example
 * const ok = await getrepositories();
 * if (ok) { console.log('repos loaded'); }
 */

async function getrepositories(username) {
  const boxedOptions = {
    title: chalk.whiteBright("Error"),
    titleAlignment: "center",
    borderStyle: "double",
    borderColor: "yellow"
  };

  try {
    const request = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100`
    );

    if (!request.ok) {
      const description = chalk.red.bold("Github Account not find!!");
      const boxed = boxedHandler(description, boxedOptions);
      console.log(boxed);

      await errorHandler(
        "Accont not found.Please select one of the options below."
      );

      return false;
    } else {
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
    }
  } catch (err) {
    const description = chalk.red.bold("No internet connection :(");
    const boxed = boxedHandler(description, boxedOptions);
    console.log(boxed);
    await errorHandler(
      "Connetion Error.\n Please select one of the options below."
    );
    return false;
  }
}

/**
 * Download a repository using `degit` into the local `downloads` folder.
 *
 * - Expects `repoData` to contain a valid `url` field pointing to the GitHub repo.
 * - Extracts the `username/repo` path via regex and uses degit to clone without .git history.
 * - Prints success or error messages to the console.
 *
 * @param {RepoMeta} repoData - Repository metadata object (from `repositories`).
 * @returns {Promise<void>}
 *
 * @example
 * await downloadPackage({ name: 'Enigma', value: 'Enigma', description: '...', url: 'https://github.com/user/Enigma' });
 */

async function downloadPackage(repoData) {
  clearScreen();

  const match = repoData.url.match(/github\.com\/([^\/]+\/[^\/]+)/);
  console.log(match);

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

/**
 * Display the packages menu:
 * - Ensures `repositories` contains the latest repos by calling `getrepositories`.
 * - Prompts the user to select a repository to view details or to choose Back/Exit.
 * - Routes the choice to the appropriate handler.
 *
 * Note: This function truncates `repositories` before loading to keep only the repeatedChoices placeholders,
 * then appends fresh repo entries returned by GitHub.
 *
 * @returns {Promise<void>}
 *
 * @example
 * await showPackagesMenu();
 */
async function showPackagesMenu(username) {
  clearScreen();

  repositories.splice(2, repositories.length - 1);
  const connection = await getrepositories(username);

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
        showMainMenu();
        break;
      case "Exit":
        await exitProgram();
      default:
        showPackageDetails(command);
        break;
    }
  }
}

async function findGithubAccounts() {
  try {
    clearScreen();
    const answer = await inquirer.prompt([
      {
        type: "input",
        name: "user",
        message: "Enter the GitHub account you are looking for: ",
        required: true
      }
    ]);

    const username = answer.user;
    showPackagesMenu(username);
  } catch (err) {
    console.log(err);
  }
}

export {
  repositories,
  getrepositories,
  downloadPackage,
  showPackagesMenu,
  findGithubAccounts
};
