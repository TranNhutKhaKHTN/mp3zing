import React from 'react';
import PropTypes from 'prop-types';
import ImgSong from '../ImgSong';
import SingerSong from '../singersong';
import styles from './tabmvitem.module.scss'

TabMvItem.propTypes = {

};

function TabMvItem(props) {
  console.log(props)
  const data = props.data
  return (
    <div className={styles.tabmvitem}>

      <ImgSong size={props.sizeimage} data={data}></ImgSong>
      <div className={styles.infor}>
        <SingerSong data={data}></SingerSong>
        <div>
          {data.watch}
        </div>
      </div>
      <div className={styles.rank}>{data.rank}</div>
    </div>
  );
}

export default TabMvItem;