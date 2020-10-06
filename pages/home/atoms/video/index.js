import React from 'react';
import PropTypes from 'prop-types';
import styles from './video.module.scss'
import { PlayCircleOutlined } from "@ant-design/icons"

Video.propTypes = {

};

function Video(props) {
  const image = "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/7/3/7/9/7379380330e0e795ce61bba271400506.jpg"

  return (
    <div className={styles.card} >
      <div>
        <div className={styles.backroudCard}>
          <img className={styles.cardImg} src={image}></img>
        </div>
        {/* <div><b> Tên MV </b></div> */}
      </div>
      <div className={styles.opacity}>
        <span className={styles.play}>
          <PlayCircleOutlined style={{ color: "white" }} />
        </span>
      </div>
    </div>
  );
}

export default Video;