import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Loading from '../containers/loading'

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
