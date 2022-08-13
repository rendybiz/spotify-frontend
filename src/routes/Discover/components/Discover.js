import React, { Component, useEffect } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import Spotify from '../../../hooks/spotify/spotify';
import { NavLink } from 'react-router-dom';
import { useGetCategories, useGetFeaturePlaylist, useGetNewRelease } from '../../../hooks/spotify/spotify-access';
import store from '../../../store/store';

const Discover = () => {
  // this.redirect(Spotify.authentication())
  const token = store.get("token").token;
  const newReleases = useGetNewRelease(token)
  const playlists = useGetFeaturePlaylist(token)
  const categories = useGetCategories(token)

  const { loginUrl } = {
    playlists: [],
    categories: [],
    loginUrl: Spotify.authentication().url
  };

  useEffect(() => {
    if(categories){
      console.log("new Release categories", categories)
    }
   
  }, [newReleases])
  return (
    <div className="discover">
      <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases?.data} loading={newReleases.loading || newReleases == null} />
      <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists?.data} loading={playlists.loading || newReleases == null} />
      <DiscoverBlock text="BROWSE" id="browse" data={categories?.data} loading={categories.loading || newReleases == null} imagesKey="icons" />
    </div>
  );

}
export default Discover