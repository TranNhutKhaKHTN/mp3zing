import React from 'react';
import PropTypes from 'prop-types';
import ImgSong from '../ImgSong';
import styles from './newsitem.module.scss'

NewItem.propTypes = {

};

function NewItem(props) {

  return (
    <div className={styles.newsitem}>
      <div className={styles.imgsong}>
        <ImgSong size="RaM"></ImgSong>
      </div>
      <div className={styles.title}>
        Gil Lê tiến bộ rõ rệt trong sản phẩm mới
      </div>
    </div>
  );
}

export default NewItem;