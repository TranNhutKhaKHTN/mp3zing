import React from 'react';
import PropTypes from 'prop-types';
import ListNhacItem from '../../molecules/listnhacitem';
import CardTend from '../../atoms/cardtend';
import styles from './listnhac.module.scss'

ListNhac.propTypes = {

};

function ListNhac(props) {
  return (
    <div className={styles.listnhac}>
      <div className={styles.title}>
        NHAC VIỆT HOT
      </div>
      <ListNhacItem></ListNhacItem>
      <hr></hr>
      <ListNhacItem></ListNhacItem>
      <hr></hr>
      <ListNhacItem></ListNhacItem>
      <hr></hr>
      <ListNhacItem></ListNhacItem>
      <hr></hr>
      <ListNhacItem></ListNhacItem>
      <hr></hr>
      <ListNhacItem></ListNhacItem>
      <hr></hr>
      <ListNhacItem></ListNhacItem>
      <hr></hr>
      <ListNhacItem></ListNhacItem>
    </div>
  );
}

export default ListNhac;