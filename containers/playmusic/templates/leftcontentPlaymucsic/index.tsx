import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setPlaying } from "@redux/actions/playmusic"
import ImgSong from '@containers/home/atoms/ImgSong';
import { CaretRightOutlined, PauseOutlined, EllipsisOutlined, HeartOutlined } from "@ant-design/icons"
import styles from './leftcontent.module.scss'
const dataleftcontent = {
  image: "https://photo-playlist-zmp3.zadn.vn/radio?src=HavwqN7EzbiAHZUTDj-sJ40CDyesrRORLmWgdM_MiXe7ModBRe6rJWSBAybgWx4Q2rahcZ7Ju0G2I2cMTu7pGrOUVyajlRuOL1xn4gwSVsPdiM4tXSUXu29z&size=thumb/240_240"
}

const LeftContentPlayMucsic: React.FC = () => {
  // const [roll, setRoll] = useState(false);
  const roll = useSelector((state: any) => state.playmusic.playing)
  const dispatch = useDispatch()

  const clickPlayMusic = () => {
    const quay = !roll;
    const action = setPlaying(quay);
    console.log(action);
    dispatch(action);
  }

  return (
    <div className={styles.content}>
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