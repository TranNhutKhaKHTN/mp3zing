import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Header from '../../containers/home/templates/header';
import styles from './playmusic.module.scss'
import Footer from '../../containers/home/templates/footer';
import BodyPlay from './../../containers/playmusic/templates/bodyPlay';
import Loading from '../../containers/loading';
import { addCardSinger, addDataBoxMusic, addPlayList, fetchSuccess } from './../../redux/actions/playmusic';
import MiniPlayer from '../../containers/playmusic/templates/miniplayer';
import { GetStaticProps } from 'next';

import Axios from 'axios';
type Props = {
  dataplaylist?: any,
  databoxmusic?: any,
  datacardsinger?: any
}

const PlayMusic: React.FC<Props> = (props: Props) => {
  const loading = useSelector((state: any) => state.playmusic.loading)

  const dispatch = useDispatch();

  useEffect(() => {
    if (props) {
      // console.log(props.dataplaylist);
      const action1 = addPlayList(props.dataplaylist)
      const action2 = addCardSinger(props.datacardsinger)
      const action3 = addDataBoxMusic(props.databoxmusic)
      const action4 = fetchSuccess();

      dispatch(action1)
      dispatch(action2)
      dispatch(action3)
      dispatch(action4)
    }
  }, [])

  const page = (<div>
    <Header />
    <div className={styles.body}>
      <div className={styles.bodyContent}>
        <BodyPlay />
      </div>
    </div>
    <div style={{ marginBottom: 70 }}>
      <Footer />
    </div>
    <MiniPlayer />
  </div>)
  return (
    <div>
      {loading ? <Loading></Loading> : page}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await Promise.all([
    Axios.get("http://localhost:5000/getplaylist"),
    Axios.get("http://localhost:5000/getboxmusic"),
    Axios.get("http://localhost:5000/getcardsinger")
  ]).then((results) => {
    return results
  })
    .catch(error => {
      console.log(error);
      console.log("error");
    })

  console.log(data[0].data.data);
  const dataplaylist = data[0].data.data;
  const databoxmusic = data[1].data.data;
  const datacardsinger = data[2].data.data

  return {
    props: {
      dataplaylist,
      databoxmusic,
      datacardsinger
    }
  }
}

export default PlayMusic;