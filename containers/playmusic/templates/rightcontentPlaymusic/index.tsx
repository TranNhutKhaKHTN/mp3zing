import React from 'react';
import ListLinePlayMusic from '../../organisms/listlineplaymusic';
import ListCardSinger from '../../organisms/listcardsinger';
import BoxSlide from '../../organisms/boxslide';

const RightContentPlaymusic: React.FC = () => {

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

  const dataCardsinger = [
    {
      image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/c/1/4/0/c140ebb6799391799b29a8eabae217f5.jpg",
      care: 101,
      singer: "Đạt G"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/9/c/e/6/9ce68f7d32102e37837bf3d87c82895c.jpg",
      care: 81,
      singer: "B Ray"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/8/4/84ffbc3c35a04d698f157a129e68d51a_1499686528.jpg",
      care: 77,
      singer: "Khắc Việt"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/a/3/3/c/a33cb5d2cb3d43a2854c6377ce21d3a7.jpg",
      care: 77,
      singer: "Hòa Minzy"
    }
  ]

  const databoxslide = [
    {
      image: "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/0/b/5/b/0b5b01aacf59238e378c87329363062c.jpg",
      title: "Nhạc Trữ Tình Remix"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/e/f/2/c/ef2c26ac46d060be57748c6acfbe1b06.jpg",
      title: "Sến Remix"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/9/0/6/c/906c05e4a8efd526b5938f3b39ec7e66.jpg",
      title: "Nhạc Trữ Tính Sôi Động"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/5/5/d/f/55df6ee22b76f326f9cbeb70c0cb7aa8.jpg",
      title: "Bolero Remix"
    }
  ]
  return (
    <div>
      <ListLinePlayMusic data={datalinemusic}></ListLinePlayMusic>
      <ListCardSinger data={dataCardsinger}></ListCardSinger>
      <BoxSlide data={databoxslide} title="Có Thể Bạn Quan Tâm"></BoxSlide>
      <BoxSlide data={databoxslide} title="Nhạc Trẻ"></BoxSlide>
      <BoxSlide data={databoxslide} title="V-pop"></BoxSlide>
    </div>
  );
}

export default RightContentPlaymusic;