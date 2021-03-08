import axios from 'axios'
import env from 'react-dotenv'

const shortToken = null

const getUserNode =  async () => {
    const response = await axios.get(`https://graph.instagram.com/${env.USER_ID}?fields=id,username&access_token=${env.ACCESS_TOKEN}`)
    return response.data
}

/* todo
const getShortToken = async () => {
    https://api.instagram.com/oauth/authorize
  ?client_id={instagram-app-id}
  &redirect_uri={redirect-uri}
  &scope={scope}
  &response_type=code
  &state={state}        //Optional
}*/

const getLongToken = async () => {
    const response = await axios.get(`https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=${env.CLIENT_SECRET}&access_token=${shortToken}`)
    return response.data
}

const refreshLongToken = async () => {
    const response = await axios.get(`https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${env.ACCESS_TOKEN}`)
    return response.data
}

export default { getUserNode, refreshLongToken, getLongToken }