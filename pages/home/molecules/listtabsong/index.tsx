import React from 'react';
import PropTypes from 'prop-types';
import styles from './listtabsong.module.scss'
import SingerSong from '../../atoms/singersong';
import TabSongItem from '../../atoms/tabsongitem';
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

const ListTabSong: React.FC<Props> = (props) => {
  const datas = props.data;
  // console.log(props);
  const tabitems = datas.map((data, index) => {
    if (index > 0) {
      return <div key={index}>
        <TabSongItem data={data}></TabSongItem>
        <div className={styles.horizontalline}></div>
      </div>
    }
    else {
      return (
        <div key={index}>
          <TopItemTab data={data}></TopItemTab>
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