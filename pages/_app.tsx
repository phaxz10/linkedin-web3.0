import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'
import ReactTooltip from 'react-tooltip'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      serverUrl={process.env.MORALIS_SERVER!}
      appId={process.env.MORALIS_APPID!}
    >
      <Component {...pageProps} />
      <ReactTooltip />
      <ToastContainer />
    </MoralisProvider>
  )
}

export default MyApp
