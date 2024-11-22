import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from '../Components/Footer'
import { Modal } from "react-model";
import ScrollToTop from "./OnclickScrollTop";

const Home = ()=>{
    const[showmodel,setShowmodel]=useState(false)
    const[data,setData] = useState([]);
    const[filter,setFilter] = useState(data);
    const[loading,setLoading]=useState(false);
    

    
    //let ComponentMounted=true;
    useEffect(()=>{
        const getProducts = async ()=>{
            setLoading(true);
        const respose = await fetch("https://fakestoreapi.com/products");
        setData(await respose.clone().json());
        setFilter(await respose.json());
        setLoading(false);
        console.log(data)
        }
        getProducts();
    },[]);

    const Loading = ()=>{
        return(
        <>
        <h1>Loading....</h1>
        </>)
     }
     
      const jewelery = data.filter((x)=>x.category === "jewelery");
      const mensclothing = data.filter((x)=>x.category === "men's clothing");
      const womensclothing = data.filter((x)=>x.category === "women's clothing");
      const electronics = data.filter((x)=>x.category === "electronics");


  
     const ShowProducts = ()=>{
         return(
             <>
             <div>
            
             </div>
             {filter.map((product)=>{
                return(
                    <>
                   

                    <div className="col-1 m-2 ">
                       <div className="image">
                                <div className="card p-3"><img src={product.image} className="w-100" alt={product.filter}/></div>

                                <div className="imgdetail">
                                    <span className="fw-bold text-uppercase">{product.category}</span><br/>
                                    Rating : <b>{product.rating && product.rating.rate}</b> <br/>
                                    Left items : <b>{product.rating && product.rating.count}</b> <br/>
                                    Price : <b>{product.price}</b>
                                    <div className="text-center m-2">
                                    <Link to = {`/products/${product.id}`}className='btn btn-sm px-4 btn-outline-danger'>More Details</Link>
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
        <div className="container Models ">
          <div className="col-1 ms-auto  rounded-2 text-center ">
            <button onClick={()=>setShowmodel(true)} className="btn btn-primary">
                      <i class="fa-solid fa-share-nodes"></i>
            </button>
            {showmodel && 
                       <>
                       <div className="py-3 text-center">
                       <button className=" m-1 btn btn-primary"><i class="fa-brands fa-whatsapp"></i></button>
                       <button className=" m-1 btn btn-success"><i class="fa-brands fa-instagram"></i></button>
                       <button className="  m-1 btn btn-info"><i class="fa-brands fa-facebook"></i></button>
                       </div>
                       <button onClick={()=>setShowmodel(false)} className="btn btn-danger">
                            <i class="fa-solid fa-xmark"></i>
                      </button>
                       </>
            }
          </div>
        </div>
     

<div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://d16pnh712pyiwa.cloudfront.net/wp-content/uploads/2020/11/Landing-page-banner-scaled.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://images-static.nykaa.com/uploads/7dcdd30a-bc9b-4b35-9d0c-3eb8a579e1ed.jpg?tr=w-2400" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://assets2.mirraw.com/banner_sliders/5591/01_%281%29_main.jpg?1533619925" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        
        <div className="Home  py-2 ">
        <ScrollToTop/>
            <div className="container" >
            <h1 className="disply-5 ">All Products</h1>
            <div className="row">
                {loading ? <Loading/> : <ShowProducts/>}
            </div>
            </div>
        </div>
<div>
  

<div className="container py-5">
  <div className="row">
    <div className="col-12 mx-auto">
      <div className="tag_list">

        <div className="inner">
          <div className="tag">Jewelery</div>
          <div className="tag">Men's Clothing</div>
          <div className="tag">Women's Clothing</div>
          <div className="tag">Electronics</div>
        </div>

      </div>
    </div>
  </div>
</div>
</div>

<div className="container py-4">
  <div className="pt-5">
  <h4  className="text-uppercase text-info" >jewelery</h4>
     <div className="row">
      {jewelery.map((e)=>
         <div className="col-2 mx-auto">
          <div className="border border-1 border-dark rounded-3 p-4">
               <img src={e.image} className="w-100" style={{height:"100px"}}/>
          </div>
              
         </div>
       )}
                        
      </div>
      </div>
      <div className="pt-5">
  <h4  className="text-uppercase text-primary" >men's clothing</h4>
    <div className="row">
      {mensclothing.map((e)=>
        <div className="col-2 mx-auto">
            <div className="border border-1 border-dark rounded-3 p-4">
               <img src={e.image} className="w-100" style={{height:"100px"}}/>
          </div>
        </div>
      )}
      </div>
    </div>
    <div className="pt-5">
  <h4  className="text-uppercase text-danger" >women's clothing</h4>
    <div className="row">
      {womensclothing.map((e)=>
          <div className="col-2 mx-auto">
            <div className="border border-1 border-dark rounded-3 p-4">
               <img src={e.image} className="w-100" style={{height:"100px"}}/>
          </div>
          </div>
        )}
        </div>
    </div>
    <div className="pt-5">
  <h4 className="text-uppercase text-success" >electronics</h4>
      <div className="row">
        {electronics.map((e)=>
            <div className="col-2 mx-auto">
                  <div className="border border-1 border-dark rounded-3 p-4">
                    <img src={e.image} className="w-100" style={{height:"100px"}}/>
                 </div>
            </div>
         )}
      </div>
      </div>
</div>
<Footer/>
        </>

    )
}
export default Home 
