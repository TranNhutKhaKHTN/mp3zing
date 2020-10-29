import React from 'react';
import LineMusicPlay from '@containers/playmusic/molecules/linemusicplay';
import styles from './listlineplaymusic.module.scss'
import { useSelector } from 'react-redux'
interface LineMusic {
  image: string;
  song: string;
  singer: string;
  rank: number;
}
type Props = {
  data: LineMusic[]
}

const ListLinePlayMusic: React.FC<Props> = (props: Props) => {
  const musicToPlay = useSelector((state: any) => state.playmusic.musicToPlay)

  const datas = props.data;
  const listLine = datas.map((data, index) => {
    return (
      <div key={index} className={musicToPlay === index ? styles.itemsplaying : styles.listline}>
        <LineMusicPlay data={data} index={index} />
        {/* <div className={styles.horizontalline}></div> */}
      </div>
    )
  })
  return (
    <div>
      {listLine}
    </div>
  );
}

export default ListLinePlayMusic;