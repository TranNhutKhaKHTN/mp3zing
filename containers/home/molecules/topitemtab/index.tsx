import React from 'react';
import styles from "./topitemtab.module.scss"
import TabSongItem from '../../atoms/tabsongitem';

interface tabMV {
  rank: number;
  image: string;
  song: string;
  singer: string;
  watch: number;
}

type Props = {
  data: tabMV
}

const TopItemTab: React.FC<Props> = (props: Props) => {
  const data = props.data
  const image = "https://photo-zmp3.zadn.vn/banner/3/0/6/8/3068a4e198cb63856ce698865194d74d.jpg"
  return (
    <div className={styles.top1}>
      <img className={styles.img} src={image}></img>
      <div className={styles.itemtop1}>
        <TabSongItem type="top" data={data}></TabSongItem>
      </div>
    </div>
  );
}

export default TopItemTab;