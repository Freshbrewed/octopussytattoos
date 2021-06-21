import axios from 'axios'

const getUserNode = async (userID, accessToken) => {
    const response = await axios.get(`https://graph.instagram.com/${userID}?fields=id,username,account_type,media_count&access_token=${accessToken}`)
    return response.data
}

const refreshLongToken = async (accessToken) => {
    const response = await axios.get(`https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${accessToken}`)
    return response.data
}
/* TODO Proper backend if needed
const  shortToken = null
const code = null

const getShortToken = async () => {
    const payload = {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: 'authorization_code',
        redirect_uri: REDIRECT_URI,
        code: code
    }
    const response = await axios.post('https://api.instagram.com/oauth/authorize', payload)
    return response.data
}

const getLongToken = async () => {
    const response = await axios.get(`https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=${CLIENT_SECRET}&access_token=${shortToken}`)
    return response.data
}


}*/

export default { getUserNode, refreshLongToken }