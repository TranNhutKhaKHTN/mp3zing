import React from 'react';
import PropTypes from 'prop-types';
import styles from './infortend.module.scss'
import { DownloadOutlined, PlusOutlined, ShareAltOutlined } from '@ant-design/icons'

InforTend.propTypes = {

};

function InforTend(props) {
  return (
    <div className={styles.infortend}>
      <div></div>
      <div className={styles.toolshare}>
        <div>

        </div>
        <div>
          <span className={styles.grIcon}>
            <DownloadOutlined className={styles.icon} />
            <PlusOutlined className={styles.icon} />
            <ShareAltOutlined className={styles.icon} />
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