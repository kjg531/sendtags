import { cleanConfig } from '../helpers/cleanConfig';
import { cleanSendTo } from '../helpers/cleanSendTo';

export const determineRecipients = (config, sendTo, sendType) => {
  // TODO: document and test
  let configObject = null;
  let recipients = [];
  let sendToArray = [];

  // Clean & Parse
  sendToArray = cleanSendTo(sendTo);
  configObject = JSON.parse(cleanConfig(config));

  if (sendType === 'AND') {
    Object.entries(configObject).forEach(([key, value]) => {
      if (sendToArray.every((entry) => value.includes(entry))) {
        recipients.push(key);
      }
    });
  } else if (sendType === 'OR') {
    Object.entries(configObject).forEach(([key, value]) => {
      if (sendToArray.some((entry) => value.includes(entry))) {
        recipients.push(key);
      }
    });
  } else {
    console.warn('Filter Condition Invalid');
  }

  return recipients.sort().join(', ');
};
