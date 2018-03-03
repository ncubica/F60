import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ThemeProvider } from 'glamorous';
import theme from 'themes/f60/button.theme';
import Gap from "storybook:components/Gap";
import Layout from "storybook:components/Layout";
import By from "storybook:components/By";
import Divider from "storybook:components/Divider";

import Button from './Button';

storiesOf('Button', module)
  .add('with text', () => (
    <ThemeProvider theme={theme}>
      <Layout>
        <Button size="huge" onClick={action('clicked')}>I 🦄 you</Button>
        <Gap />
        <Button size="big" onClick={action('clicked')}>I 🦄 you</Button>
        <Gap />
        <Button onClick={action('clicked')}>I 🦄 you</Button>
        <Gap />
        <Button size="small" onClick={action('clicked')}>I 🦄 you</Button>
        <Gap />
        <Button size="tiny" onClick={action('clicked')}>I 🦄 you</Button>

        <Divider />
          <Gap />
          <Button type="secondary" size="huge" onClick={action('clicked')}>I 🦄 you</Button>
          <Gap />
          <Button type="secondary" size="big" onClick={action('clicked')}>I 🦄 you</Button>
          <Gap />
          <Button type="secondary" onClick={action('clicked')}>I 🦄 you</Button>
          <Gap />
          <Button type="secondary" size="small" onClick={action('clicked')}>I 🦄 you</Button>
          <Gap />
          <Button type="secondary" size="tiny" onClick={action('clicked')}>I 🦄 you</Button>

        <Divider />
          <Gap />
          <Button status="disabled" size="huge" onClick={action('clicked')}>I 🦄 you</Button>
          <Gap />
          <Button status="disabled" size="big" onClick={action('clicked')}>I 🦄 you</Button>
          <Gap />
          <Button status="disabled" onClick={action('clicked')}>I 🦄 you</Button>
          <Gap />
          <Button status="disabled" size="small" onClick={action('clicked')}>I 🦄 you</Button>
          <Gap />
          <Button status="disabled" size="tiny" onClick={action('clicked')}>I 🦄 you</Button>

        <Divider />
          <Gap />
          <Button status="loading" size="huge" onClick={action('clicked')}>Loading ...</Button>
          <Gap />
          <Button status="loading" size="big" onClick={action('clicked')}>Loading ...</Button>
          <Gap />
          <Button status="loading" onClick={action('clicked')}>Loading ...</Button>
          <Gap />
          <Button status="loading" size="small" onClick={action('clicked')}>Loading ...</Button>
          <Gap />
          <Button status="loading" size="tiny" onClick={action('clicked')}>Loading ...</Button>

        <Divider />
        <By emoji="🦄" by="3936" />
      </Layout>
    </ThemeProvider>
  ));
