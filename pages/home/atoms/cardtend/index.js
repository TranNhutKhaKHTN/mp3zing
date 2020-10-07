import React from 'react';
import PropTypes from 'prop-types';
import CardSong from '../cardsong';
import styles from './cardtend.module.scss'
import ImgSong from '../ImgSong';

CardTend.propTypes = {

};

function CardTend(props) {

  const size = props.size
  return (
    <div className={styles.cardtend}>
      <ImgSong src={props.src} size={size}></ImgSong>
      <div className={styles.information}>
        <div className={styles.title}>Có Chắc Yêu Là Đây</div>
        <div className={styles.singer}>Sơn Tùng MTP</div>
      </div>
    </div>
  );
}

export default CardTend;