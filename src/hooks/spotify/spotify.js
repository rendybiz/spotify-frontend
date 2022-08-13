/**
 * The Functions below is to handle some public consumsion for users
 *
 */

import config from "../../config";
import randomString from "../../utils/randomString";

const OUR_HOST = process.env.OUR_HOST || "http://localhost:3000"
const Spotify = {
    /**
     * The Authentication to Spotify Login Url, it used 
     * for redirecting page to Spotify Login site Page
     * @returns Object {url: <url_link>}
     */
    authentication: () => {
        let client_id = config.api.clientId;
        let redirect_uri = OUR_HOST + '/callback';

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
            url: redirectUrl + queryString
        }
    },
}
export default Spotify