import React from 'react';
import PropTypes from 'prop-types';
import AlbumItem from '../../molecules/albumitem';
import styles from './album.module.scss'

Album.propTypes = {

};

function Album(props) {
  return (
    <div className={styles.album}>
      <div className={styles.title}>
        {props.title}
      </div>
      <div className={styles.albumitems}>
        <AlbumItem></AlbumItem>
        <AlbumItem></AlbumItem>
        <AlbumItem></AlbumItem>
        <AlbumItem></AlbumItem>
        <AlbumItem></AlbumItem>
        <AlbumItem></AlbumItem>
        <AlbumItem></AlbumItem>
        <AlbumItem></AlbumItem>
      </div>
    </div>
  );
}

export default Album;