import React from 'react'
import "./Sidebar.css"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import SidebarOption from './SidebarOption'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <img className="sidebar_logo"
        src="https://thumbs.dreamstime.com/b/vinnytsia-ukraine-may-spotify-logo-dark-mode-cool-music-service-offers-legal-streaming-music-spotify-logo-dark-mode-218033923.jpg" alt=""/>
      <SidebarOption Icon={HomeOutlinedIcon}title="Home"/>
      <SidebarOption Icon={SearchOutlinedIcon}title="Search"/>
      <SidebarOption Icon={LibraryMusicOutlinedIcon}title="Your Library"/>
      <br/>
      <strong className='sidebar_title'>PLAYLIST</strong>
      <hr/>
    </div>
  )
}

export default Sidebar