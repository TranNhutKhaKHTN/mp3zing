import { CaretRightFilled, PauseOutlined, RetweetOutlined, StepBackwardOutlined, StepForwardFilled, SwapOutlined } from '@ant-design/icons';
import { Slider } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setMusicToPlay, setPlaying } from '../../../../redux/actions/playmusic';
import ImgSong from '../../../home/atoms/ImgSong';
import { useKeyPress } from '../../../hooks/useKeyPress';
import styles from './miniplayer.module.scss'


const srcaudio = "https://cdns-preview-1.dzcdn.net/stream/c-13039fed16a173733f227b0bec631034-12.mp3";
const formatDuration = (duration: number) => {
  const dr = Math.floor(duration);
  const p = Math.floor(dr / 60);
  const s = dr - p * 60;
  const ps = `0${p}`.slice(-2)
  const ss = `0${s}`.slice(-2)
  return `${ps}:${ss}`;
}

const MiniPlayer: React.FC = () => {
  const dispatch = useDispatch()
  const Player = useRef(null);
  const playing = useSelector((state: any) => state.playmusic.playing)
  const musicToPlay = useSelector((state: any) => state.playmusic.musicToPlay)
  const playList = useSelector((state: any) => state.playmusic.dataPlayList)

  const [duration, setDuration] = useState(100);
  const currentTime = useRef(0);
  const [curentSlider, setCurentSlider] = useState(0)
  const [playLoop, setPlayLoop] = useState(false);

  const keyNext = useKeyPress("ArrowRight");
  const keyPrev = useKeyPress("ArrowLeft");
  const keySpace = useKeyPress("p")

  const playNext = () => {
    if (musicToPlay + 1 <= playList.length - 1) {
      const action = setMusicToPlay(musicToPlay + 1);
      dispatch(action);
    }
    else {
      const action = setMusicToPlay(0);
      dispatch(action);
    }
  }

  const playPrev = () => {
    // console.log("prev");
    if (musicToPlay - 1 >= 0) {
      const action = setMusicToPlay(musicToPlay - 1);
      dispatch(action);
    }
    else {
      const action = setMusicToPlay(playList.length - 1);
      dispatch(action);
    }
  }

  useEffect(() => {
    if (keyPrev) {
      playPrev()
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
    if (!playLoop) {
      playNext()
    }
    else {
      PlayNewAudio(playList[musicToPlay].link)
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

  const changeSlider = (value: number) => {
    currentTime.current = value
    setCurentSlider(value)
    Player.current.currentTime = value
  }

  let current: string
  if (Player.current !== null) {
    current = formatDuration(Player.current.duration + 1)
  }

  const playerLoop = () => {
    const loop = !playLoop
    setPlayLoop(loop);
  }

  const playPause = () => {
    const quay = !playing;
    const action = setPlaying(quay);
    dispatch(action);
  }
  return (
    <div className={styles.miniplayer_wraper}>
      <audio id="player" src={srcaudio} ref={Player} onEnded={endPlayMusic} onDurationChange={changeDuration}>

      </audio>
      <div className={styles.playcontrol}>
        <StepBackwardOutlined onClick={playPrev} />
      </div>
      <div className={styles.playcontrol} id={styles.playpause} onClick={playPause}>
        {playing ? <PauseOutlined className={styles.play} /> : <CaretRightFilled className={styles.pause} />}
      </div>
      <div className={styles.playcontrol}>
        <StepForwardFilled onClick={playNext} />
      </div>
      <div className={styles.loop}>
        <div className={styles.iconitem}>
          <SwapOutlined />
        </div>
        <div className={playLoop ? styles.selecPlayloop : styles.iconitem} onClick={playerLoop}>
          <RetweetOutlined />
        </div>
      </div>
      <div className={styles.imgSong}>
        <ImgSong size="S" data={playList[musicToPlay]}></ImgSong>
      </div>

      <div>
        <div className={styles.inforDuration}>
          <div style={{ color: "white" }}>{playList[musicToPlay].song} - {playList[musicToPlay].singer}</div>
          <div style={{ color: "white", marginRight: 5 }}>
            {formatDuration(curentSlider)}/{current !== "aN:aN" ? current : "00:00"}
          </div>
        </div>
        <div className={styles.Slidercontrol}>
          <Slider className={styles.slider} tooltipVisible={false} min={0} max={duration} value={curentSlider} onChange={changeSlider} />
        </div>
      </div>

    </div>
  );
}

export default MiniPlayer;