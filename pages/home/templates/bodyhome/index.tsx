import React from 'react';
import PropTypes from 'prop-types';
import AD from '../../molecules/ad';
import styles from './body.module.scss'
import SlideShow from '../../organisms/slideshow';
import chart from './../../../../public/chart.png'
import Tending from '../../organisms/Tending';
import AlbumItem from '../../molecules/albumitem';
import Album from '../../organisms/Album';
import VideoHot from '../../organisms/videohot';
import ImgSong from '../../atoms/ImgSong';
import ListNhac from '../../organisms/listnhac';
import HotSinger from '../../organisms/hotsinger';
import HotTopic from '../../organisms/hottopic';
import TabSong from '../../organisms/tabsong';
import img from './../../../../public/img.png'
import TabMvItem from '../../atoms/tabmvitem';
import TabMV from '../../organisms/tabmv';
import MusicNews from '../../organisms/musicnews';
import DoiTac from '../../atoms/doitac';

const BodyHome: React.FC = (props) => {
  const datas = [
    {
      image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/9/9/6/c/996c529742d9f2101ef58790da95c27d.jpg",
      song: "Kẻ Tương Tư (Single)",
      singer: "Trung Tự",
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/3/7/6/d/376d5fc6957d3ca3b21eb67edc2aa02b.jpg",
      song: "Cô Ta (Single)",
      singer: "JK Dương Tiên"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/a/f/e/a/afea9e0d6bc78935da16cc148d62cd80.jpg",
      song: "Kẻ Điên Tin Vào Tình Yêu (Lofi Version)",
      singer: "Lil Zpoet"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/6/9/0/569028e5bc07eab1a20d0cae001e8f20.jpg",
      song: "Tình Sâu Đậm, Mưa Mịt Mù (Cover)(Single)",
      singer: "Juky San"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/9/b/2/0/9b209da47a5e85cf7701b04dd9664992.jpg",
      song: "Hãy Cho Anh Ngỏ Lời (Single)",
      singer: "Mai Tiến Dũng"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/a/2/1/5/a2153051765099db869499d209f85c81.jpg",
      song: "Đánh Mất Em (Gĩa Từ Biệt Ly) (Single)",
      singer: "Huy Vạc"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/c/5/6/6/c566d162bef8d7e7bac56a10e67ab8f9.jpg",
      song: "021 (Single)",
      singer: "Binz"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/3/2/2/3/32233fec314e9ca715a17a471946cc20.jpg",
      song: "Em Cần Một Người Quan Tâm (Single)",
      singer: "Liz Kim Cương"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/8/3/6/9/83690ac46c2ba7cf46b153e6226c974d.jpg",
      song: "Đánh Mất Em (Single)",
      singer: "Quang Đăng Trần"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/e/7/c/d/e7cd71a24091291a85e40062d78fb3b0.jpg",
      song: "Khác Biệt (Single)",
      singer: "Khắc Việt"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/4/3/9/e/439e0dfbf5db7f824e1dc46d4b027a29.jpg",
      song: "Chưa Hề Dừng Lại (Single)",
      singer: "Elly Trần"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/0/0/4/1/0041083628270504efdb6499396aacea.jpg",
      song: "THE ALBUM",
      singer: "BLACKPINK"
    }
  ];

  const listNhac1 = [
    {
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/f/9/9/2/f9923bfd4debb93b6dc03d5d087b22d7.jpg",
      song: "Ai Là Người Thương Em (Remix)",
      singer: "Quân A.P"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/d/0/f/f/d0ffc6c85c87a67a5d7f53470b43ead6.jpg",
      song: "Bé Ơi",
      singer: "ImD,Phú Quí,CM1X"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/d/9/8/2/d9825303a1a191f2cb6110ea1a125eb5.jpg",
      song: "Bông Hoa Lụi Tàn",
      singer: "Hiếu Adobe"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/e/4/1/5/e41575a5b197cdfbc8fed97523c3ab05.jpg",
      song: "Nếu Sớm Mai Là Hôm Nay",
      singer: "SoHo,Lena"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/5/9/c/d/59cdd58c8b01d41a23aaa550713af76d.jpg",
      song: "Nếu Em Hết Thương Rồi",
      singer: "Châu Khải Phong"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/f/5/f/f/f5ffd0d29aa8543610eef215e2bdadef.jpg",
      song: "Yêu Nhiều Ghen Nhiều",
      singer: "Thanh Hưng"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/6/5/b/a/65ba8ded0743d086ee4c756247115319.jpg",
      song: "Nắm",
      singer: "Minh Vương M4U,Hương Ly"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/6/f/f/3/6ff330930e726af162d634a749b2d4eb.jpg",
      song: "Hoa Vô Sắc",
      singer: "Jack,K-ICM"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/e/a/a/7/eaa7be597e6a5476336affd96ca5eab3.jpg",
      song: "Cô Đơn Không Muốn Về Nhà",
      singer: "Mr Siro"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/e/d/d/d/edddf61a159cfa5d21d80b22ae13fc8a.jpg",
      song: "Tết Đong Đầy 2",
      singer: "Khoa, Lăng LD"
    },
  ]

  const listNhac2 = [
    {
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/d/b/e/8/dbe89abc3cee4e3e94c51d92b3cdbf36.jpg",
      song: "Mùi Hương",
      singer: "Anh Khang"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/3/5/9/73597e0fc75c37fb0b076940e49cb5b7.jpg",
      song: "Thời Gian Của Anh Tình Yêu Của Anh",
      singer: "Liz Kim Cương,XAN,Ivone"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/9/4/c/d/94cd54613fc116d36ed15aed67e5fa25.jpg",
      song: "Anh Cờ-Rút Em",
      singer: "Tobby Quốc Trung"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/f/d/8/9/fd89ab2dc9aa84db95982e33591c983d.jpg",
      song: "Con Đi Nhé",
      singer: "Bùi Công Nam"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/a/f/e/a/afea9e0d6bc78935da16cc148d62cd80.jpg",
      song: "Kẻ Điên Tin Vào tình yêu",
      singer: "Lil Zpoet"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/c/5/6/6/c566d162bef8d7e7bac56a10e67ab8f9.jpg",
      song: "021",
      singer: "Binz"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/6/7/e/b/67eb16b0be3edfa59bb9906f91e178b7.jpg",
      song: "Kẻ Tương Tư",
      singer: "Trung Tự"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/3/7/6/d/376d5fc6957d3ca3b21eb67edc2aa02b.jpg",
      song: "Cô Ta",
      singer: "JK Dương Tiên"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/4/0/e/5/40e5c0ea6d8276feb5e8338d0fcfaff9.jpg",
      song: "Thời Gian Xóa Vết Thương",
      singer: "Anh Hảo"
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/a/2/f/2/a2f295a0957586ce47d17b20c4218b92.jpg",
      song: "Nổi Buồn Đáy Tim",
      singer: "Sunny Đan Ngọc"
    },
  ]

  const tabMV = [
    {
      rank: 1,
      image: "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/a/6/2/9/a62907bcb56701101dba260f40b8267f.jpg",
      song: "Quang Đăng Trần",
      singer: "Đánh Mất Em",
      watch: 4273
    },
    {
      rank: 2,
      image: "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/a/6/2/9/a62907bcb56701101dba260f40b8267f.jpg",
      song: "Chẳng Thể Giữ Lấy Chằng Đành Buông Tay",
      singer: "Ngô Kiến Huy",
      watch: 4086
    },
    {
      rank: 3,
      image: "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/c/a/9/0/ca9053bbf35dccd8d8638399d2ab213c.jpg",
      song: "Em Cần Một Người Quang Tâm",
      singer: "Liz Kim Cương",
      watch: 3900
    },
    {
      rank: 4,
      image: "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/7/3/7/9/7379380330e0e795ce61bba271400506.jpg",
      song: "Bỏ Lỡ Một Người",
      singer: "Lê Bảo Bình",
      watch: 3713
    },
    {
      rank: 5,
      image: "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/8/4/3/4/843423fbd068afb04396eacecd7bd488.jpg",
      song: "Làm Gói Đỡ Thèm",
      singer: "Trúc Nhân",
      watch: 3527
    }
  ]

  const tabAlbum = [
    {
      rank: 1,
      image: "https://photo-zmp3.zadn.vn/banner/8/e/f/6/8ef6b4cb6ff700942bf050b584bb7171.jpg",
      song: "Khổ Lắm Anh Ơi",
      singer: "Dương Hồng Loan",
      watch: 4942
    },
    {
      rank: 2,
      image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/c/6/f/1/c6f189d778043bbc256dfc2d41d464a6.jpg",
      song: "Đứa Con Tội Lỗi",
      singer: "Chí Thành Danh",
      watch: 4685
    },
    {
      rank: 3,
      image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/e/f/8/c/ef8c84a6e9d1144f53b10d950e0ee584.jpg",
      song: "Nhạc Cưới Hay Nhất",
      singer: "",
      watch: 4428
    },
    {
      rank: 4,
      image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/b/6/3/3/b633196be30da9a5514a4339f9414649.jpg",
      song: "Tuyển Tập Liên Khúc Lưu Ánh Loan",
      singer: "Lưu Ánh Loan",
      watch: 4171
    },
    {
      rank: 5,
      image: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/1/0/e/9/10e906d78a23a9b30b5c3375ba390821.jpg",
      song: "Album Lưu Ánh Loan",
      singer: "Lưu Ánh Loan",
      watch: 3914
    },
  ]
  return (
    <div>
      <AD></AD>

      <div className={styles.bodyContent1}>
        <div className={styles.leftContent}>
          <div>
            <SlideShow></SlideShow>
            <img src={chart} style={{ width: "100%" }}>
            </img>
            <Tending></Tending>
            <Album title="NIỀM VUI MỖI NGÀY" datas={datas}></Album>
            <VideoHot></VideoHot>
            <Album title="ALBUM HOT" icon=">" datas={datas}></Album>

            <div className={styles.hotSong}>
              <ListNhac datas={listNhac1} key={1}></ListNhac>
              <div className={styles.verticalline}></div>
              <ListNhac datas={listNhac2} key={2}></ListNhac>
            </div>

            <div style={{ marginTop: 20 }}>
              <HotSinger></HotSinger>
            </div>
          </div>
        </div>

        <div className={styles.rightContent}>
          <img src={img}></img>
          <HotTopic></HotTopic>
          <TabSong></TabSong>
          <TabMV sizeimage="Smallrectangle" data={tabMV}></TabMV>
          <TabMV sizeimage="L" data={tabAlbum}></TabMV>
          <MusicNews></MusicNews>
        </div>

      </div>

      <DoiTac></DoiTac>
    </div>
  );
}

export default BodyHome;