import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../styles/Home.module.css'

export default function Past() {
  return (
  <Layout>
  <Head>
  <title>Upcoming Gatherings</title>
  </Head>
    <h1>Past Gatherings</h1>
    <div className={styles.grid}>
      <a href="https://nextjs.org/docs" className={styles.card}>
        <h3>Meet Our Founder</h3>
        <p>Come chat with the founder of Cafe Estela, Maricris Bonzo!</p>
      </a>

      <a href="https://nextjs.org/learn" className={styles.card}>
        <h3>Gathering Consciously</h3>
        <p>Come learn how to gather consciously so that we can deepen our relationships with others.</p>
      </a>

    </div>
  </Layout>
)
}
