import { Carousel } from 'antd';
import React from 'react';


const CarouselSong: React.FC = () => {
  // const contentStyle = {
  //   height: "160px",
  //   color: "#fff",
  //   lineHeight: "160px",
  //   textAlign: "center",
  //   background: "#364d79"
  // };
  return (
    <div>
      <Carousel>
        <div>
          <h3 style={{ backgroundColor: "#ffff" }}>1</h3>
        </div>
        <div>
          <h3 style={{ backgroundColor: "#ffff" }}>2</h3>
        </div>
        <div>
          <h3 style={{ backgroundColor: "#ffff" }}>3</h3>
        </div>
        <div>
          <h3 style={{ backgroundColor: "#ffff" }}>4</h3>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselSong;