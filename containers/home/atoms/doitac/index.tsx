import React from 'react';
import src from '@public/doitac.png'
import styles from './doitac.module.scss'

const DoiTac: React.FC = () => {
  return (
    <div className={styles.doitac}>
      <img src={src}></img>
    </div>
  );
}

export default DoiTac;