import React from 'react'
import { useNavigate } from 'react-router-dom'
import Order_Summary from './Order_Summary'
export default function Home() {
   const navigate= useNavigate()
  return (
      <>
    <div>Home is runn</div>
    <button onClick={()=>navigate('Order_Summary',{replace:false})}>placeordr</button>
    </>
  )
}
