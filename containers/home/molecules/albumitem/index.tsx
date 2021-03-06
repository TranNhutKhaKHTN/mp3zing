import React from 'react';
import styles from './albumitem.module.scss'
import ImgSong from '@containers/home/atoms/ImgSong';

interface album {
  image: string,
  song: string,
  singer: string,
}


type Props = {
  data: album
}

const AlbumItem: React.FC<Props> = (props: Props) => {
  const data = props.data
  return (
    <div className={styles.albumitem}>
      <ImgSong size="XL" data={data} />
      <div className={styles.title}>
        {data.song}
      </div>
    </div >
  );
}

export default AlbumItem;