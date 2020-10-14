import React from 'react';
import AlbumItem from '../../molecules/albumitem';
import styles from './album.module.scss'

interface album {
  image: string,
  song: string,
  singer: string,
}

type Props = {
  title: string,
  datas: album[],
  icon?: string
}

const Album: React.FC<Props> = (props: Props) => {

  const datas: album[] = props.datas
  const ListAlbum = datas.map((data, index) => {
    return (
      <AlbumItem key={index} data={data}></AlbumItem>
    )
  })
  return (
    <div className={styles.album}>
      <div className={styles.title}>
        {props.title} {props.icon}
      </div>
      <div className={styles.albumitems}>
        {ListAlbum}
      </div>
    </div>
  );
}

export default Album;