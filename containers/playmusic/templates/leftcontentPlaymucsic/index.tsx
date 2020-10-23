import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setPlaying } from "./../../../../redux/actions/playmusic";
// import { useKeyPress } from '../../../hooks/useKeyPress';

import ImgSong from '../../../../containers/home/atoms/ImgSong';
import { CaretRightOutlined, PauseOutlined, EllipsisOutlined, HeartOutlined } from "@ant-design/icons"
import styles from './leftcontent.module.scss'


// const srcaudio = "https://cdns-preview-1.dzcdn.net/stream/c-13039fed16a173733f227b0bec631034-12.mp3";
const dataleftcontent = {
  image: "https://photo-playlist-zmp3.zadn.vn/radio?src=HavwqN7EzbiAHZUTDj-sJ40CDyesrRORLmWgdM_MiXe7ModBRe6rJWSBAybgWx4Q2rahcZ7Ju0G2I2cMTu7pGrOUVyajlRuOL1xn4gwSVsPdiM4tXSUXu29z&size=thumb/240_240"
}

const LeftContentPlayMucsic: React.FC = () => {
  // const [roll, setRoll] = useState(false);
  const roll = useSelector((state: any) => state.playmusic.playing)
  const dispatch = useDispatch()
  // const Player = useRef(null);
  // const musicToPlay = useSelector((state: any) => state.playmusic.musicToPlay)
  // const playList = useSelector((state: any) => state.playmusic.dataPlayList)
  // const keyNext = useKeyPress("ArrowRight");
  // const keyPrev = useKeyPress("ArrowLeft");
  // const keySpace = useKeyPress("p")

  // useEffect(() => {
  //   if (keyPrev) {
  //     if (musicToPlay - 1 >= 0) {
  //       const action = setMusicToPlay(musicToPlay - 1);
  //       dispatch(action);
  //     }
  //     else {
  //       const action = setMusicToPlay(playList.length - 1);
  //       dispatch(action);
  //     }
  //   }
  // }, [keyPrev])

  // useEffect(() => {
  //   if (keyNext) {
  //     endPlayMusic()
  //   }
  // }, [keyNext])

  // useEffect(() => {
  //   if (keySpace) {
  //     setRoll(!roll)
  //   }
  // }, [keySpace])

  // useEffect(() => {
  //   if (roll) {
  //     Player.current.play();
  //   }
  //   else {
  //     Player.current.pause();
  //   }
  // }, [roll])

  // useEffect(() => {
  //   if (musicToPlay != null) {
  //     PlayNewAudio(playList[musicToPlay].link)
  //     setRoll(true)
  //   }
  // }, [musicToPlay])

  const clickPlayMusic = () => {
    const quay = !roll;
    const action = setPlaying(quay);
    console.log(action);
    dispatch(action);
  }

  //<> hàm play một bài mới
  // const PlayNewAudio = (src: string) => {
  //   // Player.current.pause();
  //   Player.current.currentTime = 0;
  //   Player.current.src = src
  //   Player.current.load();
  //   Player.current.play();
  // }
  // //</>

  //<> hàm bắt sự kiện kết thúc bài hát
  // const endPlayMusic = () => {
  //   // console.log("new play");
  //   if (musicToPlay + 1 <= playList.length - 1) {
  //     const action = setMusicToPlay(musicToPlay + 1);
  //     dispatch(action);
  //   }
  //   else {
  //     const action = setMusicToPlay(0);
  //     dispatch(action);
  //   }
  // }
  //</>

  return (
    <div className={styles.content}>
      {/* <audio id="player" src={srcaudio} ref={Player} onEnded={endPlayMusic}>

      </audio> */}
      <div className={roll ? styles.imgsongroll : styles.imgsong} onClick={clickPlayMusic}>
        <ImgSong size="XLL" data={dataleftcontent} singer=" " />
      </div>
      <div className={styles.title}>
        <b>Radio Hoa Hải Đường</b>
      </div>

      <button onClick={clickPlayMusic} className={styles.button}>{roll ? <PauseOutlined /> : <CaretRightOutlined />} Phát tất cả</button>
      <div style={{ color: "#AEAEAE" }}>50 bài hát 3 giờ 42 phút</div>
      <div className={styles.icon}>
        <div className={styles.iconitem}>
          <HeartOutlined />
        </div>
        <div className={styles.iconitem}>
          <EllipsisOutlined />
        </div>
      </div>

    </div>
  );
}

export default LeftContentPlayMucsic;