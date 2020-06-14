/**
 * Regex to validate comma separated list.
 * @param {string} config - The base to raise
 * @return {boolean} - The exponent power
 */
export function validateTags(tags) {
  const re = /^([a-z0-9]+(?:,[a-z0-9]+)*)$/gm;
  return re.test(String(tags).toLowerCase());
}
