import axios from 'axios'

const callGetAPI = (url) => {
  const data = axios.get(url)
    .then((res) => {
      return res.data
    })
    .catch(error => {
      throw error
    })
  return data;
}

// const callPostAPI=(url)=>{
//   const data = axios.post(url)
//     .then((res) => {
//       return res.data
//     })
//     .catch(error => {
//       throw error
//     })
//   return data;
// }

export const getPlayList = () => {
  return callGetAPI('/api/getListPlay')
}

export const getListCardSinger = () => {
  return callGetAPI("/api/getListCardSinger");
}