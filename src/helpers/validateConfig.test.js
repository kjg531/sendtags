import { validateConfig } from './validateConfig';
test('cleans config of curly quotes', () => {
  expect(validateConfig('{“Spiderman”: [“hero”, “tough”, “smart”, “tall”]}')).toBe(true);
  expect(validateConfig('{“Spiderman”: [“hero”, “tough”,, “smart”, “tall”]}')).toBe(
    false,
  );
  expect(validateConfig('{“Spiderman”: [“hero”, “tough”, “smart”, “tall”]')).toBe(false);
  expect(validateConfig('{“Spiderman”: [“hero”,]}')).toBe(false);
  expect(validateConfig('{“Spiderman”: [“hero”]}')).toBe(true);
});
