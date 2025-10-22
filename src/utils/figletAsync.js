// -------------------------------
// 📦 External Packages
// -------------------------------

import figlet from "figlet";

// -------------------------------
// ⚙️ Local Functions & Variables
// -------------------------------

/**
 * Generate ASCII art text using figlet as a Promise.
 *
 * @param {string} text - Input text to render.
 * @param {object} [options] - figlet options (font, horizontalLayout, verticalLayout).
 * @returns {Promise<string>} Resolves with the rendered ASCII art string.
 *
 * @example
 * const art = await figletAsync('GETHUB', { font: 'Slant' });
 * console.log(art);
 */

const figletAsync = (text, options) =>
  new Promise((resolve, reject) => {
    figlet.text(text, options, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });

export default figletAsync;
