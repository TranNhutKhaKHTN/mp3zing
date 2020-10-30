import ImgSong from '@containers/home/atoms/ImgSong';
import React from 'react';
import styles from './listresultitem.module.scss'

type Props = {
  data?: any
}

const ListResult: React.FC<Props> = (props: Props) => {
  const data = props.data;
  const listResult = data.map((data, index) => {
    return (
      <div className={styles.listitemResult} key={index}>
        <ImgSong size="S" data={data} />
        <div className={styles.inforSearch}>
          {data.song} - {data.singer}
        </div>
      </div>
    )
  })
  return (
    <div className={styles.Result}>
      {listResult}
    </div>
  );
}

export default ListResult;