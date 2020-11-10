import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
/* check */
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { useUser } from '../lib/hooks' /* tells us whether or not the user is logged in */

export default function Profile() {
  const user = useUser({ redirectTo: '/login' })

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
         <p>Cafe Estela is where we meet to be inspired to act on and continue acting on our dreams.</p>
       </section>
       {user && (
         <>
           <p>Your session:</p>
           <pre>{JSON.stringify(user, null, 2)}</pre>
         </>
       )}
    </Layout>
  )
}
