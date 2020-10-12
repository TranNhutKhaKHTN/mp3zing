import React from 'react';
import PropTypes from 'prop-types';
import GrIconPlayMusic from './../../atoms/griconplaymusic'
import LineMusicPlay from '../../molecules/linemusicplay';
import ListLinePlayMusic from '../../organisms/listlineplaymusic';
import ListCardSinger from '../../organisms/listcardsinger';
import BoxSlide from '../../organisms/boxslide';

const RightContentPlaymusic: React.FC = (props) => {

  const datalinemusic = [
    {
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/a/8/6/2/a8626a5671f5a01250a074c4c8140cae.jpg",
      song: "Hoa Hải Đường",
      singer: "Jack",
      rank: 1
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/c/c/7/0/cc709844d6aa6d3bf943bb91cf7ba662.jpg",
      song: "Họa Mây (Cố Gian Tình 2)",
      singer: "X2X",
      rank: 2
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/0/1/5/1/0151bcc5dc64312a9b6d9d2245aab54c.jpg",
      song: "Ai Mang Cô Đơn Đi",
      singer: "K-ICM, APJ",
      rank: 3
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/9/e/b/7/9eb73a8fb45aba1b72c816cff2799ce3.jpg",
      song: "Sầu Hồng Gai",
      singer: "G5R Squad",
      rank: 4
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/8/3/6/9/83690ac46c2ba7cf46b153e6226c974d.jpg",
      song: "Đánh Mất Em",
      singer: "Quang Đăng Trần",
      rank: 5
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/f/8/1/e/f81efd92fa9a3d52eb37f3b867ab9d32.jpg",
      song: "Bông Hoa Đẹp Nhất",
      singer: "Quân A.P",
      rank: 6
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/b/0/f/2/b0f2617eac4b87fd0affe726bfd81a0a.jpg",
      song: "Bỏ Lỡ Một Người",
      singer: "Lê Bảo Bình",
      rank: 7
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/4/9/b/749ba06d29317d07bdbd2617808b8a7f.jpg",
      song: "Khác Biệt To Lớn",
      singer: "Trịnh Thăng Bình, Liz Kim Cương",
      rank: 8
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/f/e/e/b/feebaec84a211ff8c46a2d803f7a646c.jpg",
      song: "Chắc Vì Mình Chưa Tốt",
      singer: "Thanh Hưng",
      rank: 9
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/5/a/5/1/5a5164496ababbca1496193ec8b8afb1.jpg",
      song: "Bigcityboy",
      singer: "Binz, Touliver",
      rank: 10
    },
  ]

  return (
    <div>
      <ListLinePlayMusic data={datalinemusic}></ListLinePlayMusic>
      <ListCardSinger></ListCardSinger>
      <BoxSlide></BoxSlide>
    </div>
  );
}

export default RightContentPlaymusic;