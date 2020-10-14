import React from 'react';
import styles from './listnhac.module.scss'
import CardTend from '../../atoms/cardtend';
import ListIcon from '../../atoms/listicon';

interface listnhac {
  image: string;
  song: string;
  singer: string;
}

type Props = {
  data: listnhac
}

const ListNhacItem: React.FC<Props> = (props: Props) => {
  return (
    <div className={styles.listnhac}>
      <div className={styles.card}>
        <CardTend size="S" data={props.data}></CardTend>
      </div>
      <div className={styles.grIcon}>
        <ListIcon></ListIcon>
      </div>
    </div>
  );
}

export default ListNhacItem;