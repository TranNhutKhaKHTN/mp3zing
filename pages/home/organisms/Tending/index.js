import React from 'react';
// import PropTypes from 'prop-types';
// import TendingItem from '../../atoms/cartsong';
import CardSong from '../../atoms/cartsong';
// import TendItem from '../../molecules/TendItem';
import InforTend from '../../atoms/InforTend';
import TendItem from '../../molecules/TendItem';
import styles from './tending.module.scss'

Tending.propTypes = {

};

function Tending(props) {
  return (
    <div className={styles.listend}>
      <TendItem></TendItem>
      <hr></hr>
      <TendItem></TendItem>
      <hr />
      <TendItem></TendItem>
      <hr></hr>
      <TendItem></TendItem>
    </div >
  );
}

export default Tending;