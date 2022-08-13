import React from 'react';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeadphonesAlt,
  faHeart,
  faPlayCircle,
  faSearch, faSignOutAlt, faStream,
} from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Avatar } from '../../../assets/images/avatar.svg';
import './_sidebar.scss';
import logout from '../../../utils/logout';
import store from '../../../store/store';

function renderSideBarOption(link, icon, text, { selected } = {}, onClick) {
  return (
    <a href={link || '#'} onClick={()=>{
      
      if(onClick){onClick()}
    }}>
      <div
        className={cx('sidebar__option', { 'sidebar__option--selected': selected })}
      >
        <FontAwesomeIcon icon={icon} />
        <p>{text}</p>
      </div>
    </a>
  )
}

export default function SideBar() {
  /** Check is logged in or not */
  const token = store.get("token")

  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <Avatar />
        <p>{!token ? "Guest": "Bob Smith"}</p>
      </div>
      <div className="sidebar__options">
        {renderSideBarOption('/', faHeadphonesAlt, 'Discover', { selected: true })}
        {renderSideBarOption('/search', faSearch, 'Search')}
        {renderSideBarOption('/favourites', faHeart, 'Favourites')}
        {renderSideBarOption('/playlists', faPlayCircle, 'Playlists')}
        {renderSideBarOption('/charts', faStream, 'Charts')}
        {token ? renderSideBarOption(null, faSignOutAlt, 'Logout', {selected:false}, logout): null}
      </div>
    </div>
  );
}
