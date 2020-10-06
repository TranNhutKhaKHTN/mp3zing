import React from 'react';
import PropTypes from 'prop-types';
import styles from './albumitem.module.scss'
import CardSong from '../../atoms/cartsong';

AlbumItem.propTypes = {

};

function AlbumItem(props) {
  return (
    <div>
      <CardSong styles={{ width: 190, height: 190 }}></CardSong>
    </div >
  );
}

export default AlbumItem;