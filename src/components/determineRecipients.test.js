import { determineRecipients } from './determineRecipients';

test('cleans config of curly quotes', () => {
  expect(
    determineRecipients(
      '{ “Human Torch”: [“hero”, “mutant”, “tough”, “dumb”, “tall”], “Spiderman”: [“hero”, “tough”, “smart”, “tall”], “Kyle”: [“human”, “weak”, “smart”, “short”], “JonJon”: [“human”, “strong”, “smart”, “tall”, “weird”] }',
      'human,tall,weak',
      'OR',
    ),
  ).toBe('Human Torch, JonJon, Kyle, Spiderman');
  expect(
    determineRecipients(
      '{“Spiderman”: [“hero”, “tough”, “smart”, “tall”]}',
      '"hero",tall,weak',
      'AND',
    ),
  ).toBe('');
  expect(
    determineRecipients(
      '{ “Human Torch”: [“hero”, “mutant”, “tough”, “dumb”, “tall”], “Spiderman”: [“hero”, “tough”, “smart”, “tall”], “Kyle”: [“human”, “weak”, “smart”, “short”], “JonJon”: [“human”, “strong”, “smart”, “tall”, “weird”] }',
      'tall',
      'OR',
    ),
  ).toBe('Human Torch, JonJon, Spiderman');
  expect(
    determineRecipients(
      '{“Spiderman”: [“hero”, “tough”, “smart”, “tall”]}',
      'tall,weak',
      'AND',
    ),
  ).toBe('');
});
