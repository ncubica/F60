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
import { Div } from 'glamorous';
import { nudge, colors } from 'tokens';

// Stories for this Component
import Icon, { Sprites } from './';

const Sign = () => <By emoji="🦄" href="http://twitter.com/@nahum_zsilva" by="@nahum_zsilva" />;

const iconsListNames = ['account-login','account-logout','action-redo','action-undo','align-center','align-left','align-right','aperture','arrow-bottom','arrow-circle-bottom','arrow-circle-left','arrow-circle-right','arrow-circle-top','arrow-left','arrow-right','arrow-thick-bottom','arrow-thick-left','arrow-thick-right','arrow-thick-top','arrow-top','audio','audio-spectrum','badge','ban','bar-chart','basket','battery-empty','battery-full','beaker','bell','bluetooth','bold','bolt','book','bookmark','box','briefcase','british-pound','browser','brush','bug','bullhorn','calculator','calendar','camera-slr','caret-bottom','caret-left','caret-right','caret-top','cart','chat','check','chevron-bottom','chevron-left','chevron-right','chevron-top','circle-check','circle-x','clipboard','clock','cloud','cloud-download','cloud-upload','cloudy','code','cog','collapse-down','collapse-left','collapse-right','collapse-up','command','comment-square','compass','contrast','copywriting','credit-card','crop','dashboard','data-transfer-download','data-transfer-upload','delete','dial','document','dollar','double-quote-sans-left','double-quote-sans-right','double-quote-serif-left','double-quote-serif-right','droplet','eject','elevator','ellipses','envelope-closed','envelope-open','euro','excerpt','expand-down','expand-left','expand-right','expand-up','external-link','eye','eyedropper','file','fire','flag','flash','folder','fork','fullscreen-enter','fullscreen-exit','globe','graph','grid-four-up','grid-three-up','grid-two-up','hard-drive','header','headphones','heart','home','image','inbox','infinity','info','italic','justify-center','justify-left','justify-right','key','laptop','layers','lightbulb','link-broken','link-intact','list','list-rich','location','lock-locked','lock-unlocked','loop','loop-circular','loop-square','magnifying-glass','map','map-marker','media-pause','media-play','media-record','media-skip-backward','media-skip-forward','media-step-backward','media-step-forward','media-stop','medical-cross','menu','microphone','minus','monitor','moon','move','musical-note','paperclip','pencil','people','person','phone','pie-chart','pin','play-circle','plus','power-standby','print','project','pulse','puzzle-piece','question-mark','rain','random','reload','resize-both','resize-height','resize-width','rss','rss-alt','script','share','share-boxed','shield','signal','signpost','sort-ascending','sort-descending','spreadsheet','star','sun','tablet','tag','tags','target','task','terminal','text','thumb-down','thumb-up','timer','transfer','trash','underline','vertical-align-bottom','vertical-align-center','vertical-align-top','video','volume-high','volume-low','volume-off','warning','wifi','wrench','x','yen','zoom-in','zoom-out']


const Card = (props) => {
  return(
    <Div display="block" margin={nudge} textAlign="center" border={`1px solid ${colors.grey}`} padding={nudge} flexBasis={nudge * 15}>
      <Icon key={props.name} name={props.name} />
      <Gap />
      <Div>
        {props.name}
      </Div>
    </Div>
  )
}

storiesOf('Icon', module)
  .add('List', () => (
    <Layout>
      <Sprites />
      <Icon name="headphones" size="tiny" />
      <Gap />
      <Icon name="headphones" size="small" />
      <Gap />
      <Icon name="headphones" size="regular" />
      <Gap />
      <Icon name="headphones" size="big" />
      <Gap />
      <Icon name="headphones" size="huge" />
      <Gap />
      <Icon name="headphones" color={colors.green} size="huge" />
      <Gap />
      <Divider />
        <Div display="flex" width="100%" flexWrap="wrap" justifyContent="space-start">
        { iconsListNames.map(name => {
          return <Card name={name} />
        })}
        </Div>
      <Divider />
      <Sign />
    </Layout>
  ));
