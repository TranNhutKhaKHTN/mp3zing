import React from 'react';
import PropTypes from 'prop-types';
import styles from './title.module.scss'
import { RightOutlined } from '@ant-design/icons'
Title.propTypes = {

};

function Title(props) {
  let size;
  switch (props.size) {
    case "S":
      size = styles.S
      break;
    case "M":
      size = styles.M
      break;
    case "L":
      size = styles.L
      break
  }


  return (
    <div className={styles.title}>
      <div className={size}>
        {props.title}
        {props.icon ? <RightOutlined /> : null}
      </div>

    </div>
  );
}

export default Title;