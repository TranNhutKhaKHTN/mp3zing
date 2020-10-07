import React from 'react';
import PropTypes from 'prop-types';
import CardSong from '../cardsong';
import styles from './cardtend.module.scss'
import ImgSong from '../ImgSong';

CardTend.propTypes = {

};

function CardTend(props) {
  const data = props.data
  // console.log(props)
  const size = props.size
  return (
    <div className={styles.cardtend}>
      <ImgSong size={size} data={data}></ImgSong>
      <div className={styles.information}>
        <div className={styles.title}>{data.song}</div>
        <div className={styles.singer}>{data.singer}</div>
      </div>
    </div>
  );
}

export default CardTend;