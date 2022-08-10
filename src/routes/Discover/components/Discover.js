import React, { Component } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import Spotify from '../../../hooks/spotify/spotify';
import { NavLink } from 'react-router-dom';

export default class Discover extends Component {
  constructor() {
    super();

    // this.redirect(Spotify.authentication())

    this.state = {
      newReleases: [],
      playlists: [],
      categories: [],
      loginUrl: Spotify.authentication().url
    };
  }

  redirect(obj) {
    window.location.replace(obj.url)
  }

  render() {
    const { newReleases, playlists, categories , loginUrl} = this.state;

    return (
      <div className="discover">
        <a href={loginUrl} target="_blank">Login </a> <br/>
        <NavLink
            to="token"
          >
            Token page
          </NavLink>
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
        <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
      </div>
    );
  }
}
