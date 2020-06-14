import { validateTags } from './validateTags';
test('cleans config of curly quotes', () => {
  expect(validateTags('human,tall,weak')).toBe(true);
  expect(validateTags('human,tall,weak,')).toBe(false);
  expect(validateTags('human,tall,,weak')).toBe(false);
  expect(validateTags('human')).toBe(true);
});
