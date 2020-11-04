import React from 'react';
import LineMusicPlay from '@containers/playmusic/molecules/linemusicplay';
import styles from './listlineplaymusic.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { addPlayList, checkDrag, setMusicToPlay } from '@redux/actions/playmusic';
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
  const dispatch = useDispatch();

  const datas = props.data;
  const listLine = datas.map((data, index) => {
    return (
      <div key={index} className={musicToPlay === index ? styles.itemsplaying : styles.listline}>
        <LineMusicPlay data={data} index={index} />
      </div>
    )
  })


  const onDragEnd = ({ source, destination }: any) => {
    if (destination === undefined || destination === null) return null
    if (destination.index === source.index) return null

    const newList = datas.filter((_: any, idx: number) => idx !== source.index)
    newList.splice(destination.index, 0, datas[source.index])

    // console.log(datas);

    // const src = source.index;
    // const des = destination.index;
    // const temp = datas[src];
    // const temp2 = datas[des]
    // datas[src] = {
    //   ...temp2
    // }
    // datas[des] = {
    //   ...temp
    // }
    // console.log(datas);
    const action = addPlayList(newList);
    dispatch(action)

    const src = source.index;
    const des = destination.index

    if (musicToPlay === src) {
      const action = setMusicToPlay(des)
      dispatch(action)
      const actionn1 = checkDrag();
      dispatch(actionn1)
      return
    }

    if (musicToPlay === des) {
      if (src > musicToPlay) {
        const action = setMusicToPlay(musicToPlay + 1)
        dispatch(action)

      }
      else {
        const action = setMusicToPlay(musicToPlay - 1)
        dispatch(action)
      }
      const actionn1 = checkDrag();
      dispatch(actionn1)
      return
    }

    if (musicToPlay > src && musicToPlay < des) {
      const action1 = setMusicToPlay(musicToPlay - 1)
      dispatch(action1)

      const actionn1 = checkDrag();
      dispatch(actionn1)
      return
    }
    if (musicToPlay < src && musicToPlay > des) {
      const action1 = setMusicToPlay(musicToPlay + 1)
      dispatch(action1)

      const actionn1 = checkDrag();
      dispatch(actionn1)
      return
    }
    const action1 = setMusicToPlay(musicToPlay)
    dispatch(action1)

    const actionn = checkDrag();
    dispatch(actionn)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Droppable droppableId='col-1'>
          {provided => (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column'
              }}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {listLine}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default ListLinePlayMusic;