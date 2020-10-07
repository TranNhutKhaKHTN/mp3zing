import React from 'react';
import PropTypes from 'prop-types';
import ImgSong from '../../atoms/ImgSong';
import styles from './listnhac.module.scss'
import CardTend from '../../atoms/cardtend';
import ListIcon from '../../atoms/listicon';

ListNhacItem.propTypes = {

};

function ListNhacItem(props) {
  return (
    <div className={styles.listnhac}>
      <CardTend size="S"></CardTend>
      <div className={styles.grIcon}>
        <ListIcon></ListIcon>
      </div>
    </div>
  );
}

export default ListNhacItem;