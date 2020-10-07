import React from 'react';
import PropTypes from 'prop-types';
import CardSong from '../../atoms/cardsong';
import InforTend from '../../atoms/InforTend';
import styles from './tenditem.module.scss'
import CardTend from '../../atoms/cardtend';

TendItem.propTypes = {

};

function TendItem(props) {
  const { data } = props;
  console.log(data);
  return (
    <div className={styles.tenditem}>
      <div className={styles.leftItem}>
        <div className={styles.number}>
          {data.index}
        </div>
        <div className={styles.content}></div>
        <CardTend size="M" src={data.image} />
      </div>
      <div className={styles.rigntItem}>
        <InforTend></InforTend>
      </div>
    </div>
  );
}

export default TendItem;