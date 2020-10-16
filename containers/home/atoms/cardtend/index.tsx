import React from 'react';
import styles from './cardtend.module.scss'
import ImgSong from '../ImgSong';
import SingerSong from '../singersong';
import { Data } from '../../../interface/interface'


type Props = {
  data: Data,
  size: string
}

const CardTend: React.FC<Props> = (props: Props) => {
  const data = props.data
  // console.log(props)
  const size = props.size
  return (
    <div className={styles.cardtend}>
      <ImgSong size={size} data={data} />
      <div className={styles.information}>
        <SingerSong data={data} />
      </div>
    </div>
  );
}

export default CardTend;