// import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Loading from '../containers/loading'
// import styles from '../styles/Home.module.css'

const Home: React.FC = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/home")
  })
  return (
    <div>
      <Loading />
    </div>
  )
}
export default Home
