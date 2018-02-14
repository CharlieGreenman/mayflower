import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, boolean, select, number } from '@storybook/addon-knobs/react';

import SearchBannerForm from '.';
import SearchBannerDocs from './SearchBannerForm.md';

storiesOf('molecules', module).addDecorator(withKnobs)
  .add('Search Banner Form', withInfo(`<div>${SearchBannerDocs}</div>`)(() => {
    const props = {
      action: '',
      inputText: {
        hiddenLabel: boolean('searchBannerForm.inputText.hiddenLabel', false),
        labelText: text('searchBannerForm.inputText.labelText', 'Search terms'),
        required: boolean('searchBannerForm.inputText.required', false),
        id: text('searchBannerForm.inputText.id', 'GUID138490237'),
        name: text('searchBannerForm.inputText.name', 'search'),
        type: select('searchBannerForm.inputText.type', ['text', 'email', 'number'], 'text'),
        width: number('searchBannerForm.inputText.width', 0),
        maxlength: number('searchBannerForm.inputText.maxlength', 0),
        pattern: text('searchBannerForm.inputText.pattern', ''),
        placeholder: text('searchBannerForm.inputText.placeholder', 'Search...'),
        errorMsg: text('searchBannerForm.inputText.errorMsg', '')
      },
      buttonSearch: {
        onClick: () => {
          // eslint-disable-next-line no-console
          console.log('Search button was clicked!');
        },
        text: text('searchBannerForm.buttonSearch.text', 'Search')
      }
    };
    return(
      <SearchBannerForm {...props} />
    );
  }));
