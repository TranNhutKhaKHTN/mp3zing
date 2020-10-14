import '../styles/globals.css'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import React from 'react'
import { Provider } from 'react-redux'
import store from './../store'

type Props = {
  Component: any,
  pageProps: any
}

const MyApp: React.FC<Props> = ({ Component, pageProps }: Props) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
