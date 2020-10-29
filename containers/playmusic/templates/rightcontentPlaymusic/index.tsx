import React from 'react';
import ListLinePlayMusic from '@containers/playmusic/organisms/listlineplaymusic';
import ListCardSinger from '@containers/playmusic/organisms/listcardsinger';
import BoxSlide from '@containers/playmusic/organisms/boxslide';
import { useSelector } from 'react-redux';

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