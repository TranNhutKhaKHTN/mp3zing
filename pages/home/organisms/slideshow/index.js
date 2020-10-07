import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './slideshow.module.scss'

SlideShow.propTypes = {

};

function SlideShow(props) {

  const listImage = [
    "https://photo-zmp3.zadn.vn/banner/7/5/2/0/7520588a96c8fca8a543443bbf606682.jpg",
    "https://photo-zmp3.zadn.vn/banner/1/4/c/a/14ca17f0ac5801f173498b8a0cb6f69a.jpg",
    "https://photo-zmp3.zadn.vn/banner/1/1/3/1/113116d228e44ea3cce4191f345dc283.jpg",
    "https://photo-zmp3.zadn.vn/banner/b/2/5/9/b25945f67c2df37cd3c8cc68a727c422.jpg",
    "https://photo-zmp3.zadn.vn/banner/5/1/c/a/51ca1aa34aca7e156046f6d0fa67902d.jpg"
  ]
  const cpListImage = listImage.map((data, index) => {
    return <img src={data} key={index} onMouseOver={() => handlerHover(index)}></img>
  })

  const curentIndex = useRef(1);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const loop = setInterval(() => {
      // const i = curentIndex + 1;
      const i = curentIndex.current + 1;
      if (i < 5 && i >= 0) {
        setIndex(i)
        curentIndex.current = i
        // console.log(i)
      }
      else {
        setIndex(0)
        curentIndex.current = 0;
      }
    }, 2000);
    return () => clearInterval(loop);
  }, [index]);

  const handlerHover = (index) => {
    setIndex(index)
  }

  return (
    <div className={styles.slideshow}>
      <img id={styles.imageSelect} src={listImage[index]} ></img>
      <div className={styles.imageItems}>
        {cpListImage}
      </div>
    </div>
  );
}

export default SlideShow;