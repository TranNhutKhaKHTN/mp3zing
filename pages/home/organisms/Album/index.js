import React from 'react';
import PropTypes from 'prop-types';
import AlbumItem from '../../molecules/albumitem';
import styles from './album.module.scss'

Album.propTypes = {

};

function Album(props) {

  const datas = props.datas
  const ListAlbum = datas.map((data, index) => {
    return (
      <AlbumItem key={index} data={data}></AlbumItem>
    )
  })
  return (
    <div className={styles.album}>
      <div className={styles.title}>
        {props.title} {props.icon}
      </div>
      <div className={styles.albumitems}>
        {ListAlbum}
      </div>
    </div>
  );
}

export default Album;