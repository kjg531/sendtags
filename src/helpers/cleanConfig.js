/**
 * Cleans config string before parsing.
 * \u2018\u2019 are the unicode escape for curly single quotes
 * \u201C\u201D are the unicode escape for curly double quotes
 * @param {string} config - The base to raise
 * @return {string} - The exponent power
 */

export const cleanConfig = (config) => {
  return config.replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"');
};
