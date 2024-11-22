const Footer = ()=>{
    

    return(
        <footer className="bg-dark">
            <div className="container pt-5 pb-2">
                <div className="row">
                    <div className="col-lg-3 col-md-6 mb-sm-4 mx-auto">
                        <div  className="text-secondary">
                             <h4  className="mb-3  text-white">Shop Catagories</h4>
                             <span>Phones</span> <br/>
                             <span>Desktops</span> <br/>
                             <span>Watches</span> <br/>
                             <span>TVs</span> <br/>
                             <span>Accessories</span>
                        </div>
                    </div>

                    <div className="col-lg-3  col-md-6 mb-sm-4   mx-auto">
                        <div  className="text-secondary">
                            <h4 className="mb-3  text-white">Customer Service</h4>
                            <span>Contact Us</span> <br/>
                            <span>Shipping Policy</span> <br/>
                            <span>Returns & Exchanges</span> <br/>
                            <span>FAQs</span>
                            
                        </div>
                    </div>

                    <div className="col-lg-3  col-md-6 mb-sm-4   mx-auto">
                        <div className="text-secondary">
                            <h4  className="mb-3  text-white">About Us</h4>
                            <p>At our electronices store,we are dedicated to providing the latest and greatest
                                devices and accessories to our customers, with a wide selection of phones,Tvs laptops,
                                watches, and accessories,
                            </p>
                            
                            
                        </div>
                    </div>

                    <div className="col-lg-3  col-md-6 mb-sm-4    mx-auto icons">
                        <div className="text-secondary">
                            <h4  className="mb-3  text-white">Follow Us</h4>
                           <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>  
                           <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>   
                           <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>   
                           <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>   
                        </div>
                    </div>
                </div>
                <hr className=" text-white"/>
                <div>
                    <p className="text-center  text-white">&copy; {new Date().getFullYear()} E-Shop. All Rights reserved</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer