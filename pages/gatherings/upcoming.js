import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../styles/Home.module.css'

export default function Upcoming(props) {
  console.log('props: ', props)
  return (
  <Layout>
  <Head>
  <title>Upcoming Gatherings</title>
  </Head>
    <h1>Upcoming Gatherings</h1>
    <div className={styles.grid}>
      <a href="https://nextjs.org/docs" className={styles.card}>
        <h3>The First Gathering &rarr;</h3>
        <p>Meet the founder and the first members.</p>
      </a>

      <a href="https://nextjs.org/learn" className={styles.card}>
        <h3>A.H. #2</h3>
        <p>Reconnect with both yourself and others.</p>
      </a>

      <a
        href="https://github.com/vercel/next.js/tree/master/examples"
        className={styles.card}
      >
        <h3>Women of Color Investors</h3>
        <p>Are you a Bi-POC who is new to investing? This this the event for you.</p>
      </a>

      <a
        href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className={styles.card}
      >
        <h3>Happy Hour with Female Founders</h3>
        <p>
          Come have meaningful conversations with powerful female founders.
        </p>
      </a>
    </div>
  </Layout>
)
}
