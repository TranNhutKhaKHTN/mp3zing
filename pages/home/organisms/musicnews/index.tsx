import React from 'react';
import styles from './musicnews.module.scss';
import ListNews from '../../molecules/listnews';
// import styles from './musicnews.module.scss'

const MusicNews: React.FC = () => {
  return (
    <div className={styles.news}>
      <div className={styles.title}>
        TIN TỨC ÂM NHẠC
      </div>
      <ListNews></ListNews>
    </div>
  );
}

export default MusicNews;