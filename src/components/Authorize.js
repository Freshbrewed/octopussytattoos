
const Authorize = () => {
    const clientID = '168993578335569'
    const redirectUri = 'https://ernoseppanen.com/'
    const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${clientID}&redirect_uri=${redirectUri}&scope=user_profile,user_media&response_type=code`

    window.location.href = authUrl
    return (
        null
    )
}

export default Authorize