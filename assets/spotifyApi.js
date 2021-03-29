


const ClientID = '09707df81e82424b8a3d47ea13cbf055'
const ClientSecret = '75eeed0a6324480688391ccfa5f390f7' 

// const ClientAuthorization = 

const accessToken = {
    "access_token": "BQDV7c5DoU9087QlKegqjz5s5LZ2t9TqUB9dsVoMzOE1z--eNLyU0kqXyNfI_WyUFqPx7sllE2JBLiQYLCs",
    "token_type": "Bearer",
    "expires_in": 3600
}

const spotifyApi = {
    browsNewReleases: async () => {
        const config = {
            method:'GET',
            headers: {
                Authorization: `Bearer ${accessToken.access_token}`,
            }
        }
        const response = await fetch(
            'https://api.spotify.com/v1/browse/new-releases',
            config
            )

        console.log('response', response)
        return response.json()
    }
}

