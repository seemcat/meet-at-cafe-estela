import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { useUser } from '../lib/hooks'
import GatheringsComponent from "../components/gatherings"
import { withRouter } from 'next/router'

function Home({router}) {
  const invites = router.query.data ? JSON.parse(router.query.data) : [];
  const user = useUser()
  console.log('USER IN HOME: ', user)
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
         <p>Cafe Estela is where we meet to be inspired to act on and continue acting on our dreams.</p>
       </section>
       {user && <GatheringsComponent invites={invites}/>}
    </Layout>
  )
}

export default withRouter(Home)
