import React from 'react';
import PropTypes from 'prop-types';
import styles from './topic.module.scss'

Topic.propTypes = {

};

function Topic(props) {
  let src = "https://photo-zmp3.zadn.vn/cover/6/0/8/d/608d6474b6daa5563eb5c088ca08cc98.jpg"
  if (props.data) {
    src = props.data.image
  }
  return (
    <img className={styles.topic} src={src}></img>
  );
}

export default Topic;