import { CaretRightFilled, StepBackwardOutlined, StepForwardFilled } from '@ant-design/icons';
import { Slider } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setMusicToPlay, setPlaying } from '../../../../redux/actions/playmusic';
import { useKeyPress } from '../../../hooks/useKeyPress';
import styles from './miniplayer.module.scss'


const srcaudio = "https://cdns-preview-1.dzcdn.net/stream/c-13039fed16a173733f227b0bec631034-12.mp3";
const MiniPlayer: React.FC = () => {
  const dispatch = useDispatch()
  const Player = useRef(null);
  // const Slidercontrol = useRef(null);
  const playing = useSelector((state: any) => state.playmusic.playing)
  const musicToPlay = useSelector((state: any) => state.playmusic.musicToPlay)
  const playList = useSelector((state: any) => state.playmusic.dataPlayList)

  const [duration, setDuration] = useState(100);
  const currentTime = useRef(0);
  const [curentSlider, setCurentSlider] = useState(0)

  const keyNext = useKeyPress("ArrowRight");
  const keyPrev = useKeyPress("ArrowLeft");
  const keySpace = useKeyPress("p")

  useEffect(() => {
    if (keyPrev) {
      if (musicToPlay - 1 >= 0) {
        const action = setMusicToPlay(musicToPlay - 1);
        dispatch(action);
      }
      else {
        const action = setMusicToPlay(playList.length - 1);
        dispatch(action);
      }
    }
  }, [keyPrev])

  useEffect(() => {
    if (keyNext) {
      endPlayMusic()
    }
  }, [keyNext])

  useEffect(() => {
    if (keySpace) {
      //setRoll(!roll)
      const action = setPlaying(!playing);
      dispatch(action)
    }
  }, [keySpace])

  useEffect(() => {
    if (playing) {
      Player.current.play();
    }
    else {
      Player.current.pause();
    }
  }, [playing])

  useEffect(() => {
    if (musicToPlay != null) {
      PlayNewAudio(playList[musicToPlay].link)
    }
  }, [musicToPlay])

  //<> hàm play một bài mới
  const PlayNewAudio = (src: string) => {
    Player.current.currentTime = 0;
    Player.current.src = src
    Player.current.load();
    Player.current.play();

    currentTime.current = 0;
    setCurentSlider(0)
  }
  //</>

  //<> hàm bắt sự kiện kết thúc bài hát
  const endPlayMusic = () => {
    // console.log("new play");
    if (musicToPlay + 1 <= playList.length - 1) {
      const action = setMusicToPlay(musicToPlay + 1);
      dispatch(action);
    }
    else {
      const action = setMusicToPlay(0);
      dispatch(action);
    }
  }
  //</>

  const changeDuration = () => {
    const duration = Player.current.duration;
    console.log(duration);

    setDuration(Math.ceil(duration))
  }

  useEffect(() => {
    const timeOut = setInterval(() => {
      if (playing) {
        currentTime.current = currentTime.current + 1
        setCurentSlider(currentTime.current)
      }
    }, 1000);
    return () => clearInterval(timeOut);
  }, [playing])

  const changeSlider = (value) => {
    currentTime.current = value
    setCurentSlider(value)
    Player.current.currentTime = value
  }

  return (
    <div className={styles.miniplayer_wraper}>
      <audio id="player" src={srcaudio} ref={Player} onEnded={endPlayMusic} onDurationChange={changeDuration}>

      </audio>
      <div className={styles.playcontrol}>
        <StepBackwardOutlined />
      </div>
      <div className={styles.playcontrol} id={styles.playpause}>
        <CaretRightFilled />
      </div>
      <div className={styles.playcontrol}>
        <StepForwardFilled />
      </div>

      <div className={styles.slider}>
        <Slider min={0} max={duration} value={curentSlider} onChange={changeSlider} />
      </div>
    </div>
  );
}

export default MiniPlayer;