import React from 'react';
import PropTypes from 'prop-types';
import styles from './singersong.module.scss'

// SingerSong.propTypes = {

// };

type Props = {
  data?: any
}

const SingerSong: React.FC<Props> = (props) => {
  let song: string
  let singer: string
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