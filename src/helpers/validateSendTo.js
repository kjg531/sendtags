/**
 * Regex to validate comma separated list
 * @param {string} tags - The base to raise
 * @return {boolean} - The exponent power
 */
export function validateSendTo(tags) {
  const re = /^([a-z0-9]+(?:,[a-z0-9]+)*)$/gm;
  return re.test(String(tags).toLowerCase());
}
