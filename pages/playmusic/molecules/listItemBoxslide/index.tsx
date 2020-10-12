import React from 'react';
import PropTypes from 'prop-types';
import ItemBoxSlide from '../../atoms/itemboxslide';
import styles from "./listitemboxslide.module.scss"

const ListItemBoxSlide: React.FC = (props) => {
  return (
    <div className={styles.list}>
      <ItemBoxSlide></ItemBoxSlide>
      <ItemBoxSlide></ItemBoxSlide>
      <ItemBoxSlide></ItemBoxSlide>
      <ItemBoxSlide></ItemBoxSlide>
    </div>
  );
}

export default ListItemBoxSlide;