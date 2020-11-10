import { useState, useReducer } from 'react'
import Router from 'next/router'
import { useUser } from '../lib/hooks'
import Layout from '../components/layout'
import Form from '../components/form'
import { getGatheringsData } from '../lib/gatherings'

import { Magic } from 'magic-sdk'

const Login = ({ dispatchInvites }) => {
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
        // save to useState
        dispatchInvites(gatheringsData)
        Router.push('/')
      } else {
        throw new Error(await res.text())
      }
    } catch (error) {
      console.error('An unexpected error happened occurred:', error)
      setErrorMsg(error.message)
    }
  }

  return (
    <>
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
    </>
  )
}

export default Login
