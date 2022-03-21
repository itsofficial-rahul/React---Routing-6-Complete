import React from 'react'
import { Link ,Outlet} from 'react-router-dom'

export default function Product() {
  return (
    <div>Product
    
    <input type="text"  ></input>
    <nav>
    <Link to='Fetuer'>Feature</Link>
    <Link to='New'>new</Link>
    </nav>
    <Outlet />
    </div>
  )
}
