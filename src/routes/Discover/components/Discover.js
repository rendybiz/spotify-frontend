import React from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import { useGetCategories, useGetFeaturePlaylist, useGetNewRelease } from '../../../hooks/spotify/spotify-access';
import store from '../../../store/store';

const Discover = () => {
  const token = store.get("token").token;
  const newReleases = useGetNewRelease(token)
  const playlists = useGetFeaturePlaylist(token)
  const categories = useGetCategories(token)
  
  return (
    <div className="discover">
      {
        newReleases.error || playlists.error || categories.error ? <div>
          There are some errors in our Server, please try again later
        </div>:null
      }
      <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases?.data} loading={newReleases.loading || newReleases == null} />
      <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists?.data} loading={playlists.loading || newReleases == null} />
      <DiscoverBlock text="BROWSE" id="browse" data={categories?.data} loading={categories.loading || newReleases == null} imagesKey="icons" />
    </div>
  );

}
export default Discover