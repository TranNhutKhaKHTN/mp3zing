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

            <Album title="ALBUM HOT"></Album>
          </div>
        </div>
        <div className={styles.rightContent}>

        </div>
      </div>
    </div>
  );
}

export default Body;