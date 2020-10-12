import React from 'react';
import PropTypes from 'prop-types';
import LineMusicPlay from '../../molecules/linemusicplay';
import styles from './listlineplaymusic.module.scss'
import { type } from 'os';
interface LineMusic {
  image: string;
  song: string;
  singer: string;
  rank: number;
}
type Props = {
  data: LineMusic[]
}

const ListLinePlayMusic: React.FC<Props> = (props) => {
  return (
    <div>
      <LineMusicPlay></LineMusicPlay>
      <div className={styles.horizontalline}></div>
      <LineMusicPlay></LineMusicPlay>
      <div className={styles.horizontalline}></div>
      <LineMusicPlay></LineMusicPlay>
      <div className={styles.horizontalline}></div>
      <LineMusicPlay></LineMusicPlay>
      <div className={styles.horizontalline}></div>
      <LineMusicPlay></LineMusicPlay>
      <div className={styles.horizontalline}></div>
      <LineMusicPlay></LineMusicPlay>
      <div className={styles.horizontalline}></div>
      <LineMusicPlay></LineMusicPlay>
      <div className={styles.horizontalline}></div>
      <LineMusicPlay></LineMusicPlay>
      <div className={styles.horizontalline}></div>
      <LineMusicPlay></LineMusicPlay>
      <div className={styles.horizontalline}></div>
      <LineMusicPlay></LineMusicPlay>
      <div className={styles.horizontalline}></div>
      <LineMusicPlay></LineMusicPlay>
      <div className={styles.horizontalline}></div>
      <LineMusicPlay></LineMusicPlay>
      <div className={styles.horizontalline}></div>
      <LineMusicPlay></LineMusicPlay>
      <div className={styles.horizontalline}></div>
      <LineMusicPlay></LineMusicPlay>
      <div className={styles.horizontalline}></div>
      <LineMusicPlay></LineMusicPlay>
      <div className={styles.horizontalline}></div>
      <LineMusicPlay></LineMusicPlay>
      <div className={styles.horizontalline}></div>
    </div>
  );
}

export default ListLinePlayMusic;