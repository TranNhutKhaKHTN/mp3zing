import React from 'react';
import PropTypes from 'prop-types';
import styles from './topnews.module.scss'



const TopNews: React.FC = (props) => {
  const src = "https://znews-photo.zadn.vn/w480/Uploaded/wyhktpu/2020_09_17/BP_THUMB.jpg"
  return (
    <div className={styles.topnews}>
      <img src={src}></img>
      <div className={styles.desc}>
        <p>BlackPink tặng quà cho fan Việt trên Zing MP3</p>
      </div>
    </div>
  );
}

export default TopNews;