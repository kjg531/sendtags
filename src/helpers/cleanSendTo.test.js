import { cleanSendTo } from './cleanSendTo';
test('cleans config of curly quotes', () => {
  expect(cleanSendTo('human,tall,weak')).toStrictEqual(['human', 'tall', 'weak']);
});
