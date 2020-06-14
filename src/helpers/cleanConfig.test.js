import { cleanConfig } from './cleanConfig';

test('cleans config of curly quotes', () => {
  expect(cleanConfig('{“Spiderman”: [“hero”, “tough”, “smart”, “tall”]}')).toBe(
    '{"Spiderman": ["hero", "tough", "smart", "tall"]}',
  );
  expect(
    cleanConfig(
      '{“Human Torch”: [“hero”, “mutant”, “tough”, “dumb”, “tall”], “Spiderman”: [“hero”, “tough”, “smart”, “tall”], “Kyle”: [“human”, “weak”, “smart”, “short”], “JonJon”: [“human”, “strong”, “smart”, “tall”, “weird”]}',
    ),
  ).toBe(
    '{"Human Torch": ["hero", "mutant", "tough", "dumb", "tall"], "Spiderman": ["hero", "tough", "smart", "tall"], "Kyle": ["human", "weak", "smart", "short"], "JonJon": ["human", "strong", "smart", "tall", "weird"]}',
  );
});
