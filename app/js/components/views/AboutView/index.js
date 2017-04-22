import React, { Component } from 'react';
import * as routes from 'js/constants/routes';
import { Link } from 'react-router-dom';

import styles from './style.scss';

class AboutView extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Link to={routes.Root}>
          <div className={styles.titleContainer}>
            <span className={styles.title}>Boiler</span>
            <span className={styles.subtitle}>About</span>
          </div>
        </Link>

        <div className={styles.description}>
          <h1 className={styles.h1}>
            This is a react/redux boilerplate
          </h1>
          <p className={styles.p}>
            Have fun !
          </p>
          <h1 className={styles.h1}>
            Bundled libs
          </h1>

          <p className={styles.p}>
            React <br />
            Redux <br />
            React-Router-Redux <br />
            Redux-Forms <br />
            Async Actions <br />
          </p>
        </div>
      </div>
    );
  }
}

export default AboutView;
