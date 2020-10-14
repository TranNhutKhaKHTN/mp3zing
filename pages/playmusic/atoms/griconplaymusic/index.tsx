import React from 'react';
import { EllipsisOutlined, HeartOutlined } from '@ant-design/icons';
import karaoke from './../../../../public/microphone.svg';
import styles from './griconplaymusic.module.scss';


const GrIconPlayMusic: React.FC = () => {
  return (
    <div className={styles.gricon}>
      <div>
        <img style={{ width: 13, height: 13 }} src={karaoke}></img>
      </div>
      <HeartOutlined />
      <EllipsisOutlined />
    </div>
  );
}

export default GrIconPlayMusic;