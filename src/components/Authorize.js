import env from 'react-dotenv'

const Authorize = () => {
    const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${env.CLIENT_ID}&redirect_uri=${env.REDIRECT_URI}&scope=user_profile,user_media&response_type=code`

    window.location.href = authUrl
    return (
        null
    )
}

export default Authorize