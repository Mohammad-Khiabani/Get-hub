# ⚙️ Get-hub CLI

**Download your GitHub repositories right from the terminal — fast, smooth, and interactive.**  
A stylish command‑line tool built with Node.js to browse and clone repositories from your GitHub profile.

---

## 🚀 Features
- 🎨 Clean, animated CLI interface using **chalk** and **figlet**
- ⚡ Fast cloning via **degit**
- 🧭 Interactive menu navigation with **inquirer**
- 🧱 Modular architecture — clean code design
- 🧹 Auto‑clears the terminal for a smooth UX
- 💾 Downloads directly into the `/downloads` folder inside your project root

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
 └── index.js           # Entry point (CLI startup)
src/
 ├── core/              # Startup, menu, and CLI flow
 ├── services/          # GitHub API & download logic
 ├── utils/             # Helpers (clearScreen, sleep, etc.)
 └── constants/         # Repeated texts, choices, configs
downloads/              # Where repositories are downloaded
```

---

## 🔮 Roadmap
- [ ] Add support for GitLab / Bitbucket  
- [ ] Add search by keyword  
- [ ] Add dark/light CLI themes  
- [ ] Add multi‑language support (EN / FA)  
- [ ] Enable npm installation & global CLI access  
- [ ] Allow entering any GitHub username to browse and download their repositories  

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
