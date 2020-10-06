import React from 'react';
import PropTypes from 'prop-types';
import CardSong from '../cartsong';
import styles from './cardtend.module.scss'

CardTend.propTypes = {

};

function CardTend(props) {
  return (
    <div className={styles.cardtend}>
      <CardSong></CardSong>
      <div className={styles.information}>
        <div>Có Chắc Yêu Là Đây</div>
        <div style={{ color: "#9E9E9E" }}>Sơn Tùng MTP</div>
      </div>
    </div>
  );
}

export default CardTend;