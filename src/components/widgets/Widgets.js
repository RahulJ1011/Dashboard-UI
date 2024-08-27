import React from 'react'
import './widgets.scss'
import {BalanceOutlined, KeyboardArrowUp, MonetizationOn, MonetizationOnOutlined, PersonOutline, ShoppingCart} from "@mui/icons-material"
const Widgets = ({type}) => {
    let data;
    let amount =1000;
    let diff =10;
    switch(type)
    {
        case "user":
            data={
                title:"USERS",
                isMoney:false,
                link:"see all users",
                icon:<PersonOutline className='icon' style={{color:"crimson"}} />
            }
            break;
            case "order":
                data={
                    title:"order",
                    isMoney:false,
                    link:"view all orders",
                    icon:<ShoppingCart className='icon' style={{
                        color:"purple",
                        
                    }} />
                }
                break;
            case "earning":
                {
                    data={
                        title:"Earnings",
                        isMoney:true,
                        link:"view net earnings",
                        icon:<MonetizationOn className='icon' />
                    }
                    break;
                }
            case "balance":
                {
                    data={
                        title:"balance",
                        isMoney:true,
                        link:"view Balance",
                        icon:<BalanceOutlined className='icon' />
                    }
                    break;
                }
            default:
                break;
    }
  return (
    <div className='widget'>
      <div className='left'>
       <span className='title'>{data.title}</span>
       <span className='counter'>{data.isMoney && "$"} {amount}</span>
       <span className='link'>{data.link}</span>
      </div>
      <div className='right'>
        <div className='percentage positive'>
            <KeyboardArrowUp />
            {diff}%
        </div>
       
      </div>
    </div>
  )
}

export default Widgets
