import React from 'react';
import PropTypes from 'prop-types';
import ImgSong from '../../atoms/ImgSong';
import styles from './hotsinger.module.scss'

HotSinger.propTypes = {

};

function HotSinger(props) {
  return (
    <div>
      <div className={styles.title}>
        NGHỆ SĨ HOT
      </div>
      <div className={styles.hotsinger}>
        <div className={styles.left}>
          <ImgSong size="XXL"></ImgSong>
        </div>
        <div className={styles.right}>
          <ImgSong size="ML"></ImgSong>
          <ImgSong size="ML"></ImgSong>
          <ImgSong size="ML"></ImgSong>
          <ImgSong size="ML"></ImgSong>
          <ImgSong size="ML"></ImgSong>
          <ImgSong size="ML"></ImgSong>
          <ImgSong size="ML"></ImgSong>
          <ImgSong size="ML"></ImgSong>
        </div>
      </div>
    </div>
  );
}

export default HotSinger;