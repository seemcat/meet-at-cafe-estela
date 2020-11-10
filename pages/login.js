import { useState } from 'react'
import Router from 'next/router'
import { useUser } from '../lib/hooks'
import Form from '../components/form'
import { getGatheringsData } from '../lib/gatherings'
import Layout, { siteTitle } from '../components/layout'
import Head from 'next/head'

import { Magic } from 'magic-sdk'

const Login = () => {
  //console.log("dispatchJwtToken: ", getJwtToken('test'));
  useUser({ redirectTo: '/', redirectIfFound: true })

  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e) {
    event.preventDefault()

    if (errorMsg) setErrorMsg('')

    const body = {
      email: e.currentTarget.email.value,
    }

    try {
      const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY)
      const didToken = await magic.auth.loginWithMagicLink({
        email: body.email,
      })
      console.log('RESPONSE WHEN LOGGING IN: ', didToken);
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + didToken,
        },
        body: JSON.stringify(body),
      })
      if (res.status === 200) {
        console.log('SUCCESSFUL LOGIN')
        // calling strapi api
        const gatheringsData = await getGatheringsData(didToken)
        console.log('GATHERING DATA: ', gatheringsData)
        Router.push({
          pathname: '/',
          query: { data: JSON.stringify(gatheringsData) }
        })
      } else {
        throw new Error(await res.text())
      }
    } catch (error) {
      console.error('An unexpected error happened occurred:', error)
      setErrorMsg(error.message)
    }
  }

  return (
    <Layout>
    <Head>
      <title>{siteTitle}</title>
    </Head>
      <div className="login">
        <Form errorMessage={errorMsg} onSubmit={handleSubmit} />
      </div>
      <style jsx>{`
        .login {
          max-width: 21rem;
          margin: 0 auto;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
      `}</style>
    </Layout>
  )
}

export default Login
