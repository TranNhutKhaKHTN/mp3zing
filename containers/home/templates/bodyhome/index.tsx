import React from 'react';
import AD from '@containers/home/molecules/ad';
import styles from './body.module.scss'
import SlideShow from '@containers/home/organisms/slideshow';
import chart from '@public/chart.png'
import Tending from '@containers/home/organisms/Tending';
import Album from '@containers/home/organisms/Album';
import VideoHot from '@containers/home/organisms/videohot';
import ListNhac from '@containers/home/organisms/listnhac';
import HotSinger from '@containers/home/organisms/hotsinger';
import HotTopic from '@containers/home/organisms/hottopic';
import TabSong from '@containers/home/organisms/tabsong';
import img from '@public/img.png'
import TabMV from '@containers/home/organisms/tabmv';
import MusicNews from '@containers/home/organisms/musicnews';
import DoiTac from '@containers/home/atoms/doitac';

import { dataAlbum } from '../data/album'
import { dataListNhac1, dataListNhac2 } from '../data/listnhac'
import { dataTabMV } from './../data/tabMV'
import { dataTabAlbum } from './../data/tabalbum'

const datas = dataAlbum
const listNhac1 = dataListNhac1
const listNhac2 = dataListNhac2
const tabMV = dataTabMV
const tabAlbum = dataTabAlbum

const BodyHome: React.FC = () => {

  return (
    <div>
      <AD></AD>

      <div className={styles.bodyContent1}>
        <div className={styles.leftContent}>
          <div>
            <SlideShow />
            <img src={chart} style={{ width: "100%" }}>
            </img>
            <Tending />
            <Album title="NIỀM VUI MỖI NGÀY" datas={datas} />
            <VideoHot />
            <Album title="ALBUM HOT" icon=">" datas={datas} />

            <div className={styles.hotSong}>
              <ListNhac datas={listNhac1} key={1} />
              <div className={styles.verticalline}></div>
              <ListNhac datas={listNhac2} key={2} />
            </div>

            <div style={{ marginTop: 20 }}>
              <HotSinger />
            </div>
          </div>
        </div>

        <div className={styles.rightContent}>
          <img src={img}></img>
          <HotTopic />
          <TabSong />
          <TabMV sizeimage="Smallrectangle" data={tabMV} />
          <TabMV sizeimage="L" data={tabAlbum} />
          <MusicNews />
        </div>

      </div>

      <DoiTac />
    </div>
  );
}

export default BodyHome;