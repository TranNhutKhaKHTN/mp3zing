import React from 'react';
import PropTypes from 'prop-types';
import styles from './listtabsong.module.scss'
import SingerSong from '../../atoms/singersong';
import TabSongItem from '../../atoms/tabsongitem';
import TopItemTab from '../topitemtab';

ListTabSong.propTypes = {

};

function ListTabSong(props) {

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