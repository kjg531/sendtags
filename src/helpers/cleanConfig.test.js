import { cleanConfig } from './cleanConfig';
test('cleans config of curly quotes', () => {
  expect(cleanConfig('{“Spiderman”: [“hero”, “tough”, “smart”, “tall”]}')).toBe(
    '{"Spiderman": ["hero", "tough", "smart", "tall"]}',
  );
});
