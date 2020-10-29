import React from 'react';
import ListNhacItem from '@containers/home/molecules/listnhacitem';
import styles from './listnhac.module.scss'

interface listnhac {
  image: string;
  song: string;
  singer: string;
}

type Props = {
  datas: listnhac[]
}

const ListNhac: React.FC<Props> = (props: Props) => {
  const datas: listnhac[] = props.datas;
  const ListNhac = datas.map((data, index) => {
    return (
      <div key={index}>
        <ListNhacItem data={data} />
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