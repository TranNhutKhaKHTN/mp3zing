import React from 'react';
import menusong from './../../../../public/menusong.png'
import styles from './menulinesong.module.scss'


const MenuLineSong: React.FC = () => {
  return (
    <img src={menusong} className={styles.menu} />
  );
}

export default MenuLineSong;