import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from "react-redux"

import ImgSong from '../../../../containers/home/atoms/ImgSong';
import { CaretRightOutlined, PauseOutlined, EllipsisOutlined, HeartOutlined } from "@ant-design/icons"
import styles from './leftcontent.module.scss'

const srcaudio = "https://cdns-preview-1.dzcdn.net/stream/c-13039fed16a173733f227b0bec631034-12.mp3";
const dataleftcontent = {
  image: "https://photo-playlist-zmp3.zadn.vn/radio?src=HavwqN7EzbiAHZUTDj-sJ40CDyesrRORLmWgdM_MiXe7ModBRe6rJWSBAybgWx4Q2rahcZ7Ju0G2I2cMTu7pGrOUVyajlRuOL1xn4gwSVsPdiM4tXSUXu29z&size=thumb/240_240"
}

const LeftContentPlayMucsic: React.FC = () => {
  const [roll, setRoll] = useState(false);
  // const [audioPlayMusic, setaudioPlayMusic] = useState(srcaudio)
  const Player = useRef(null);
  const musicToPlay = useSelector((state: any) => state.playmusic.musicToPlay)
  const playList = useSelector((state: any) => state.playmusic.dataPlayList)
  // console.log(playList);

  useEffect(() => {
    if (musicToPlay) {
      PlayNewAudio(playList[musicToPlay].link)
      setRoll(true)
    }
  }, [musicToPlay])

  const clickPlayMusic = () => {
    const quay = !roll;
    setRoll(quay)
    if (quay) {

      Player.current.play();
    }
    else {
      Player.current.pause();
      // Player.current.currentTime = 0;
      // Player.current.src = "https://drive.google.com/drive/folders/1AD2vakpcEDSdSAfUntgLTunH-Mw6btCP";
      // setaudioPlayMusic("https://drive.google.com/drive/folders/1AD2vakpcEDSdSAfUntgLTunH-Mw6btCP")
      // Player.current.play();
    }
  }

  //<> hàm play một bài mới
  const PlayNewAudio = (src: string) => {
    Player.current.pause();
    Player.current.currentTime = 0;
    Player.current.src = src
    Player.current.load();
    Player.current.play();
  }
  //</>

  //<> hàm bắt sự kiện kết thúc bài hát
  const endPlayMusic = () => {
    console.log("new play");
    PlayNewAudio("https://firebasestorage.googleapis.com/v0/b/audio-87a53.appspot.com/o/Jack%20-%20Hoa%20H%E1%BA%A3i%20%C4%90%C6%B0%E1%BB%9Dng%20-%20Official%20Music%20Video.mp3?alt=media&token=8bd7c113-48b0-487a-96c8-f8ab5f785413")
  }
  //</>

  return (
    <div className={styles.content}>
      <audio id="player" src={srcaudio} ref={Player} onEnded={endPlayMusic}>

      </audio>
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