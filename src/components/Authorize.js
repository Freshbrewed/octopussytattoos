
const Authorize = () => {
    const authUrl = 'https://api.instagram.com/oauth/authorize?client_id=168993578335569&redirect_uri=localhost:3000/authorize&scope=user_profile,user_media&response_type=code'

    window.location.href = authUrl
    return (
        null
    )
}

export default Authorize