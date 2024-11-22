import { useEffect, useState } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollToTop = ()=>{
    const [showScrollButton,setShowScrollTopButton]=useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 200){
                setShowScrollTopButton(true)
            }else{
                setShowScrollTopButton(false)
            }
        })
    },[])

    const style = {
        position:"fixed",
        bottom:"20px",
        right:"100px",
        width:"60px",
        border:"1px",
        cursor:"pointer"

    }
    

    const ScrollTop = ()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
    return(
        <div style={style} className="z-3 bg-white text-center">
            {showScrollButton &&
            <FaAngleDoubleUp className="m-2" onClick={ScrollTop} />
            }
            
        </div>
    )
}
export default ScrollToTop;