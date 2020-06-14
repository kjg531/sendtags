import { validateSendTo } from './validateSendTo';
test('cleans config of curly quotes', () => {
  expect(validateSendTo('human,tall,weak')).toBe(true);
});
