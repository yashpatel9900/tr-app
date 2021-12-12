import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <p>Enter a Name :</p>
      <input 
        type="text">

        </input>
        <button>
          Submit
        </button>
    </div>
  )
}

export default Home
