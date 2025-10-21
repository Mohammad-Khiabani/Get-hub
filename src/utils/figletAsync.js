// -------------------------------
// 📦 External Packages
// -------------------------------

import figlet from "figlet";

// -------------------------------
// ⚙️ Local Functions & Variables
// -------------------------------

const figletAsync = (text, options) =>
  new Promise((resolve, reject) => {
    figlet.text(text, options, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });

export default figletAsync;
