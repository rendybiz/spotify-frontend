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

import { useState, useEffect } from "react";
import config from "../../config";
import store from "../../store/store";
import randomString from "../../utils/randomString";

export const useGetToken = (authCode, authState) => {
    const [resp, setResp] = useState(null)


    const params = {
        code: authCode,
        state: authState
    }
    const queryString = new URLSearchParams(params).toString();

    useEffect(() => {
        const token = store.get('token');
        setResp(token);
        if (!token) {
            let redirectUrl = 'http://localhost:3001/callback?' + queryString
            fetch(redirectUrl).then(async (response) => {
                if (response.status < 300) {
                    const tokenResult = await response.json();
                    console.log("get result new token", tokenResult)
                    store.save("token", {token: tokenResult.access_token, refresh: tokenResult.refresh_token})
                    setResp(tokenResult.access_token)
                }
                // console.log("response", resp);
            }).catch((e) => {
                console.log("error", e)
            })
        }
    }, [])

    return resp;
}

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
