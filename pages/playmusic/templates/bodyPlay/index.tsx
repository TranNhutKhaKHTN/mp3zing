import React from 'react';
import PropTypes from 'prop-types';
import styles from './bodyplay.module.scss'
import ImgSong from '../../../home/atoms/ImgSong';
import LeftContentPlayMucsic from '../leftcontentPlaymucsic';
import RightContentPlaymusic from '../rightcontentPlaymusic';


const BodyPlay: React.FC = (props) => {
  return (
    <div className={styles.bodycontent}>
      <div className={styles.leftContent}>
        <LeftContentPlayMucsic></LeftContentPlayMucsic>
      </div>
      <div className={styles.rightContent}>
        <RightContentPlaymusic></RightContentPlaymusic>
      </div>
    </div>
  );
}

export default BodyPlay;