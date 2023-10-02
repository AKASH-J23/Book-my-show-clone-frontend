import React from 'react'
import Navbar from '../components/Navbar/Navbar.component'

const Movielayout = (props) => {
  return (
    <>
    <Navbar/>
    {props.children}
    </>
  )
}

export default Movielayout