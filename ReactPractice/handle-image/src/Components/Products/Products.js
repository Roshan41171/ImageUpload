import React from 'react'
import { Link  , Outlet} from 'react-router-dom'

const Products = () => {
  return (
    <div>
      <h1>This is the Product Page</h1>
      <Link to='/product/add'>Add</Link>
      <Link to='/product/list'>List</Link>
      <Link to='/product/search'>Search</Link>

      <Outlet />
    </div>
  )
}

export default Products