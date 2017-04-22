import React, { PropTypes } from 'react';
import * as routes from 'js/constants/routes';
import { Link, NavLink } from 'react-router-dom';

import userIcon from 'styles/icons/user-icon.svg';
import styles from './style.scss';

class TopBar extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <div />
          <div className={styles.centerTitle}>
            <Link to={routes.Root}>
              <span className={styles.home}>Synesthekey</span>
            </Link>
          </div>
          <div className={styles.topRight}>
            <Link to={routes.Palette}>
              <span className={styles.signin}>Change Palette</span>
              <img src={userIcon} className={styles.userIcon} alt="user" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

TopBar.propTypes = {
  d: PropTypes.bool,
};
TopBar.contextTypes = {
  router: PropTypes.object.isRequired,
};

export default TopBar;
