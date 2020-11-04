import { CaretRightFilled, PauseOutlined, RetweetOutlined, StepBackwardOutlined, StepForwardFilled, SwapOutlined } from '@ant-design/icons';
import { Slider } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setMusicToPlay, setPlaying } from '@redux/actions/playmusic';
import ImgSong from '@containers/home/atoms/ImgSong';
import { useKeyPress } from '@containers/hooks/useKeyPress';
import styles from './miniplayer.module.scss'

// const srcaudio = "https://cdns-preview-1.dzcdn.net/stream/c-13039fed16a173733f227b0bec631034-12.mp3";
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
  const checkdrag = useSelector((state: any) => state.playmusic.checkdrag)

  const [duration, setDuration] = useState(100);
  const currentTime = useRef(0);
  const [curentSlider, setCurentSlider] = useState(0)
  const [playLoop, setPlayLoop] = useState(false);
  const [playRandom, setPlayRanDom] = useState(false)

  const keyNext = useKeyPress("ArrowRight");
  const keyPrev = useKeyPress("ArrowLeft");
  const keySpace = useKeyPress("Shift")

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
    Player.current.load();
    const action = setPlaying(false);
    dispatch(action)
  }, [])

  useEffect(() => {
    if (keyPrev) {
      playPrev()
    }
  }, [keyPrev])

  useEffect(() => {
    if (keyNext) {
      playNext()
    }
  }, [keyNext])

  useEffect(() => {
    if (keySpace) {
      const action = setPlaying(!playing);
      dispatch(action)
    }
  }, [keySpace])

  useEffect(() => {
    if (playing) {
      Player.current.play();
      Player.current.currentTime = currentTime.current
    }
    else {
      Player.current.pause();
    }
  }, [playing])

  useEffect(() => {
    if (musicToPlay != null && playing) {
      if (!checkdrag) {
        PlayNewAudio(playList[musicToPlay].link)
      }
    }
  }, [musicToPlay, checkdrag])

  //<> hàm play một bài mới
  const PlayNewAudio = (src: string) => {
    Player.current.currentTime = 0;
    Player.current.src = src
    Player.current.load();
    Player.current.play();
    currentTime.current = 0;
    // Player.current.currentTime = 0;
    setCurentSlider(0)
  }
  //</>

  //<> hàm bắt sự kiện kết thúc bài hát
  const endPlayMusic = () => {
    if (!playLoop) {

      if (playRandom) {
        const n = playList.length;
        let i: number
        i = Math.floor(Math.random() * n);
        while (i === musicToPlay) {
          i = Math.floor(Math.random() * n)
        }
        const action = setMusicToPlay(i);
        dispatch(action)
        return
      }
      playNext()
    }
    else {
      PlayNewAudio(playList[musicToPlay].link)
      return;
    }
  }
  //</>

  const changeDuration = () => {
    const duration = Player.current.duration;
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
    setPlayRanDom(!loop)
  }

  const playPause = () => {
    const quay = !playing;
    const action = setPlaying(quay);
    dispatch(action);
  }

  const onPlayRandom = () => {
    const random = playRandom
    setPlayRanDom(!random)
    setPlayLoop(random)
  }

  return (
    <div className={styles.miniplayer_wraper}>
      <audio id="player" src={playing ? playList[musicToPlay].link : null} ref={Player} onEnded={endPlayMusic} onDurationChange={changeDuration}>
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
        <div className={playRandom ? styles.selecPlayloop : styles.iconitem} onClick={onPlayRandom}>
          <SwapOutlined />
        </div>
        <div className={playLoop ? styles.selecPlayloop : styles.iconitem} onClick={playerLoop}>
          <RetweetOutlined />
        </div>
      </div>
      <div className={styles.imgSong}>
        <ImgSong size="S" data={playList[musicToPlay]} />
      </div>

      <div>
        <div className={styles.inforDuration}>
          <div style={{ color: "white" }}>{musicToPlay != null ? `${playList[musicToPlay].song} - ${playList[musicToPlay].singer}` : null}</div>
          <div style={{ color: "white", marginRight: 5 }}>
            {formatDuration(curentSlider)}/{current !== "aN:aN" ? current : "00:00"}
          </div>
        </div>
        <div className={styles.Slidercontrol}>
          <Slider className={styles.slider} step={0.1} tooltipVisible={false} min={0} max={duration} value={curentSlider} onChange={changeSlider} />
        </div>
      </div>

    </div>
  );
}

export default MiniPlayer;