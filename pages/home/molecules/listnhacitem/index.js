import React from 'react';
import PropTypes from 'prop-types';
import ImgSong from '../../atoms/ImgSong';
import styles from './listnhac.module.scss'

ListNhacItem.propTypes = {

};

function ListNhacItem(props) {
  return (
    <div className={styles.listnhac}>
      <ImgSong size="S"></ImgSong>
      <div>
        <div>tên bài nhạc</div>
        <div>tên ca sĩ</div>
      </div>
    </div>
  );
}

export default ListNhacItem;