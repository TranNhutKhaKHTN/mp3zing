import React from 'react';
import PropTypes from 'prop-types';
import styles from './cardtend.module.scss'
import ImgSong from '../ImgSong';
import SingerSong from '../singersong';

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
        <SingerSong data={data}></SingerSong>
      </div>
    </div>
  );
}

export default CardTend;