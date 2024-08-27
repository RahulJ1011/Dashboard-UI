import React from 'react'
import './features.css'
import {KeyboardArrowUp, MoreVert} from '@mui/icons-material'
import "react-circular-progressbar/dist/styles.css"
import {CircularProgressbar} from "react-circular-progressbar"
const Features = () => {
  return (
    <div className='featured'>
        <div className='top'>
            
                    <h1 className='title'>
                        Total Revenue
                    </h1>
            <MoreVert fontSize='small' />
        </div>
        <div className='bottom'>
            <div className='featured-chat'>
                <CircularProgressbar 
                value={70} 
                text='70%'
                strokeWidth={5}
                />

            </div>
            <p className='title'>Total Sales made today</p>
            <p className='amount'>$100</p>
            <p className='desc'>
                Hello Everyone, This is a CircularProgressbar
            </p>
            <div className='summary'>   
                    
                    <div className='item'>
                        <div className='item-title'>    
                                Target
                        </div>
                        <div className='itemResult positive'>
                            <KeyboardArrowUp fontSize='small' />
                            <div className='result-amount'>
                                        $12.4k
                            </div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='item-title'>    
                                Target
                        </div>
                        <div className='itemResult positive'>
                            <KeyboardArrowUp fontSize='small' />
                            <div className='result-amount'>
                                        $12.4k
                            </div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='item-title'>    
                                Target
                        </div>
                        <div className='itemResult positive'>
                            <KeyboardArrowUp fontSize='small' />
                            <div className='result-amount'>
                                        $12.4k
                            </div>
                        </div>
                    </div>
            </div>

        </div>
    </div>
  )
}

export default Features
