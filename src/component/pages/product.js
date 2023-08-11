import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import './product.css'
import { useDispatch } from 'react-redux'
import { add } from '../Store/cartSlices'

function Product() {
    const dispatch=useDispatch()
  const [products, setProducts]=useState([])
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((data)=>data.json())
    .then((result)=>setProducts(result))
    .catch((error)=>console.log(error))
    
  },[])
  console.log(products)
  
  function handleAdd(product){
     dispatch(add(product))
  }

    return (
  
    <div>
     <Header/>
    
    <div className='ProductContainer'>
        {
            products.map((product,index)=>(
                <div className='Products' key={product.id}>
                 <div className='img_div'>
                    <img src={product.image} alt='products'/>
                 </div>   
                 <div className='Content_div'>
                    <h3>{product.title}</h3>
                    <h4>{product.price} $</h4>
                  </div>
                  <div className='button_div'>
                   <button onClick={()=>handleAdd(product)}>Add to cart</button>
                  </div>  
                </div>    
            ))
        }



    </div>
 </div>
  )
}

export default Product