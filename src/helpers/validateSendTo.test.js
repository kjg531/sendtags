import { validateSendTo } from './validateSendTo';
test('Cleans csv list using validateSendTo', () => {
  expect(validateSendTo('human,tall,weak')).toBe(true);
  expect(validateSendTo('human,tall,weak,')).toBe(false);
  expect(validateSendTo('human,tall,,weak')).toBe(false);
  expect(validateSendTo('human')).toBe(true);
});
