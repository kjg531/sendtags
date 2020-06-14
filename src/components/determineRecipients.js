import { cleanConfig } from '../helpers/cleanConfig';
import { cleanSendTo } from '../helpers/cleanSendTo';

/**
 * Function that determines a list of people to send to.
 * @param {string} config - JSON
 * @param {string} sendTo - CSV
 * @param {string} sendType - AND or OR
 * @return {array}
 */
export const determineRecipients = (config, sendTo, sendType) => {
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
