import React from 'react';
import ImgSong from '../ImgSong';
import styles from './newsitem.module.scss'

interface NewItemdata {
  image: string;
  title: string;
}

type Props = {
  data: NewItemdata
}

const NewItem: React.FC<Props> = (props: Props) => {
  // console.log(data);
  return (
    <div className={styles.newsitem}>
      <div className={styles.imgsong}>
        <ImgSong size="RaM" data={props.data} />
      </div>
      <div className={styles.title}>
        {props.data.title}
      </div>
    </div>
  );
}

export default NewItem;