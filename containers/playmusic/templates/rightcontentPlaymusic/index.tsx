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

  return (
    <div>
      <ListLinePlayMusic data={datalinemusic} />
      <ListCardSinger data={dataCardsinger} />
      <BoxSlide data={databoxslide} title="Có Thể Bạn Quan Tâm" />
      <BoxSlide data={databoxslide} title="Nhạc Trẻ" />
      <BoxSlide data={databoxslide} title="V-pop" />
    </div>
  );
}

export default RightContentPlaymusic;