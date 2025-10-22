// -------------------------------
// 📦 External Packages
// -------------------------------
import chalk from "chalk";

/**
 * Choice item used in interactive menus.
 *
 * @typedef {object} MenuChoice
 * @property {string} name - Rendered label shown to the user (can include chalk styles).
 * @property {string} value - Internal value used to handle the selection (e.g., "Back", "Exit").
 */

// -------------------------------
// ⚙️ Local Functions & Variables
// -------------------------------

/**
 * Common menu choices reused across different screens.
 *
 * Includes:
 * - A Back option to return to the previous step.
 * - An Exit option to quit the program.
 *
 * Chalk is used to colorize the labels for better visibility.
 *
 * @type {MenuChoice[]}
 */

const repeatedChoices = [
  {
    name: chalk.yellow("Back - Return to previous stage"),
    value: "Back"
  },
  { name: chalk.red("Exit - Quit the program"), value: "Exit" }
];

/**
 * Default GitHub username.
 * @type {string}
 */
const username = "Mohammad-Khiabani";

/**
 * Multiline welcome and about text displayed in the CLI.
 *
 * Explains the tool’s purpose, features, and a short introduction about the author.
 * Shown when the user selects the "about" option from the main menu.
 *
 * Note: Contains explicit newline characters to preserve formatting in the terminal.
 *
 * @type {string}
 */
const welcomeText = `Hi there 👋  \n
✨ Welcome to my Github CLI ✨
I'm Mohammad Khiabani, a passionate developer who loves building creative tools and open-source projects.  \n
This CLI tool lets you explore and download my GitHub repositories directly from your terminal — fast, simple, and fun!\n

✨ Features:

- Browse my public repos\n
- Download any repo with a single command\n
- Get info about each project\n

🚀 Just run the CLI and start exploring!\n

Thanks for checking it out — happy coding!
`;

export { repeatedChoices, username, welcomeText };
