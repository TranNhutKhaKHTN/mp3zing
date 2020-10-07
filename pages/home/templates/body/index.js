import React from 'react';
import PropTypes from 'prop-types';
import AD from '../../molecules/ad';
import styles from './body.module.scss'
import SlideShow from '../../organisms/slideshow';
import chart from './../../../../public/chart.png'
import Tending from '../../organisms/Tending';
import AlbumItem from '../../molecules/albumitem';
import Album from '../../organisms/Album';
import VideoHot from '../../organisms/videohot';
import ImgSong from '../../atoms/ImgSong';
import ListNhac from '../../organisms/listnhac';
import HotSinger from '../../organisms/hotsinger';

Body.propTypes = {

};

function Body(props) {
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
            <Album title="NIỀM VUI MỖI NGÀY"></Album>
            <VideoHot></VideoHot>
            <Album title="ALBUM HOT" icon=">"></Album>

            <div className={styles.hotSong}>
              <ListNhac></ListNhac>
              <div className={styles.verticalline}></div>
              <ListNhac></ListNhac>
            </div>

            <div style={{ marginTop: 20 }}>
              <HotSinger></HotSinger>
            </div>
          </div>
        </div>
        <div className={styles.rightContent}>
          <ImgSong size="XXL"></ImgSong>
        </div>
      </div>
    </div>
  );
}

export default Body;