import React from 'react';
import PropTypes from 'prop-types';
import ImgSong from '../ImgSong';
import SingerSong from '../singersong';
import styles from './tabmvitem.module.scss'

TabMvItem.propTypes = {

};

function TabMvItem(props) {
  return (
    <div className={styles.tabmvitem}>
      <ImgSong size="Smallrectangle"></ImgSong>
      <div className={styles.infor}>
        <SingerSong></SingerSong>
        <div>
          2000
        </div>
      </div>
    </div>
  );
}

export default TabMvItem;