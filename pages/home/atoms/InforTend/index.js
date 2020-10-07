import React from 'react';
import PropTypes from 'prop-types';
import styles from './infortend.module.scss'
import ListIcon from '../listicon';

InforTend.propTypes = {

};

function InforTend(props) {
  const { data } = props
  return (
    <div className={styles.infortend}>
      <div></div>
      <div className={styles.toolshare}>
        <div>

        </div>
        <div>
          <span className={styles.grIcon}>
            <ListIcon></ListIcon>
          </span>
          <span className={styles.watch}>
            67.540
          </span>
        </div>
      </div>
    </div>
  );
}

export default InforTend;