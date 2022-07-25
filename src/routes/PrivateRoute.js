import React from 'react'
import { ProductDetail } from '../page/ProductDetail'
import { Navigate } from 'react-router-dom'
import { Login } from '../page/Login'
export const PrivateRoute = ({auth}) => {
  return auth ==true ?<ProductDetail/>:< Navigate to='/login'/> //이게맞음.
  // return auth ==true ?<ProductDetail/>:< Login/>
}
