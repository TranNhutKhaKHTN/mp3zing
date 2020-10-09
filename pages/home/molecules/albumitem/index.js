import React from 'react';
import PropTypes from 'prop-types';
import styles from './albumitem.module.scss'
// import CardSong from '../../atoms/cardsong';
// import CardAlbum from '../../atoms/cardalbum';
import ImgSong from '../../atoms/ImgSong';

AlbumItem.propTypes = {

};

function AlbumItem(props) {
  const data = props.data
  return (
    <div className={styles.albumitem}>
      <ImgSong size="XL" data={data}></ImgSong>
      <div className={styles.title}>
        {data.song}
      </div>
    </div >
  );
}

export default AlbumItem;