import React, { useEffect, useState } from "react";
import { Link,useParams} from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {addcart,delcart, idaddcart} from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
const Product = ()=>{
    
    const state = useSelector((state)=>state.handleCart);

    const {id} = useParams();
    const [product,setProduct] = useState([])
    const [loading,setLoading] = useState(false);

    const dispatch = useDispatch();
    
    const addProduct = (add)=>{
         dispatch(idaddcart(add));
      }
    useEffect (()=>{
        const getProduct = async ()=>{
            setLoading(true);
            const respose = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProduct(await respose.json());
            setLoading(false);
            }
              getProduct();
            },[]
        )
            const Loading = ()=>{
                return(
                    <>
                        <div className="col-md-6">
                            <Skeleton height={400} className="bg-info"/>
                            </div>
                        <div className="col-md-6">
                            <Skeleton/>
                        </div>
                    </>
                )
            }
            const ShowProduct = ()=>{
                return(
                    <>
                    <div className="col-md-4 image text-center align-content-center">
                        <img src={product.image} className="w-75 " alt={product.title}/>
                    </div>
                    <div className="col-md-8 p-2"> 
                        <h2 className="text-uppercase text-success">
                            {product.category}
                            
                        </h2>
                        <h4 className="">{product.title}</h4>
                        <p className="">
                         <span className="lead">
                            Rating : <b>{product.rating && product.rating.rate}</b> &nbsp;
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i class="fa-solid fa-star-half"></i>
                        </span> &nbsp; &nbsp;
                        <span className="lead">
                            Items Left : <b>{product.rating && product.rating.count}</b>
                        </span>
                        </p>
                         <h4 className="display-6 fw-bold text-danger">Rs: {product.price}</h4>
                         <p className="lead">{product.description}</p> 
                         <div className="d-flex justify-content-around p-2">
                            {state.find((x)=> x.id === product.id) ? (
                                 <button className='btn btn-danger px-5 fw-bold rounded-0  '>Exist</button>
                            ):(
                                <button onClick={()=>addProduct(product)} 
                                className="btn btn-outline-primary px-3 rounded-0 ">Add to Cart  &nbsp; 
                                <i class="fa-solid fa-cart-plus"></i>
                            </button>
                            ) }
                         <Link to="/cart" className="btn btn-warning px-4 rounded-0 fw-bold">Go to Cart</Link> 
                         
                         </div>
                         
                   </div>
            </>
            )
      }
return(
    <div>
        <div className="container product py-5">
            <div className="row p-5 border border-dark">
                {loading ? <Loading/>:<ShowProduct/>}
            </div>
        </div>
    </div>
)
}
export default Product;