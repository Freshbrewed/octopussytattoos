import axios from 'axios'
import env from 'react-dotenv'

const getUserNode =  async () => {
    const response = await axios.get(`https://graph.instagram.com/${env.USER_ID}?fields=id,username&access_token=${env.ACCESS_TOKEN}`)
    return response.data
}

export default { getUserNode }