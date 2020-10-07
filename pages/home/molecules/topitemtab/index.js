import React from 'react';
import PropTypes from 'prop-types';
import styles from "./topitemtab.module.scss"
import TabSongItem from '../../atoms/tabsongitem';

TopItemTab.propTypes = {

};

function TopItemTab(props) {
  const image = "https://photo-zmp3.zadn.vn/banner/3/0/6/8/3068a4e198cb63856ce698865194d74d.jpg"
  return (
    <div className={styles.top1}>
      <img className={styles.img} src={image}></img>
      <div className={styles.itemtop1}>
        <TabSongItem type="top"></TabSongItem>
      </div>
    </div>
  );
}

export default TopItemTab;