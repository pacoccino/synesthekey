import React, { PropTypes } from 'react';

import TopBar from 'js/containers/TopBar';
import styles from './style.scss';

import Github from 'images/github.png';

const Layout = ({ children }) =>
  <div className={styles.layoutContainer}>
    <TopBar />
    <div className={styles.content}>
      {children}
    </div>
    <div className={styles.bottom}>
      <a href="https://github.com/pakokrew/synesthekey" target="_blanks">
        <img src={Github} alt="github" className={styles.github} />
      </a>
    </div>
  </div>;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
