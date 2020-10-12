import React from 'react';
import PropTypes from 'prop-types';
import ListItemBoxSlide from '../../molecules/listItemBoxslide';
import styles from './boxslide.module.scss'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

BoxSlide.propTypes = {

};

function BoxSlide(props) {
  return (
    <div>
      <div className={styles.title}>
        <b>title</b>
        <div className={styles.gricon}>
          <LeftOutlined />
          <RightOutlined />
        </div>
      </div>
      <div>
        <ListItemBoxSlide></ListItemBoxSlide>
      </div>
    </div>
  );
}

export default BoxSlide;