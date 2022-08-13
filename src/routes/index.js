import React from 'react';
import Discover from './Discover';
import {
  BrowserRouter,
  Routes as SwitchRoutes,
  Route
} from "react-router-dom";
import Callback from './Callback/Callback';
import Spotify from '../hooks/spotify/spotify';
import store from '../store/store';
import { useGetToken } from '../hooks/express-backend/express';
import CoreLayout from '../common/layouts/CoreLayout';

export default function Routes() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <SwitchRoutes>
          <Route path="/" element={<RequireAuth>
            <Discover />
          </RequireAuth>}>
          </Route>
          <Route path="/callback" element={<Callback />}>
          </Route>
        </SwitchRoutes>
      </AuthProvider>

    </BrowserRouter>
  )
  // Here you'd return an array of routes
}
let AuthContext = React.createContext(null);

function AuthProvider({ children }) {
  const auth = store.get('auth');
  const token = useGetToken(auth?.code, auth?.state)
  const signIn = () => { }
  const signOut = () => { }
  let value = { auth, token, signIn, signOut }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function LoginForm() {
  const loginUrl = Spotify.authentication().url
  return <div className='flex items-center flex-col justify-center'>
    <div className='text-xl mb-5 text-bold text-center'>Login to Spotify is required. <br/> Please Login using Spotify account</div>
    <a href={loginUrl}>
      <div className='inline-flex uppercase flex-row items-center border border-2 border-green-500 p-2 rounded-3xl min-w-[240px] justify-center'>
        <img alt='' src={"/spotify-logo.svg"} className="max-h-[42px] mr-2 " />
        Login To Spotify
      </div>
    </a>
  </div>
}

function RequireAuth({ children }) {
  let auth = useAuth();

  return <> <CoreLayout>
    {!auth.token ? <LoginForm /> : children}
  </CoreLayout></>
}

function useAuth() {
  return React.useContext(AuthContext)
}