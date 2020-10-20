import { Dropdown } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import ImgSong from '../../../home/atoms/ImgSong';
import GrIconPlayMusic from '../../atoms/griconplaymusic';
import MenuLineSong from '../menulinesong';
import styles from './linemusicplay.module.scss'
import { setMusicToPlay } from './../../../../redux/actions/playmusic'

interface LineMusic {
  image: string;
  song: string;
  singer: string;
  rank: number;
}

type Props = {
  data: LineMusic,
  index: number
}
const menu = <MenuLineSong />
const LineMusicPlay: React.FC<Props> = (props: Props) => {
  const data = props.data
  const index = props.index
  const dispatch = useDispatch();
  // const musicToPlay = useSelector((state: any) => state.playmusic.musicToPlay)

  const playThis = () => {
    const action = setMusicToPlay(index);
    dispatch(action)
  }

  return (
    <div onClick={playThis}>
      <Dropdown overlay={menu} trigger={["contextMenu"]} >
        <div className={styles.line}>
          <div className={styles.leftline}>
            <div className={styles.rank}><b>{data.rank}</b></div>
            <div className={styles.imgsong}>
              <ImgSong size="SS" data={data} />
            </div>
            <div className={styles.singersong}>
              <div className={styles.song}>
                {data.song}
              </div>
              <div className={styles.singer}>
                {data.singer}
              </div>
            </div>
          </div>
          <div>3:50</div>
          <GrIconPlayMusic />
        </div>
      </Dropdown>
    </div>
  );
}

export default LineMusicPlay;