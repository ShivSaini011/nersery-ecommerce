import React, { useEffect } from 'react'
import { Navbar } from '../features/navigation/components/Navbar'
import { ProductList } from '../features/products/components/ProductList'
import { resetAddressStatus, selectAddressStatus } from '../features/address/AddressSlice'
import { useDispatch, useSelector } from 'react-redux'
import {Footer} from '../features/footer/Footer'
import TopNavbar from '../features/navigation/TopNavbar'

export const HomePage = () => {

  const dispatch=useDispatch()
  const addressStatus=useSelector(selectAddressStatus)

  useEffect(()=>{
    if(addressStatus==='fulfilled'){

      dispatch(resetAddressStatus())
    }
  },[addressStatus])

  return (
    <>
    <TopNavbar/>
    <Navbar isProductList={true}/>
    <ProductList/>
    <Footer/>
    </>
  )
}
