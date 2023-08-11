import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import './header.css'
import { useSelector } from 'react-redux'
function Header() {
    const cartNumber=useSelector(state=>state.cart)
  return (
    <div className='HeaderContainer'>
        <div className='Logo'>
           <Link to={'/'} >LOGO</Link>
        </div>
        <div className='navbar'>
            <Link to={'/'}>Protucts</Link>
            <Link to={'/card'}  ><AiOutlineShoppingCart/>  {cartNumber.length}</Link>
        </div>
    </div>
  )
}

export default Header