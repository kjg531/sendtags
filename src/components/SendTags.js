import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import { determineRecipients } from './determineRecipients';
import { validateTags } from '../helpers/validateTags';
import { validateConfig } from '../helpers/validateConfig';
import { validateSendTo } from '../helpers/validateSendTo';
import './SendTags.css';

export default function SendTags() {
  const [recipients, updateRecipients] = useState('');
  const [tags, updateTags] = useState('');
  const [config, updateConfig] = useState('');
  const [sendTo, updateSendTo] = useState('');
  const [sendType, updateSendType] = useState(true);
  const [sent, updateSent] = useState(false);

  const handleChange = (event) => {
    const value = event.target.value;
    switch (event.target.name) {
      case 'tags':
        updateTags(value);
        return;
      case 'config':
        updateConfig(value);
        return;
      case 'sendTo':
        updateSendTo(value);
        return;
      case 'sendType':
        updateSendType(event.target.checked);
        return;
      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Submit and display result
    // false == OR // true == AND
    if (sendType === true) updateRecipients(determineRecipients(config, sendTo, 'AND'));

    if (sendType === false) updateRecipients(determineRecipients(config, sendTo, 'OR'));
    updateSent(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ minWidth: 320, maxWidth: 450 }}>
        <TextField
          id="tagsField"
          label="Tags"
          name="tags"
          onChange={handleChange}
          fullWidth
          required
          error={sent && !validateTags(tags)}
          helperText={
            sent && !validateTags(tags) ? 'Invalid Format' : 'Separated by commas'
          }
        />
        <TextField
          id="configField"
          label="People Configs"
          name="config"
          onChange={handleChange}
          fullWidth
          required
          error={sent && !validateConfig(config)}
          helperText={
            sent && !validateConfig(config)
              ? 'Invalid Format'
              : 'e.g. {“Spiderman”: [“hero”, “tough”, “smart”, “tall”]}'
          }
        />
        <TextField
          id="sendToField"
          label="Send To:"
          name="sendTo"
          onChange={handleChange}
          fullWidth
          required
          error={sent && !validateSendTo(sendTo)}
          helperText={
            sent && !validateSendTo(sendTo) ? 'Invalid Format' : 'Separated by commas'
          }
        />

        <div class="filter-condition-div">
          <label>Filter Condition*</label>
          <br />
          <span item>Or</span>
          <Switch
            id="sendType"
            name="sendType"
            defaultChecked
            checked={sendType}
            onChange={handleChange}
            color="default"
          />
          <span item>And</span>
        </div>

        <Button type="submit" variant="outlined">
          Send Messages
        </Button>
      </form>
      {sent && <div>Sent to: {recipients}</div>}
    </div>
  );
}
