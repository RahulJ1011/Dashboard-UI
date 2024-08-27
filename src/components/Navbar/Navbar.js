import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import {LanguageOutlined,DarkModeOutlined,FullscreenExitOutlined,NotificationsNoneOutlined,ChatBubbleOutlineOutlined,ListOutlined} from "@mui/icons-material"

import './navbar.scss'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='wrapper'>
                <div className='search'>
                    <input type='text' placeholder='search' />
                    <SearchIcon />
                </div>
                <div className='items'>
                        <div className='item'>
                                <LanguageOutlined className='icon' />
                                English
                        </div>
                        <div className='item'>
                                <DarkModeOutlined  className='icon' />
                        </div>
                        <div className='item'>
                                <FullscreenExitOutlined  className='icon' />
                        </div>
                        <div className='item'>
                               <NotificationsNoneOutlined  
                               className='icon' />
                               <div className='counter'>1</div>
                        </div>
                        <div className='item'>
                             <ChatBubbleOutlineOutlined  
                             className='icon' />
                             <div className='counter'>1</div>
                        </div>
                        <div className='item'>
                                <ListOutlined  className='icon' />
                        </div>
                        <div className='item'>
                            <SettingsAccessibilityIcon className='avatar' />

                            

                        </div>
                        
                </div>
        </div>
      
    </div>
  )
}

export default Navbar
