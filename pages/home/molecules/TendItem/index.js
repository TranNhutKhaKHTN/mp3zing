import React from 'react';
import PropTypes from 'prop-types';
import CardSong from '../../atoms/cardsong';
import InforTend from '../../atoms/InforTend';
import styles from './tenditem.module.scss'
import CardTend from '../../atoms/cardtend';

TendItem.propTypes = {

};

function TendItem(props) {
  return (
    <div className={styles.tenditem}>
      <div className={styles.leftItem}>
        <div className={styles.number}>
          1
        </div>
        <div className={styles.number}>-</div>
        <CardTend />
      </div>
      <div className={styles.rigntItem}>
        <InforTend></InforTend>
      </div>
    </div>
  );
}

export default TendItem;