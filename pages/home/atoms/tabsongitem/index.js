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

  const data = props.data
  // console.log(data);
  return (
    <div className={styles.tabsong} style={{ color: color }}>
      <div className={styles.rank}>
        <span>{data.rank}</span>
        <div className={styles.singersong}>
          <SingerSong data={data}></SingerSong>
        </div>
      </div>
      <div className={styles.grIcon}>
        <ListIcon></ListIcon>
      </div>
      <div className={styles.watch}>
        {data.watch}
      </div>
    </div>
  );
}

export default TabSongItem;