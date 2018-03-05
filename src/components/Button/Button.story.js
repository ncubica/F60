import React from 'react';

// Storybook
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Glamorous
import { ThemeProvider } from 'glamorous';

// your theme
// import theme from 'themes/f60/button.theme';

// Storybook stylers
import Gap from "storybook:components/Gap";
import Layout from "storybook:components/Layout";
import By from "storybook:components/By";
import Divider from "storybook:components/Divider";

// Stories for this Component
import Button from './';

const Sign = () => <By emoji="🦄" href="http://twitter.com/@nahum_zsilva" by="@nahum_zsilva" />;
const hola = 'Hola, hola.';
storiesOf('Button', module)
  .add('Primary Buttons', () => (
    <Layout>
      <Button size="huge" onClick={action('clicked')}>{hola}</Button>
      <Gap />
      <Button size="big" onClick={action('clicked')}>{hola}</Button>
      <Gap />
      <Button onClick={action('clicked')}>{hola}</Button>
      <Gap />
      <Button size="small" onClick={action('clicked')}>{hola}</Button>
      <Gap />
      <Button size="tiny" onClick={action('clicked')}>{hola}</Button>

      <Divider />
      <Sign />
    </Layout>
  ))
  .add('Secondary Buttons', () => (
    <Layout>
      <Gap />
      <Button type="secondary" size="huge" onClick={action('clicked')}>{hola}</Button>
      <Gap />
      <Button type="secondary" size="big" onClick={action('clicked')}>{hola}</Button>
      <Gap />
      <Button type="secondary" onClick={action('clicked')}>{hola}</Button>
      <Gap />
      <Button type="secondary" size="small" onClick={action('clicked')}>{hola}</Button>
      <Gap />
      <Button type="secondary" size="tiny" onClick={action('clicked')}>{hola}</Button>

      <Divider />
      <Sign />
    </Layout>
  ))
  .add('Outline Buttons', () => (
    <Layout>
      <Gap />
      <Button type="outline" size="huge" onClick={action('clicked')}>{hola}</Button>
      <Gap />
      <Button type="outline" size="big" onClick={action('clicked')}>{hola}</Button>
      <Gap />
      <Button type="outline" onClick={action('clicked')}>{hola}</Button>
      <Gap />
      <Button type="outline" size="small" onClick={action('clicked')}>{hola}</Button>
      <Gap />
      <Button type="outline" size="tiny" onClick={action('clicked')}>{hola}</Button>

      <Divider />
      <Sign />
    </Layout>
  ))
  .add('Links Buttons', () => (
    <Layout>
      <Gap />
      <Button type="link" size="huge" onClick={action('clicked')}>{hola}</Button>
      <Gap />
      <Button type="link" size="big" onClick={action('clicked')}>{hola}</Button>
      <Gap />
      <Button type="link" onClick={action('clicked')}>{hola}</Button>
      <Gap />
      <Button type="link" size="small" onClick={action('clicked')}>{hola}</Button>
      <Gap />
      <Button type="link" size="tiny" onClick={action('clicked')}>{hola}</Button>

      <Divider />
      <Sign />
    </Layout>
  ))
  .add('Success Buttons', () => (
    <Layout>
      <Gap />
      <Button type="success" size="huge" onClick={action('clicked')}>{hola}</Button>
      <Gap />
      <Button type="success" size="big" onClick={action('clicked')}>{hola}</Button>
      <Gap />
      <Button type="success" onClick={action('clicked')}>{hola}</Button>
      <Gap />
      <Button type="success" size="small" onClick={action('clicked')}>{hola}</Button>
      <Gap />
      <Button type="success" size="tiny" onClick={action('clicked')}>{hola}</Button>

      <Divider />
      <Sign />
    </Layout>
  ))
  .add('Info Buttons', () => (
    <Layout>
      <Gap />
      <Button type="info" size="huge" onClick={action('clicked')}>{hola}</Button>
      <Gap />
      <Button type="info" size="big" onClick={action('clicked')}>{hola}</Button>
      <Gap />
      <Button type="info" onClick={action('clicked')}>{hola}</Button>
      <Gap />
      <Button type="info" size="small" onClick={action('clicked')}>{hola}</Button>
      <Gap />
      <Button type="info" size="tiny" onClick={action('clicked')}>{hola}</Button>

      <Divider />
      <Sign />
    </Layout>
  ))
  .add('Warning Buttons', () => (
    <Layout>
      <Gap />
      <Button type="warning" size="huge" onClick={action('clicked')}>{hola}</Button>
      <Gap />
      <Button type="warning" size="big" onClick={action('clicked')}>{hola}</Button>
      <Gap />
      <Button type="warning" onClick={action('clicked')}>{hola}</Button>
      <Gap />
      <Button type="warning" size="small" onClick={action('clicked')}>{hola}</Button>
      <Gap />
      <Button type="warning" size="tiny" onClick={action('clicked')}>{hola}</Button>

      <Divider />
      <Sign />
    </Layout>
  ))
  .add('Destructive Buttons', () => (
    <Layout>
      <Gap />
      <Button type="destructive" size="huge" onClick={action('clicked')}>{hola}</Button>
      <Gap />
      <Button type="destructive" size="big" onClick={action('clicked')}>{hola}</Button>
      <Gap />
      <Button type="destructive" onClick={action('clicked')}>{hola}</Button>
      <Gap />
      <Button type="destructive" size="small" onClick={action('clicked')}>{hola}</Button>
      <Gap />
      <Button type="destructive" size="tiny" onClick={action('clicked')}>{hola}</Button>

      <Divider />
      <Sign />
    </Layout>
  ))
  .add('Disabled Buttons', () => (
    <Layout>
      <Gap />
      <Button status="disabled" size="huge" onClick={action('clicked')}>{hola}</Button>
      <Gap />
      <Button status="disabled" size="big" onClick={action('clicked')}>{hola}</Button>
      <Gap />
      <Button status="disabled" onClick={action('clicked')}>{hola}</Button>
      <Gap />
      <Button status="disabled" size="small" onClick={action('clicked')}>{hola}</Button>
      <Gap />
      <Button status="disabled" size="tiny" onClick={action('clicked')}>{hola}</Button>

      <Divider />
      <Sign />
    </Layout>
  ))
  .add('Loading Buttons', () => (
    <Layout>
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
      <Sign />
    </Layout>
  ));
