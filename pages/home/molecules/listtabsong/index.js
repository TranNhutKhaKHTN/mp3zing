import React from 'react';
import PropTypes from 'prop-types';
import styles from './listtabsong.module.scss'
import SingerSong from '../../atoms/singersong';
import TabSongItem from '../../atoms/tabsongitem';
import TopItemTab from '../topitemtab';

ListTabSong.propTypes = {

};

function ListTabSong(props) {
  const image = "https://photo-zmp3.zadn.vn/banner/3/0/6/8/3068a4e198cb63856ce698865194d74d.jpg"
  return (
    <div>
      <TopItemTab></TopItemTab>

      <TabSongItem></TabSongItem>
      <hr></hr>
      <TabSongItem></TabSongItem>
      <hr></hr>
      <TabSongItem></TabSongItem>
      <hr></hr>
      <TabSongItem></TabSongItem>
      <hr></hr>
      <TabSongItem></TabSongItem>
      <hr></hr>
      <TabSongItem></TabSongItem>
      <hr></hr>
      <TabSongItem></TabSongItem>
      <hr></hr>
      <TabSongItem></TabSongItem>
      <hr></hr>
      <TabSongItem></TabSongItem>
    </div>
  );
}

export default ListTabSong;