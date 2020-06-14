import { validateTags } from './validateTags';
test('Cleans csv list using validateTags', () => {
  expect(validateTags('human,tall,weak')).toBe(true);
  expect(validateTags('human,tall,weak,')).toBe(false);
  expect(validateTags('human,tall,,weak')).toBe(false);
  expect(validateTags('human')).toBe(true);
});
