import React from 'react';
import styles from './listtabsong.module.scss'
import TabSongItem from '@containers/home/atoms/tabsongitem';
import TopItemTab from '../topitemtab';

interface tabsongItem {
  rank: number;
  song: string;
  singer: string;
  image: string;
  watch: number;
}

type Props = {
  data: tabsongItem[]
}

const ListTabSong: React.FC<Props> = (props: Props) => {
  const datas = props.data;
  // console.log(props);
  const tabitems = datas.map((data, index) => {
    if (index > 0) {
      return <div key={index}>
        <TabSongItem data={data} />
        <div className={styles.horizontalline}></div>
      </div>
    }
    else {
      return (
        <div key={index}>
          <TopItemTab data={data} />
          <div className={styles.horizontalline}></div>
        </div>
      )
    }
  })

  return (
    <div>
      {tabitems}
    </div>
  );
}

export default ListTabSong;