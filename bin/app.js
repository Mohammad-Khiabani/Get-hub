#!/usr/bin/env node
// @ts-check

// -------------------------------
// 🧱 Internal Modules
// -------------------------------

/**
 * @fileoverview Entry point of the CLI application.
 * Imports and runs the startup process that initializes the CLI interface.
 *
 * This file serves as the executable script defined in package.json
 * under the "bin" field, allowing users to run the CLI globally.
 *
 * @module bin/index
 */

import { startCLI } from "./../src/core/startup.js";

/**
 * Initializes the CLI by calling the startup function.
 * This function displays animations, titles, and the main menu.
 *
 * @function
 * @see {@link src/core/startup.js|startCLI}
 */
startCLI();
