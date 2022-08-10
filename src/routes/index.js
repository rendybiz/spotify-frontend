import React from 'react';
import Discover from './Discover';
import {
  BrowserRouter,
  Routes as SwitchRoutes,
  Route,
} from "react-router-dom";
import Callback from './Callback/Callback';
import Token from './Token/Token';

export default function Routes() {
  return <BrowserRouter>
    <SwitchRoutes>
      <Route path="/" element={<Discover />}>
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
  </BrowserRouter>
  // Here you'd return an array of routes
}
