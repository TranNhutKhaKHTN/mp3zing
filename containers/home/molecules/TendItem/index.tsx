import React from 'react';
import InforTend from '@containers/home/atoms/InforTend';
import styles from './tenditem.module.scss'
import CardTend from '@containers/home/atoms/cardtend';

interface tenditem {
  index: number;
  image: string;
  singer: string;
  song: string;
}

type Props = {
  data: tenditem
}

const TendItem: React.FC<Props> = (props: Props) => {

  const { data } = props;
  // console.log(data)
  return (
    <div className={styles.tenditem}>
      <div className={styles.leftItem}>
        <div className={styles.number}>
          {data.index}
        </div>
        <div className={styles.content}></div>
        <CardTend size="M" data={data} />
      </div>
      <div className={styles.rigntItem}>
        <InforTend data={data} />
      </div>
    </div>
  );
}

export default TendItem;