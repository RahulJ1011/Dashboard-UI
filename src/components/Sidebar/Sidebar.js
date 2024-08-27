import React from 'react'
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import PsychologyIcon from '@mui/icons-material/Psychology';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import BorderStyleIcon from '@mui/icons-material/BorderStyle';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import './sidebar.scss'
import SystemSecurityUpdateGoodIcon from '@mui/icons-material/SystemSecurityUpdateGood';
import SettingsIcon from '@mui/icons-material/Settings';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import Person2Icon from '@mui/icons-material/Person2';
import LogoutIcon from '@mui/icons-material/Logout';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <span className='logo'>
            React
        </span>
      </div>
      <div className='center'>
        <ul>
        <p className='title'>
                    MAIN
                </p>
            <li>
                
                <SpaceDashboardIcon className='icon' />
                <span>
                    Dashboard
                </span>
            </li>
            <p className='title'>LISTS</p>
            <li>
                <Inventory2Icon className='icon' />
                <span>
                    Users</span>
            </li>
            <li>
                <Inventory2Icon className='icon' />
                <span>
                    Products</span>
            </li>
            <li>
                <BorderStyleIcon className='icon' />
                <span>Orders</span>
            </li>
            <li>
                <DeliveryDiningIcon className='icon' />
                <span>Delivery</span>
            </li>
            <p className='title'>USEFUL</p>
            <li>
                <QueryStatsIcon className='icon' />
                <span>stats</span>
            </li>
            <li>
                <CircleNotificationsIcon className='icon' />
                <span>Notifications</span>
            </li>
            <li>
                <SystemSecurityUpdateGoodIcon className='icon' />
                <span>System Health</span>
            </li>
            <li>
                <PsychologyIcon className='icon' />
                <span>Logs</span>
            </li>
            <li>
                <SettingsIcon className='icon' />
                <span>Settings</span>
            </li>
            <p className='title'>USER</p>
            <li>
                <Person2Icon className='icon' />
                <span>Profile</span>
            </li>
            <li>
                <LogoutIcon className='icon' />
                <span>Logout</span>
            </li>
        </ul>
      </div>
      <div className='bottom'>
        <div className='color-option'>

        </div>
        <div className='color-option'>

</div>


      </div>
    </div>
  )
}

export default Sidebar
