import React from 'react';
import PropTypes from 'prop-types';
import styles from './musicnews.module.scss';
import ListNews from '../../molecules/listnews';

MusicNews.propTypes = {

};

function MusicNews(props) {
  return (
    <div>
      <div>
        TIN TỨC ẤM NHẠC
      </div>
      <ListNews></ListNews>
    </div>
  );
}

export default MusicNews;