import React from 'react'
import { useNavigate } from 'react-router-dom'
 
export default function Order_Summary() {
  const navigate=useNavigate()
  return (
    <div>Order-Summary
    <button onClick={()=>navigate(-1)}  >go back </button>
    </div>
  )
}
