import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
/* check */
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { useUser } from '../lib/hooks'
import Login from "../pages/login"
import React, { useReducer, useEffect } from "react"
import { reducer, getInvites } from "../src/reducer"
import GatheringsComponent from "../src/gatherings-component"

export default function Home() {
  const [state, dispatch] = useReducer(reducer, reducer())
  const dispatchInvites = (invites) => dispatch(getInvites(invites))

  const user = useUser()
  console.log('USER IN HOME: ', user)
  return (
    <Layout home invites={state.invites}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
         <p>Cafe Estela is where we meet to be inspired to act on and continue acting on our dreams.</p>
       </section>
       {user || state.invites.length > 0 ? <GatheringsComponent invites={state.invites}/> : <Login dispatchInvites={dispatchInvites}/>}
    </Layout>
  )
}
