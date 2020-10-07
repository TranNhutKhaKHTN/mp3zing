import React from 'react';
import PropTypes from 'prop-types';
import SingerSong from '../singersong';
import ListIcon from '../listicon';
import styles from './tabsongitem.module.scss'

TabSongItem.propTypes = {

};

function TabSongItem(props) {
  let color;
  if (props.type === "top") {
    color = "white"
  }
  else {
    color = "black"
  }
  return (
    <div className={styles.tabsong} style={{ color: color }}>
      <div className={styles.rank}>
        <span>01</span>
        <SingerSong></SingerSong>
      </div>
      <div className={styles.grIcon}>
        <ListIcon></ListIcon>
      </div>
      <div className={styles.watch}>
        2192
      </div>
    </div>
  );
}

export default TabSongItem;