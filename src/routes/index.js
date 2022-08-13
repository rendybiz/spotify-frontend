import React from 'react';
import Discover from './Discover';
import {
  BrowserRouter,
  Routes as SwitchRoutes,
  Route,
  useLocation,
} from "react-router-dom";
import Callback from './Callback/Callback';
import Token from './Token/Token';
import Spotify from '../hooks/spotify/spotify';
import store from '../store/store';
import { useGetToken } from '../hooks/express-backend/express';

export default function Routes() {
  return (


    <BrowserRouter>
      <AuthProvider>
        <SwitchRoutes>
          <Route path="/" element={<RequireAuth>
            <Discover />
          </RequireAuth>}>
            {/* <Route index element={<Discover />} /> */}
            {/* <Route path="callback" element={<Callback />}>
               <Route path=":teamId" element={<Team />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} />
            </Route> */}
          </Route>
          <Route path="/callback" element={<Callback />}>
          </Route>
          <Route path="/token" element={<Token />} >
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
  console.log("get authenticaotion", auth)
  const signIn = () => { }
  const signOut = () => { }
  let value = { auth, token, signIn, signOut }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function LoginForm() {
  const loginUrl = Spotify.authentication().url
  return <div>
    <div className='text-xl mb-10'>Login is required</div>
    <a href={loginUrl}>
      <div className='inline-flex flex-row items-center border border-2 border-green-500 p-2 rounded-md  font-bold'>
        <img src={"/spotify-logo.svg"} className="max-h-[42px] mr-2 " />
        Spotify Login
      </div>
    </a>
  </div>
}

function RequireAuth({ children }) {
  let auth = useAuth();
  let location = useLocation();
  if (!auth.token) {
    return <LoginForm />
  }
  return <>{children}</>
}

function useAuth() {
  return React.useContext(AuthContext)
}