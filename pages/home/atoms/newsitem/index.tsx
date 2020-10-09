import React from 'react';
import PropTypes from 'prop-types';
import ImgSong from '../ImgSong';
import styles from './newsitem.module.scss'

interface NewItemdata {
  image: string;
  title: string;
}

type Props = {
  data: NewItemdata
}

const NewItem: React.FC<Props> = (props) => {
  // console.log(data);
  return (
    <div className={styles.newsitem}>
      <div className={styles.imgsong}>
        <ImgSong size="RaM" data={props.data}></ImgSong>
      </div>
      <div className={styles.title}>
        {props.data.title}
      </div>
    </div>
  );
}

export default NewItem;