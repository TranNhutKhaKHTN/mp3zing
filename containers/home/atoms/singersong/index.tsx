import React from 'react';
import PropTypes from 'prop-types';
import styles from './singersong.module.scss'

type Props = {
  data?: any
}

const SingerSong: React.FC<Props> = (props: Props) => {
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

SingerSong.propTypes = {
  data: PropTypes.any
};

export default SingerSong;