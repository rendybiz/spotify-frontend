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
import logout from "../../utils/logout";
const API_HOST = process.env.SPOTIFY_API_HOST || "https://api.spotify.com"
const setTokenHeader = (token) => {
    return {
        'Authorization': "Bearer " + token,
        'Accept': 'application/json'
    }
}
export const useGetNewRelease = (token) => {
    const [resp, setResp] = useState({ loading: true, data: null })
    const params = {
        country: "ID",
        limit: "10",
        offset: 0
    }
    const queryString = new URLSearchParams(params).toString();

    useEffect(() => {
        if (token) {
            let redirectUrl = API_HOST + '/v1/browse/new-releases?' + queryString
            fetch(redirectUrl, {
                headers: setTokenHeader(token)
            }).then(async (response) => {
                if (response.status === 200 || response.status === 201) {
                    setResp({ loading: false, data: (await response.json()).albums.items })
                }
                if (response.status === 400 || response.status === 401) {
                    logout()
                }

            }).catch((e) => {
                setResp({ loading: false, data: null, error: "unknown error, please try again later" })

            })
        }
    }, [queryString, token])

    return resp;
}
export const useGetFeaturePlaylist = (token) => {
    const [resp, setResp] = useState({ loading: true, data: null })
    const params = {
        country: "ID",
        limit: "10",
        offset: 0
    }
    const queryString = new URLSearchParams(params).toString();

    useEffect(() => {
        if (token) {
            let redirectUrl = API_HOST + '/v1/browse/featured-playlists?' + queryString
            fetch(redirectUrl, {
                headers: setTokenHeader(token)
            }).then(async (response) => {
                if (response.status === 200 || response.status === 201) {
                    setResp({ loading: false, data: (await response.json()).playlists.items })
                }
                if (response.status === 400 || response.status === 401) {
                    logout()
                }
            }).catch((e) => {
                setResp({ loading: false, data: null, error: "unknown error, please try again later" })

            })
        }
    }, [queryString, token])

    return resp;
}
export const useGetCategories = (token) => {
    const [resp, setResp] = useState({ loading: true, data: null })
    const params = {
        country: "ID",
        limit: "10",
        offset: 0
    }
    const queryString = new URLSearchParams(params).toString();

    useEffect(() => {
        if (token) {
            let redirectUrl = API_HOST + '/v1/browse/categories?' + queryString
            fetch(redirectUrl, {
                headers: setTokenHeader(token)
            }).then(async (response) => {
                if (response.status === 200 || response.status === 201) {
                    const rsp = await response.json();

                    setResp({ loading: false, data: (rsp.categories.items) })
                }
                if (response.status === 400 || response.status === 401) {
                    logout()
                }
            }).catch((e) => {
                setResp({ loading: false, data: null, error: "unknown error, please try again later" })

            })
        }
    }, [queryString, token])

    return resp;
}