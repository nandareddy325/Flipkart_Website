import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer'
import { useSelector } from 'react-redux';
import ScrollToTop from './OnclickScrollTop';
const Products = ()=>{
    const [data, setData] =useState([]);
    const [filter,setFilter] =useState (data);
    const [loading,setLoading] = useState(false);
    const state = useSelector((state)=>state.handleCart);
    useEffect (()=>{
        const getProducts = async ()=>{
            setLoading (true);
            const response = await fetch ("https://fakestoreapi.com/products");
            setData (await response.clone().json());
            setFilter (await response.json());
            setLoading (false);
            console.log(data);
        }
        getProducts ();
    },[]);
    
    const Loading =()=>{
     return(
        <>
        <h1>Loading.......</h1>
        </>
     );
    };
    const filterProducts = (prod)=>{
        const updatedList = data.filter((x)=>x.category === prod);
        setFilter(updatedList);
    }
    const ShowProducts = ()=>{
        return(
            <>
            <div className='button text-center'>
                <button className='me-2' onClick={()=> setFilter(data)}>All</button>
                <button className='me-2' onClick={()=> filterProducts ("men's clothing")}>Men's</button>
                <button className='me-2' onClick={()=> filterProducts ("women's clothing")}>Women's</button>
                <button className='me-2' onClick={()=> filterProducts ("jewelery")}>Jewelery</button>
                <button className='me-2' onClick={()=> filterProducts ("electronics")}>Electronics</button>
            </div>

            <hr/>
            {filter.map((Product)=>{
                return(
                  <>
                  <div className='col-md-3 g-4'>
                    <div className='card'>
                        <img src={Product.image} className='p-3' alt={Product.title}/>
                        <div className='card-body'>
                            <div className='card-title'>{Product.title.slice(0, 40)}....</div>
                            <p className='card-text text-danger fw-bolder'>Rs : {Product.price}</p>
                          <div className=''>
                          {state.find((x)=> x.id === Product.id) ? (
                                 <Link to="/cart" className='exist'>Exist</Link>
                            ):(
                                <Link to = {`/products/${Product.id}`}className=''>Buy Now  <i class="fa-solid fa-arrow-right"></i> </Link>
                            ) }
                          </div>
                            
                           

                        </div>
                    </div>
                    </div>  
                </>
                )
            })}
            </>
        )
    }
    return(
        <>
        <div className='container products py-3' >
        <ScrollToTop/>
            <div className='row'>
                <div className = "col-sm-12">
                    <h3 className='fw-bold'>Latest Products</h3>
                </div>
                <div className='row  '>
                  {loading ? <Loading/> : <ShowProducts/>}
                </div>
             </div>
        </div>
        <Footer/>
      </>
    )
}
export default Products