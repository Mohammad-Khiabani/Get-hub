// -------------------------------
// 📦 External Packages
// -------------------------------

import boxen from "boxen";

// -------------------------------
// ⚙️ Local Functions & Variables
// -------------------------------
export function boxedHandler(description, options) {
  return boxen(description, {
    padding: 1,
    margin: 1,
    ...options
  });
}
