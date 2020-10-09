import React from 'react';
import PropTypes from 'prop-types';
import src from './../../../../public/doitac.png'
import styles from './doitac.module.scss'

const DoiTac: React.FC = (props) => {
  return (
    <div className={styles.doitac}>
      <img src={src}></img>
    </div>
  );
}

export default DoiTac;