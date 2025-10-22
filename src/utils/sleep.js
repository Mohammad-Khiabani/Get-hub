// -------------------------------
// ⚙️ Local Functions & Variables
// -------------------------------

/**
 * Pause execution for a given time.
 *
 * @param {number} ms - Milliseconds to wait.
 * @returns {Promise<void>} Resolves after the timeout.
 *
 * @example
 * await sleep(500); // waits 500ms
 */
export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
