import { useDispatch, useSelector } from "react-redux";
import { addcart, delcart, iddelcart } from '../redux/action';
import { Link } from 'react-router-dom';
import { useState } from "react";
const Cart = () => {
  const[showmodel,setShowmodel]=useState(false)
  const dispatch = useDispatch();
  const delProduct = (del)=>{dispatch(delcart(del));}
  const addProduct = (add)=>{dispatch(addcart(add));}
  // const delid = (did)=>{dispatch(iddelcart(did))}
  const state = useSelector((state)=>state.handleCart);
  let total_Price = state.reduce((a,b)=>{return a + b.qty * b.price},0)
  return (
        <>
        {state.length >= 1 ? (
          <div className='container-fluid cartitems py-5'>
            <div className='row'>
              <div className='col-9 cartitemsdetails'>
                <div className='row'>
                  {state.map((item)=>
                  <div className='col-10 mx-auto  p-3 m-1 cartitemsimgdetails'>
                    <div className="row">
                      <div className="col-3 align-content-center">
                         <img src={item.image}/>
                          <div className="justify-content-around d-flex py-2 my-3 border border-dark">
                            <button onClick={()=>addProduct(item)}><i class="fa-solid fa-plus"></i></button>
                            <span>{item.qty}</span>
                            
                            {item.qty >1 ? 

                             ( 
                              <button onClick={()=>delProduct(item)} ><i class="fa-solid fa-minus"></i></button>
                                                           

                            )
                             :
                             (
                            <>
                            <div>
                              <button className="text-danger" onClick={()=>setShowmodel(true)}><i class="fa-solid fa-trash"></i></button>
                              {showmodel && 
                              <>
                              <div className="position-absolute top-50 start-50 border Larger shadow p-5 bg-light ">
                                <p>Are you sure to delete this item?</p>
                                <span className="btn btn-danger me-5" onClick={()=>delProduct(item)}>Delete</span>
                                <span className="btn btn-primary" onClick={()=>setShowmodel(false)}>Cancel</span>
                              </div>
                              </>
                              }

                            </div>
                            </>

                            )
                             }
                            
                          </div>
                      </div>
                    <div className="col-9">
                      <div className="ms-3 mt-3 ">

                      
                          <span className=' text-success'><b className='text-uppercase'>{item.category}</b> </span>
                          <p className='mt-3'>{item.title}</p>
                          <span className="text-danger">
                            Rating : <b>{item.rating && item.rating.rate}</b> &nbsp;
                            <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                            <i className="fa fa-star"></i><i class="fa-solid fa-star-half"></i>
                        </span>
                          <p className="text-end">RS :<b>{item.price}</b></p>
                          <p className="text-end">T_Price : <b>{(item.qty*item.price).toFixed(0)}</b></p>
                    </div>
                    </div>
                    </div>
                  </div>)}
                </div>
              </div>
                <div className='col-3 cartitemspricedetails'>
                <div className=' py-3 px-2'>
                  <h4>PRICE DETAILS</h4>
                  <p>Descount : 0</p>
                   <h5>Total_price :<b>{total_Price.toFixed(0)}</b></h5>
                </div>
              </div>
            </div>
          </div>

      
      
        ):(

          <div className='bg-dark align-content-center text-center  fixed-top'  style={{height:"100vh"}}>
            <div>
              <h1 className='text-white'>Your cart is empty!</h1>
              <p className="text-white">Add items to it now.</p>
              <Link to="/" className='btn btn-primary btn-sm px-5 rounded-0'>Shop now <i class="fa-solid fa-cart-shopping"></i></Link>
            </div>
          </div>
        )}
        
          
                </>


          
  )
}
export default Cart
