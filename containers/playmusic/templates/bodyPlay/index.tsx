import React from 'react';
import styles from './bodyplay.module.scss'
import LeftContentPlayMucsic from '../leftcontentPlaymucsic';
import RightContentPlaymusic from '../rightcontentPlaymusic';


const BodyPlay: React.FC = () => {
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