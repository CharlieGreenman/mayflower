import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, select } from '@storybook/addon-knobs/react';

import ButtonSort from './index';
import ButtonSortDocs from './ButtonSort.md';
import buttonSortOptions from './ButtonSort.knobs.options';

storiesOf('atoms/buttons', module).addDecorator(withKnobs)
  .add('ButtonSort', withInfo(`<div>${ButtonSortDocs}</div>`)(() => {
    const props = {
      text: text('buttonSort.text', 'Date'),
      direction: select('buttonSort.direction', buttonSortOptions.direction, '')
    };
    return(
      <ButtonSort {...props} />
    );
  }));
