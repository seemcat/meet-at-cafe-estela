import { magic } from '../../lib/magic'
import { removeTokenCookie } from '../../lib/auth-cookies'
import { getSession } from '../../lib/iron'

// gets called when user logs out
export default async function logout(req, res) {
  console.log('hi there');
  const session = await getSession(req)
  await magic.users.logoutByIssuer(session.issuer)
  removeTokenCookie(res)
  res.writeHead(302, { Location: '/' })
  res.end()
}
