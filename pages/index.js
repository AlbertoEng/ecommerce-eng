
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Appbar from '../components/Appbar'
import Main from '../components/Main'



export default function Home() {
  return (
    <Layout>
        <div className='containerPage'>
          <Appbar />
          <Main />
        </div>
    </Layout>
  )
}
