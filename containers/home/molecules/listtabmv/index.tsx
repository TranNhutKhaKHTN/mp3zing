import React from 'react';
import TabMvItem from '@containers/home/atoms/tabmvitem';
import TopItemTab from '../topitemtab';
import styles from './listtabmv.module.scss'

interface tabMV {
  rank: number;
  image: string;
  song: string;
  singer: string;
  watch: number;
}

type Props = {
  data: tabMV[],
  sizeimage?: string
}

const ListTabMV: React.FC<Props> = (props: Props) => {
  const datas = props.data;
  const listitems = datas.map((data, index) => {
    if (index === 0) {
      return <div key={index}>
        <TopItemTab data={data} />
        <div className={styles.horizontalline}></div>
      </div>
    }
    else {
      return (
        <div key={index}>
          <TabMvItem data={data} sizeimage={props.sizeimage} />
          <div className={styles.horizontalline}></div>
        </div>
      )
    }
  })
  return (
    <div>
      {listitems}
    </div>
  );
}

export default ListTabMV;