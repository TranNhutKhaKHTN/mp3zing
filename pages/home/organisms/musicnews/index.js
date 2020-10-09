import React from 'react';
import PropTypes from 'prop-types';
import styles from './musicnews.module.scss';
import ListNews from '../../molecules/listnews';
import Title from '../../atoms/title';
// import styles from './musicnews.module.scss'

MusicNews.propTypes = {

};

function MusicNews(props) {
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