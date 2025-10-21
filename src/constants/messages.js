// -------------------------------
// 📦 External Packages
// -------------------------------
import chalk from "chalk";

// -------------------------------
// ⚙️ Local Functions & Variables
// -------------------------------
const repeatedChoices = [
  {
    name: chalk.yellow("Back - Return to previous stage"),
    value: "Back"
  },
  { name: chalk.red("Exit - Quit the program"), value: "Exit" }
];

const username = "Mohammad-Khiabani";

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
