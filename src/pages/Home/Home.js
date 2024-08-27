import React from 'react'
import './home.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import Widgets from '../../components/widgets/Widgets'
import Features from '../../components/features/Features'
import Charts from '../../components/charts/Charts'
import Tables from '../../components/tables/Tables'

const Home = () => {
  
  return (
    <div  className='home'>
    
        <Sidebar />
        <div className='home-container'>
            <Navbar />
            <div className='widgets'>
                <Widgets type="user" />
                <Widgets type="order" />
                <Widgets type="earning" />
                <Widgets type="balance" />
            </div>
            <div className='charts'>
                <Features />
                <Charts />
            </div>
            <div className='list-container'>
                <div className='list-title'>
                    Latest Transaction
                    <Tables />
                </div>
            </div>
        </div>
     
    </div>
  )
}

export default Home
