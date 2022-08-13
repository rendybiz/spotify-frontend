/**
 * This hook will call REST API from our Express JS
 * The Default express JS is run in 3001, you can replace it from 
 * Your .env EXPRESS_HOST
 */

import { useState, useEffect } from "react";
import store from "../../store/store";

// Assume that it run from localhost://3001

const EXPRESS_HOST = process.env.EXPRESS_HOST || 'http://localhost:3001';

/**
 * 
 * @param {String} authCode 
 * @param {String} authState 
 * @returns {Object} null | {token, refresh} // Token and Refresh Token
 */
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
        if (!token && authCode && authState) {
            let redirectUrl = EXPRESS_HOST+'/callback?' + queryString
            fetch(redirectUrl).then(async (response) => {
                if (response.status < 300) {
                    const tokenResult = await response.json();
                    store.save("token", {token: tokenResult.access_token, refresh: tokenResult.refresh_token})
                    setResp(tokenResult.access_token)
                }
            }).catch((e) => {
                console.log("error", e)
            })
        }
    }, [authCode, authState, queryString])

    return resp;
}