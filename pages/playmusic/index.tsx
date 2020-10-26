import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Header from '../../containers/home/templates/header';
import styles from './playmusic.module.scss'
import Footer from '../../containers/home/templates/footer';
import BodyPlay from './../../containers/playmusic/templates/bodyPlay';
import Loading from '../../containers/loading';
import { fetchDataPlayMusic } from './../../redux/actions/playmusic';
import MiniPlayer from '../../containers/playmusic/templates/miniplayer';

const PlayMusic: React.FC = () => {
  const loading = useSelector((state: any) => state.playmusic.loading)
  // const [loaded,setLoaded] =useState(false);
  // useEffect(()=>{
  //   setLoaded(true);
  // },[loading])
  const dispatch = useDispatch();

  useEffect(() => {
    const action = fetchDataPlayMusic()
    dispatch(action)
  }, [])

  const page = (<div>
    <Header />
    <div className={styles.body}>
      <div className={styles.bodyContent}>
        <BodyPlay />
      </div>
    </div>
    <Footer />
    <MiniPlayer />
  </div>)
  return (
    <div>
      {loading ? <Loading></Loading> : page}
    </div>
  );
}

export default PlayMusic;