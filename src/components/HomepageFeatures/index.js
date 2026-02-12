import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: (
      <Translate id="homepage.features.dashboard.title">
        Beautiful dashboard UI
      </Translate>
    ),
    Png: require('@site/static/img/dashboard.png').default,
  },
  {
    title: (
      <Translate id="homepage.features.profiles.title">
        Profiles management
      </Translate>
    ),
    Png: require('@site/static/img/profiles.png').default,
  },
  {
    title: (
      <Translate id="homepage.features.editor.title">
        Embeded editor
      </Translate>
    ),
    Png: require('@site/static/img/editor.png').default,
  },
  {
    title: (
      <Translate id="homepage.features.tools.title">
        Tools for debug
      </Translate>
    ),
    Png: require('@site/static/img/tools.png').default,
  },
  {
    title: (
      <Translate id="homepage.features.dark_mode.title">
        Dark mode support
      </Translate>
    ),
    Png: require('@site/static/img/dark_mode.png').default,
  },
  {
    title: (
      <Translate id="homepage.features.more.title">
        More to explore...
      </Translate>
    ),
    Png: require('@site/static/img/settings.png').default,
  },
];

function Feature({Png, title}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Png} className={styles.featureImg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
