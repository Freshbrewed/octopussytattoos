import axios from 'axios'

const getAllMedia = async (userID, accessToken) => {
    const fields = 'caption,media_type,media_url,permalink,thumbnail_url,timestamp'
    const response = await axios.get(`https://graph.instagram.com/${userID}/media?fields=${fields}&access_token=${accessToken}`)
    return response.data
}

const getDataByID = async (mediaID, accessToken) => {
    const fields = 'caption,media_type,media_url,permalink,thumbnail_url,timestamp'
    const response = await axios.get(`https://graph.instagram.com/${mediaID}?fields=${fields}&access_token=${accessToken}`)
    return response.data
}
export default { getAllMedia, getDataByID }