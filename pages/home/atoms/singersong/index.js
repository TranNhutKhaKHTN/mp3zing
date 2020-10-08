import React from 'react';
import PropTypes from 'prop-types';
import styles from './singersong.module.scss'

SingerSong.propTypes = {

};

function SingerSong(props) {
  let song
  let singer
  const data = props.data
  if (props.data) {
    song = data.song
    singer = data.singer
  }
  else {
    song = "Bài Hát"
    singer = "Ca Sĩ"
  }
  return (
    <div className={styles.singersong}>
      <div className={styles.song}>{song}</div>
      <div className={styles.singer}>{singer}</div>
    </div>
  );
}

export default SingerSong;