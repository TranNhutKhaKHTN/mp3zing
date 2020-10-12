import React from 'react';
import PropTypes from 'prop-types';
import ImgSong from '../../../home/atoms/ImgSong';
import GrIconPlayMusic from '../../atoms/griconplaymusic';
import styles from './linemusicplay.module.scss'


const LineMusicPlay: React.FC = (props) => {
  return (
    <div className={styles.line}>
      <div className={styles.leftline}>
        <div><b>1</b></div>
        <div className={styles.imgsong}>
          <ImgSong size="S"></ImgSong>
        </div>
      </div>
      <div>3:50</div>
      <GrIconPlayMusic></GrIconPlayMusic>
    </div>
  );
}

export default LineMusicPlay;