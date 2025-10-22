// -------------------------------
// ⚙️ Local Functions & Variables
// -------------------------------

/**
 * Clear the terminal screen.
 *
 * Writes the control sequence that clears the terminal output.
 *
 * @returns {void}
 *
 * @example
 * clearScreen();
 */
export const clearScreen = () => process.stdout.write("\x1Bc");
