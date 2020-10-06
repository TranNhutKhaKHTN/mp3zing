import React from 'react';
import PropTypes from 'prop-types';
import Video from '../../atoms/video';
import styles from './videohotitem.module.scss'

VideoHotItem.propTypes = {

};

function VideoHotItem(props) {
  return (
    <div className={styles.videoitem}>
      <Video></Video>
      <div className={styles.title} className={styles.description}>
        thông tin video
      </div>
      <div className={styles.singer} className={styles.description}>
        ca sĩ
      </div>
    </div>
  );
}

export default VideoHotItem;