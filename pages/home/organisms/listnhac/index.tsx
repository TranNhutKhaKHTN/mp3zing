import React from 'react';
import PropTypes from 'prop-types';
import ListNhacItem from '../../molecules/listnhacitem';
import CardTend from '../../atoms/cardtend';
import styles from './listnhac.module.scss'

interface listnhac {
  image: string;
  song: string;
  singer: string;
}

type Props = {
  datas: listnhac[]
}

const ListNhac: React.FC<Props> = (props) => {
  const datas: listnhac[] = props.datas;
  const ListNhac = datas.map((data, index) => {
    return (
      <div key={index}>
        <ListNhacItem data={data} ></ListNhacItem>
        {index < 9 ? <div className={styles.horizontalline}></div> : null}
      </div>
    )
  })
  return (
    <div className={styles.listnhac}>
      <div className={styles.title}>
        NHAC VIỆT HOT
      </div>
      {ListNhac}
    </div>
  );
}

export default ListNhac;