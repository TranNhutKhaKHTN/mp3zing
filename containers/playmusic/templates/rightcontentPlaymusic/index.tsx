import React, { useEffect } from 'react';
import ListLinePlayMusic from '../../organisms/listlineplaymusic';
import ListCardSinger from '../../organisms/listcardsinger';
import BoxSlide from '../../organisms/boxslide';
import { fetchDataPlayMusic } from './../../../../redux/actions/playmusic';
import { useDispatch, useSelector } from 'react-redux';

const RightContentPlaymusic: React.FC = () => {
  const datalinemusic = useSelector((state: any) => state.playmusic.dataPlayList)
  const dataCardsinger = useSelector((state: any) => state.playmusic.dataCardSinger)
  const databoxslide = useSelector((state: any) => state.playmusic.dataBoxMusic)
  const dispatch = useDispatch();

  useEffect(() => {
    const action = fetchDataPlayMusic()
    dispatch(action)
  }, [])

  return (
    <div>
      <ListLinePlayMusic data={datalinemusic}></ListLinePlayMusic>
      <ListCardSinger data={dataCardsinger}></ListCardSinger>
      <BoxSlide data={databoxslide} title="Có Thể Bạn Quan Tâm"></BoxSlide>
      <BoxSlide data={databoxslide} title="Nhạc Trẻ"></BoxSlide>
      <BoxSlide data={databoxslide} title="V-pop"></BoxSlide>
    </div>
  );
}

export default RightContentPlaymusic;