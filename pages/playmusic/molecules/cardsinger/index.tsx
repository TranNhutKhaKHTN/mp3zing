import { UserAddOutlined } from '@ant-design/icons';
import React from 'react';
import ImgSong from '../../../home/atoms/ImgSong';
import styles from './cardsinger.module.scss'

const CardSinger: React.FC = (props) => {
  return (
    <div className={styles.cardsinger}>
      <div className={styles.imgsinger}>
        <ImgSong size="C"></ImgSong>
      </div>

      <div className={styles.grinfor}>
        <div className={styles.singer}>Sơn Tùng MTP</div>
        <div className={styles.quantam}>
          461k quan tâm
        </div>
      </div>

      <button className={styles.btnquantam}> <UserAddOutlined /> Quan tâm</button>
    </div>
  );
}

export default CardSinger;