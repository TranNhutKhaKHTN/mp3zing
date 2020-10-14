import { UserAddOutlined } from '@ant-design/icons';
import React from 'react';
import ImgSong from '../../../home/atoms/ImgSong';
import styles from './cardsinger.module.scss'

interface Cardsinger {
  image: string;
  care: number;
  singer: string;
}

type Props = {
  data: Cardsinger
}

const CardSinger: React.FC<Props> = (props: Props) => {
  const data = props.data
  return (
    <div className={styles.cardsinger}>
      <div className={styles.imgsinger}>
        <ImgSong size="C" data={data}></ImgSong>
      </div>

      <div className={styles.grinfor}>
        <div className={styles.singer}><b>{data.singer}</b></div>
        <div className={styles.quantam}>
          {data.care}k quan tâm
        </div>
      </div>

      <button className={styles.btnquantam}> <UserAddOutlined /> Quan tâm</button>
    </div>
  );
}

export default CardSinger;