import React from 'react';
import AD from '../../molecules/ad';
import styles from './body.module.scss'
import SlideShow from '../../organisms/slideshow';
import chart from './../../../../public/chart.png'
import Tending from '../../organisms/Tending';
import Album from '../../organisms/Album';
import VideoHot from '../../organisms/videohot';
import ListNhac from '../../organisms/listnhac';
import HotSinger from '../../organisms/hotsinger';
import HotTopic from '../../organisms/hottopic';
import TabSong from '../../organisms/tabsong';
import img from './../../../../public/img.png'
import TabMV from '../../organisms/tabmv';
import MusicNews from '../../organisms/musicnews';
import DoiTac from '../../atoms/doitac';

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
            <SlideShow></SlideShow>
            <img src={chart} style={{ width: "100%" }}>
            </img>
            <Tending></Tending>
            <Album title="NIỀM VUI MỖI NGÀY" datas={datas}></Album>
            <VideoHot></VideoHot>
            <Album title="ALBUM HOT" icon=">" datas={datas}></Album>

            <div className={styles.hotSong}>
              <ListNhac datas={listNhac1} key={1}></ListNhac>
              <div className={styles.verticalline}></div>
              <ListNhac datas={listNhac2} key={2}></ListNhac>
            </div>

            <div style={{ marginTop: 20 }}>
              <HotSinger></HotSinger>
            </div>
          </div>
        </div>

        <div className={styles.rightContent}>
          <img src={img}></img>
          <HotTopic></HotTopic>
          <TabSong></TabSong>
          <TabMV sizeimage="Smallrectangle" data={tabMV}></TabMV>
          <TabMV sizeimage="L" data={tabAlbum}></TabMV>
          <MusicNews></MusicNews>
        </div>

      </div>

      <DoiTac></DoiTac>
    </div>
  );
}

export default BodyHome;