import '../styles/globals.css'
import Layout from '../components/Layout/Layout';
import type { AppProps } from 'next/app'

function MyApp({ Component }: AppProps) {
  return (
      <Layout>
        <Component/>
      </Layout>
  )
}

export default MyApp
