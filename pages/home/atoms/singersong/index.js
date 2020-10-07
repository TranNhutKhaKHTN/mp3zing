import React from 'react';
import PropTypes from 'prop-types';
import styles from './singersong.module.scss'

SingerSong.propTypes = {

};

function SingerSong(props) {
  return (
    <div>
      <div className={styles.song}>Bài hát</div>
      <div className={styles.singer}>ca sĩ</div>
    </div>
  );
}

export default SingerSong;