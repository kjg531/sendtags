import { cleanConfig } from './cleanConfig';

export function validateConfig(config) {
  // TODO: document and test
  try {
    JSON.parse(cleanConfig(config));
  } catch (e) {
    return false;
  }
  return true;
}
