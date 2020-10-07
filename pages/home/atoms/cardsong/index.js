import React from 'react';
import PropTypes from 'prop-types';
import styles from './tendingitem.module.scss'
import { PlayCircleOutlined } from "@ant-design/icons"

CardSong.propTypes = {

};

function CardSong(props) {
  const image = props.src
  return (
    <div className={styles.card} >
      <div className={styles.backroudCard}>
        <img className={styles.cardImg} src={image}></img>
      </div>
      <div className={styles.opacity}>
        <span className={styles.play}>
          <PlayCircleOutlined style={{ color: "white" }} />
        </span>
      </div>
    </div>
  );
}

export default CardSong;