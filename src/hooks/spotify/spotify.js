/**
 * Task 
 * Fetch and display Released This Week songs
 * Use the API path new-releases
 * Fetch and display Featured Playlists
 * Use the API path featured-playlists
 * Fetch and display Browse genres
 * Use the API path categories
 * Loading state/UI (optional, current UX is already clean)
 *
 */

import config from "../../config";
import randomString from "../../utils/randomString";

const Spotify = {
    authentication: () => {
        let client_id = config.api.clientId;
        let redirect_uri = 'http://localhost:3000/callback';

        let state = randomString(16);
        let scope = 'user-read-private user-read-email';

        const params = {
            response_type: 'code',
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri,
            state: state
        }
        const queryString = new URLSearchParams(params).toString();
        let redirectUrl = 'https://accounts.spotify.com/authorize?'
        return {
            url : redirectUrl+queryString
        }
    },

    // getToken:(code) =>{
    //     const url = "https://accounts.spotify.com/api/token"
    //     const params = {
    //         code: code,
    //         redirect_uri: 'http://localhost:3000/token-callback',
    //         grant_type: 'authorization_code'
    //       }
    //     const headers = {
    //         Authorization
    //     }
    // }
}
export default Spotify