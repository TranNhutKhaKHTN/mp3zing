import ImgSong from '@containers/home/atoms/ImgSong';
import React from 'react';
import styles from './listresult.module.scss'

type Props = {
  data?: any
}

const ListResult: React.FC<Props> = (props: Props) => {
  const data = props.data;
  const listResult = data.map((data, index) => {
    return (
      <div key={index} style={{ marginBottom: 5 }}>
        <ImgSong size="S" data={data} />
      </div>
    )
  })
  return (
    <div className={styles.listResult}>
      {listResult}
    </div>
  );
}

export default ListResult;