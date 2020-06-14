import { validateTags } from './validateTags';
test('cleans config of curly quotes', () => {
  expect(validateTags('human,tall,weak')).toBe(true);
});
