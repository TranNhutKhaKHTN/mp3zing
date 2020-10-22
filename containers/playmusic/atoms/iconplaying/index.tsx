import React from 'react';
import styles from './iconplaying.module.scss'

const IconPlaying: React.FC = () => {
  return (
    <div className={styles.icon}>
      <div id={styles.icon1}></div>
      <div id={styles.icon2}></div>
      <div id={styles.icon3}></div>
      <div id={styles.icon4}></div>
    </div>
  );
}

export default IconPlaying;