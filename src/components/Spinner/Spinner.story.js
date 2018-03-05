import React from 'react';

// Storybook
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Glamorous
import { ThemeProvider } from 'glamorous';

// your theme
import theme from 'themes/f60/button.theme';

// Storybook stylers
import { Div } from 'glamorous';
import Gap from "storybook:components/Gap";
import Layout from "storybook:components/Layout";
import By from "storybook:components/By";
import Divider from "storybook:components/Divider";

// Stories for this Component
import Spinner from './';


storiesOf('Spinner', module)
  .add('Default', () => (
    <ThemeProvider theme={theme}>
      <Layout>
        <Div width="80px" height="80px">
          <Spinner />
        </Div>
      </Layout>
    </ThemeProvider>
  ));
