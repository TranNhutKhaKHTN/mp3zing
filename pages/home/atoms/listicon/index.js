import React from 'react';
import PropTypes from 'prop-types';
import styles from './listicon.module.scss'
import { DownloadOutlined, PlusOutlined, ShareAltOutlined } from '@ant-design/icons'

ListIcon.propTypes = {

};

function ListIcon(props) {
  return (
    <span className={styles.grIcon}>
      <DownloadOutlined className={styles.icon} />
      <PlusOutlined className={styles.icon} />
      <ShareAltOutlined className={styles.icon} />
    </span>
  );
}

export default ListIcon;