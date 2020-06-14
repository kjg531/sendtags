export function validateSendTo(tags) {
  // TODO: document and test
  // Regex to validate comma separated list
  const re = /^([a-z0-9]+(?:,[a-z0-9]+)*)$/gm;
  return re.test(String(tags).toLowerCase());
}
