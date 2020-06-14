export function validateTags(tags) {
  // Regex to validate comma separated list
  // TODO: document and test
  const re = /^([a-z0-9]+(?:,[a-z0-9]+)*)$/gm;
  return re.test(String(tags).toLowerCase());
}
