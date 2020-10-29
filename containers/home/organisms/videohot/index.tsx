import React from 'react';
import VideoHotItem from '@containers/home/molecules/videohotItem';
import styles from './videohot.module.scss'
import { RightOutlined } from '@ant-design/icons'


const VideoHot: React.FC = () => {
  const datas = [
    {
      image: "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/1/5/0/c/150c5e9c3780177b3f5f34d24d3903e4.jpg",
      song: "Đánh Mất Em",
      singer: "Quang Đăng Trần",
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/c/a/9/0/ca9053bbf35dccd8d8638399d2ab213c.jpg",
      song: "Em Cần Một Người Quan Tâm",
      singer: "Liz Kim Cương",
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/1/1/d/d/11ddc1cfe351d8a5169a330b781819c0.jpg",
      song: "Khẽ Thôi Em",
      singer: "GiGun",
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/2/7/e/a/27ead6f31ed3023a6b6a239ff263ff0b.jpg",
      song: "Sao Người Ta Nỡ Làm Mình Đau",
      singer: "Gil Lê",
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/9/7/c/2/97c26cf234609072e4003d5174d03d3d.jpg",
      song: "Bạn Cấp 3",
      singer: "Gil Lê",
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/e/e/1/a/ee1a2c82d6602037b3b6078e2b293c43.jpg",
      song: "Mình Đi Cùng Nhau",
      singer: "K-ICM, APJ",
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/a/5/e/9/a5e9a45eb6e000b91f3407530789ade4.jpg",
      song: "Missing You",
      singer: "Phương Ly, TINLE",
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/7/3/7/9/7379380330e0e795ce61bba271400506.jpg",
      song: "Bỏ Lỡ Một Người",
      singer: "Lê Bảo Bình",
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/9/1/3/1/91314b0cff8fe7da096cc150d7fda169.jpg",
      song: "Cô Rô Na Tránh Ra Nha",
      singer: "Nhiều nghệ sĩ",
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/a/3/1/3/a313c7769b424050481bc27cd6e1908a.jpg",
      song: "Ngày Trở Về Hạnh Phúc",
      singer: "Hồ Nhật Huy",
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/e/c/d/d/ecdd9bb28784b1423e27e7224dee8aaf.jpg",
      song: "Chúng Ta Phải Lòng Nhau Chưa",
      singer: "Alex Dương, ERIK",
    },
    {
      image: "https://photo-resize-zmp3.zadn.vn/w240_r16x9_jpeg/thumb_video/3/4/d/0/34d0ae605e84ed2b31d96ed4b7e1e15a.jpg",
      song: "Về Gặp Nhau Một Lần",
      singer: "T-Pame",
    }
  ]

  const listVideo = datas.map((data, index) => {
    return (
      <VideoHotItem key={index} data={data} />
    )
  })
  return (
    <div className={styles.videohot}>
      <div className={styles.title}>
        VIDEO HOT
        <RightOutlined />
      </div>
      <div className={styles.videohotitems}>
        {listVideo}
      </div>
    </div>
  );
}

export default VideoHot;