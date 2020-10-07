import React from 'react';
import PropTypes from 'prop-types';
import styles from "./hottopic.module.scss"
import Topic from '../../atoms/topic';

HotTopic.propTypes = {

};

function HotTopic(props) {
  return (
    <div className={styles.hottopic}>
      <div className={styles.title}>
        CHỦ ĐỀ HOT
      </div>
      <Topic></Topic>
      <Topic></Topic>
      <Topic></Topic>
      <Topic></Topic>
      <Topic></Topic>
      <div className={styles.addition}>
        xem thêm chủ đề khác
      </div>
    </div>
  );
}

export default HotTopic;