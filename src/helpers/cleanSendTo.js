export const cleanSendTo = (sendTo) => {
  // TODO: document and test
  // \u2018\u2019 are the unicode escape for curly single quotes
  // \u201C\u201D are the unicode escape for curly double quotes
  return sendTo
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/"/g, '')
    .replace(/, /g, ',')
    .split(',');
};
