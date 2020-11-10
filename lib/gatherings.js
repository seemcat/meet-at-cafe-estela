export async function getGatheringsData(jwtToken) {
  console.log('BEARER TOKEN: ', jwtToken)
  const strapiBackendUrl = 'https://meet-at-cafe-estela.wl.r.appspot.com/invites'
  const res = await fetch(strapiBackendUrl,
  {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwtToken}`
    }
  })
  const data = await res.json()
  console.log('data: ', data)
  return data
}
