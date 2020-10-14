import '../styles/globals.css'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import React from 'react'

type Props = {
  Component: any,
  pageProps: any
}

const MyApp: React.FC<Props> = ({ Component, pageProps }: Props) => {
  return <Component {...pageProps} />
}

export default MyApp
