import { Dropdown } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import ImgSong from '@containers/home/atoms/ImgSong';
import GrIconPlayMusic from '@containers/playmusic/atoms/griconplaymusic';
import MenuLineSong from '../menulinesong';
import styles from './linemusicplay.module.scss'
import { setMusicToPlay, setPlaying } from '@redux/actions/playmusic'
import IconPlaying from '@containers/playmusic/atoms/iconplaying';
import { Draggable } from 'react-beautiful-dnd'

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
  const musicToPlay = useSelector((state: any) => state.playmusic.musicToPlay)
  const playing = useSelector((state: any) => state.playmusic.playing)

  const playThis = () => {
    // console.log(index);
    if (index === musicToPlay) {
      const action = setPlaying(!playing)
      dispatch(action)
    }
    else {
      const action = setMusicToPlay(index);
      dispatch(action)
    }
  }

  return (
    <Draggable draggableId={`${index}aaa`} index={index}>
      {provided => (
        <div

          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div onClick={playThis} style={{
            paddingTop: 10,
            paddingBottom: 10,
            borderBottom: "1px solid #f2f2f2"
          }}>
            <Dropdown overlay={menu} trigger={["contextMenu"]} >
              <div className={styles.line}>
                <div className={styles.leftline}>
                  <div className={styles.rank}><b>{index + 1}</b></div>
                  <div className={styles.imgsong}>
                    <div className={styles.imgsong}>
                      <ImgSong size="SS" data={data} />
                      {index === musicToPlay && playing ? <div className={styles.iconplaying}><IconPlaying /></div> : null}
                    </div>
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
        </div>
      )}
    </Draggable>
  );
}

export default LineMusicPlay;