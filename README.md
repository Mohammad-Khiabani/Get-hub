# ⚙️ Get-hub CLI

**Download your GitHub repositories right from the terminal — fast, smooth, and interactive.**  
A stylish command‑line tool built with Node.js to browse and clone repositories from your GitHub profile.

---

## 🚀 Features

### ✅ Version 1.0
- 🎨 Clean, animated CLI interface using **chalk** and **figlet**
- ⚡ Fast cloning via **degit**
- 🧭 Interactive menu navigation with **inquirer**
- 🧱 Modular architecture — clean code design
- 🧹 Auto‑clears the terminal for a smooth UX
- 💾 Downloads directly into the `/downloads` folder inside your project root

### 🆕 Version 2.0
- 🔍 Allow entering any GitHub username to browse and download their repositories
- 📁 Automatically saves each repository inside a folder named after its GitHub account
---

## 💡 About This Project
This CLI tool was created as a personal project to explore clean code practices and modular architecture in Node.js.  
It’s a small step toward building more polished and developer‑friendly command‑line tools.

---

## 🛠️ Installation

```bash
# Clone the project
git clone https://github.com/Mohammad-Khiabani/Get-hub.git

# Navigate into the folder
cd Get-hub

# Install dependencies
npm install

# Run the CLI
-node ./bin/index.js

**Or
-npm start
```

---

## 🧩 Usage Example

```bash
? Select a project to download:
  Back
  Exit
> Get-hub
  Enigma-Machine
```

Your chosen repository will be downloaded into the `/downloads` folder — clean, fast, and ready to use.

---

## 🧠 Tech Stack
- **Node.js (ESM)**  
- **Inquirer** – interactive CLI menus  
- **Chalk / Chalk‑Animation** – colors and animations  
- **Figlet / Boxen** – ASCII art and message boxes  
- **Degit** – lightweight GitHub repo downloader  

---

## 🧱 Project Structure

```
bin/
 └── index.js            # Entry point (CLI startup)

src/
 ├── core/               # Logic flow (startup, main menu, command handlers)
 │    └── startup.js
 │    └── mainMenu.js
 │    └── commandHandler.js
 ├── ui/                 # Everything related to user interaction
 │    └── prompts.js     # Inquirer-based input (ask, select menus)
 │    └── display.js     # Output formatting, boxed messages, colors, logs
 │    └── ui.js          # UI DSL layer (ui.ask(), ui.menu(), ui.confirm())
 ├── services/           # GitHub API calls, repo listing, download logic
 │    └── githubService.js
 │    └── downloadService.js
 ├── utils/              # Small generic helpers (no UI, no API)
 │    └── clearScreen.js
 │    └── sleep.js
 │    └── fileHelpers.js
 └── constants/          # Static strings, config keys, reusable values
      └── messages.js
      └── choices.js

downloads/               # Where repositories get saved to local system

```

---

## 🔮 Roadmap
## 🔮 Roadmap
- [x] Allow entering any GitHub username to browse and download their repositories  
- [x] Enable npm installation & global CLI access  
- [ ] Add support for GitLab / Bitbucket  
- [ ] Add search by keyword  
- [ ] Add dark/light CLI themes  
- [ ] Add multi‑language support (EN / FA) 
- [ ] Add pagination with a limit of 10 repositories per page  
repositories  

---

## 🤝 Contributing
Contributions are welcome!  
Fork this repository, create a new branch, and submit a PR.  
Ideas, bug fixes, or UI tweaks — everything helps.

---

## 📜 License
This project is licensed under the [MIT License](./LICENSE).

---

**Created by Mohammad Khiabani — exploring the beauty of simple, modular CLI design. ✨**
# Get-hub
A Node.js CLI tool for browsing and downloading packages from your GitHub repositories.
