import React from 'react';
import { addDecorator } from '@storybook/react';
import { theme } from '../src/theme/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/theme/GlogalStyles';

addDecorator((storyFn) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
  </>
));
