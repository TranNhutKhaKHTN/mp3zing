import React from 'react';
import PropTypes from 'prop-types';
import styles from './albumitem.module.scss'
import CardSong from '../../atoms/cardsong';
import CardAlbum from '../../atoms/cardalbum';

AlbumItem.propTypes = {

};

function AlbumItem(props) {
  return (
    <div className={styles.albumitem}>
      <CardAlbum ></CardAlbum>
      <div>
        thông tin album
      </div>
    </div >
  );
}

export default AlbumItem;