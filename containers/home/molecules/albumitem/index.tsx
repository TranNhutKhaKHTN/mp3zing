import React from 'react';
import styles from './albumitem.module.scss'
// import CardSong from '../../atoms/cardsong';
// import CardAlbum from '../../atoms/cardalbum';
import ImgSong from '../../atoms/ImgSong';

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
      <ImgSong size="XL" data={data}></ImgSong>
      <div className={styles.title}>
        {data.song}
      </div>
    </div >
  );
}

export default AlbumItem;