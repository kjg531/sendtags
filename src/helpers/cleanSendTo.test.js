import { cleanSendTo } from './cleanSendTo';
test('cleans sendTo csv list using cleanSendTo', () => {
  expect(cleanSendTo('human,tall,weak')).toStrictEqual(['human', 'tall', 'weak']);
  expect(cleanSendTo('human,tall,weak,strong')).toStrictEqual([
    'human',
    'tall',
    'weak',
    'strong',
  ]);
});
