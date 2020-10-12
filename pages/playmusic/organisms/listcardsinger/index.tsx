import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import React from 'react';
import CardSinger from '../../molecules/cardsinger';
import styles from './listcardsinger.module.scss'

const ListCardSinger: React.FC = (props) => {
  return (
    <div>
      <div className={styles.title}>
        <b>Nghệ Sĩ Tham Gia</b>
        <div>
          <LeftOutlined />
          <RightOutlined />
        </div>
      </div>

      <div className={styles.listcart}>
        <CardSinger></CardSinger>
        <CardSinger></CardSinger>
        <CardSinger></CardSinger>
        <CardSinger></CardSinger>
      </div>
    </div>
  );
}

export default ListCardSinger;