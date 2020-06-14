import { cleanConfig } from './cleanConfig';

/**
 * Validates config string.
 * \u2018\u2019 are the unicode escape for curly single quotes
 * \u201C\u201D are the unicode escape for curly double quotes
 * @param {string} config - The base to raise
 * @return {boolean} - The exponent power
 */
export function validateConfig(config) {
  try {
    JSON.parse(cleanConfig(config));
  } catch (e) {
    return false;
  }
  return true;
}
