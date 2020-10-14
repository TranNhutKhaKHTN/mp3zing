import React from 'react';
import PropTypes from 'prop-types';
import ImgSong from '../../../home/atoms/ImgSong';
import GrIconPlayMusic from '../../atoms/griconplaymusic';
import styles from './linemusicplay.module.scss'
import { type } from 'os';
import SingerSong from '../../../home/atoms/singersong';

interface LineMusic {
  image: string;
  song: string;
  singer: string;
  rank: number;
}

type Props = {
  data: LineMusic
}

const LineMusicPlay: React.FC<Props> = (props) => {
  const data = props.data
  return (
    <div className={styles.line}>
      <div className={styles.leftline}>
        <div className={styles.rank}><b>{data.rank}</b></div>
        <div className={styles.imgsong}>
          <ImgSong size="S" data={data}></ImgSong>
        </div>
        <div className={styles.singersong}>
          <div className={styles.song}>
            {data.song}
          </div>
          <div className={styles.singer}>
            {data.singer}
          </div>
        </div>
      </div>
      <div>3:50</div>
      <GrIconPlayMusic></GrIconPlayMusic>
    </div>
  );
}

export default LineMusicPlay;