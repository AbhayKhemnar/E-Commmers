import React from 'react'
import Header from '../Header/Header'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import './card.css'
import { remove } from '../Store/cartSlices'

function Card() {
const cartProducts=useSelector(state=>state.cart)

const dispatch =useDispatch()

  function removeproduct(id){
     dispatch(remove(id))
  }

  return (
    <div>
    <Header/>


    <div className='cardContainer'>
{
    cartProducts.map((product,index)=>(
        <div className='Products' key={product.id}>
                 <div className='img_div'>
                    <img src={product.image} alt='product'/>
                 </div>   
                 <div className='Content_div'>
                    <h3>{product.title}</h3>
                    <h4>{product.price} $</h4>
                  </div>
                  <div className='button_div'>
                   <button onClick={()=>removeproduct(product.id)} >Remove</button>
                  </div>  
                </div>     
    ))
}
  
    </div>
  </div>
  )
}

export default Card