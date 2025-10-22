// -------------------------------
// 📦 External Packages
// -------------------------------

import boxen from "boxen";

// -------------------------------
// ⚙️ Local Functions & Variables
// -------------------------------

/**
 * Wrap text in a styled box for terminal output.
 *
 * @param {string} description - Text to display inside the box.
 * @param {object} [options] - boxen options (e.g., borderStyle, borderColor, title).
 * @returns {string} Formatted boxed string.
 *
 * @example
 * console.log(boxedHandler('Hello', { borderStyle: 'round', borderColor: 'green' }));
 */
export function boxedHandler(description, options) {
  return boxen(description, {
    padding: 1,
    margin: 1,
    ...options
  });
}
