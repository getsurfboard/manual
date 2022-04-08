import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Beautiful dashboard UI',
    Png: require('@site/static/img/dashboard.png').default,
  },
  {
    title: 'Profiles management',
    Png: require('@site/static/img/profiles.png').default,
  },
  {
    title: 'Embeded editor',
    Png: require('@site/static/img/editor.png').default,
  },
  {
    title: 'Tools for debug',
    Png: require('@site/static/img/tools.png').default,
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
