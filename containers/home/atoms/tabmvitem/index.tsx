import React from 'react';
import ImgSong from '../ImgSong';
import SingerSong from '../singersong';
import styles from './tabmvitem.module.scss'

interface tabMV {
  rank: number;
  image: string;
  song: string;
  singer: string;
  watch: number;
}

type Props = {
  data: tabMV,
  type?: string,
  sizeimage?: string
}

const TabMvItem: React.FC<Props> = (props: Props) => {
  // console.log(props)
  const data = props.data
  return (
    <div className={styles.tabmvitem}>

      <div className={styles.imgsong}>
        <ImgSong size={props.sizeimage} data={data} />
      </div>
      <div className={styles.infor}>
        <SingerSong data={data} />
        <div>
          {data.watch}
        </div>
      </div>
      <div className={styles.rank}>{data.rank}</div>
    </div>
  );
}

export default TabMvItem;