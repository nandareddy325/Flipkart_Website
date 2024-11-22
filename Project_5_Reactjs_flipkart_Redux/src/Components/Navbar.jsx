import React from "react";
import { useSelector } from "react-redux";
import { auth,db } from "./Firebase";
import { Link } from "react-router-dom";
const Navbar =({presentUser})=>{
    const state = useSelector((state)=>state.handleCart);
    let total_items = state.reduce((a,b)=>{return a + b.qty},0)

    const name = presentUser.email;

    return (
        <div className="sticky-top">
            <nav className="navbar navbar-expand-lg bg-light shadow-sm">
                <div className="container">
                    <Link className="navbar-brand fw-bolder" to="/">
                    <img src={"https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"}/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle ="collapse"
                    data-bs-target ="#navbarSupportedContent"
                    aria-label = "toggle navigation"
                    ><span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2">
                        <li className="nav-item m-1">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>  
                        </li>
                            <li className="nav-item m-1">
                            <Link className="nav-link" aria-current="page" to="/products">Products</Link>  
                            </li>
                            
                               </ul>
                               <button type="button" class="btn btn-sm btn-outline-primary position-relative px-4 me-5 ">Items
                             <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                 {total_items}
                             </span>
                       </button>
                        <button onClick={()=>auth.signOut()} className="btn btn-outline-danger btn-sm me-5">SignOut</button>
                           <Link to ="/cart"> 
                           <button type="button" class="btn btn-sm btn-outline-primary position-relative px-4 ">Cart <i class="fa-solid fa-cart-shopping"></i>
                             <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                 {state.length}
                                 
                             </span>
                       </button>
               </Link>
                    </div>
                  </div>
            </nav>
        </div>
    )
}
export default Navbar