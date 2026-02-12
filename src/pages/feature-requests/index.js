/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useEffect} from 'react';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';

import clsx from 'clsx';
import styles from './styles.module.css';

const BOARD_TOKEN = '196e1ccc-5288-d202-08c8-c88878465c18';

function Feedback() {
  useEffect(() => {
    (function(w,d,i,s){function l(){if(!d.getElementById(i)){var f=d.getElementsByTagName(s)[0],e=d.createElement(s);e.type="text/javascript",e.async=!0,e.src="https://canny.io/sdk.js",f.parentNode.insertBefore(e,f)}}if("function"!=typeof w.Canny){var c=function(){c.q.push(arguments)};c.q=[],w.Canny=c,"complete"===d.readyState?l():w.attachEvent?w.attachEvent("onload",l):w.addEventListener("load",l,!1)}})(window,document,"canny-jssdk","script");
    window.Canny &&
      window.Canny('render', {
        boardToken: BOARD_TOKEN,
        basePath: '/feature-requests',
      });
  }, []);

  return (
    <Layout
      title={translate({message: 'Feedback', id: 'feature-requests.title'})}
      description={translate({message: 'Feature Requests', id: 'feature-requests.description'})}>
      <main
        className={clsx('container', 'margin-vert--lg', styles.main)}
        data-canny
      />
    </Layout>
  );
}

export default Feedback;