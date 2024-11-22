import React, { useState } from "react";
import { auth,db } from "./Firebase";
const LogIn=()=> {
    const[data,setData]=useState({
        Username:"",
        Email:"",
        Password:""
    })

    const{Email,Username,Password} = data;

    const changleHandler = (e)=>
        {setData({
            ...data,
            [e.target.name]:e.target.value
        })}
    
        const SigUp = (e)=>{
            e.preventDefault();
            auth
            .createUserWithEmailAndPassword(Email,Password)
            .then((user)=>console.log(user))
            .then((err)=>console.log(err))
        }
        const SigIn = (e)=>{
            e.preventDefault();
            auth
            .signInWithEmailAndPassword(Email,Password)
            .then((user)=>console.log(user))
            .then((err)=>console.log(err))
        }



    const submitHandler = (e)=>
        {e.preventDefault();
        if(Username.length <= 0){
            alert("Username Must be Enter...")
        }
        else if(Email===""){
            alert("Please Fill The Email Id Field...")
        }
        else if(Email.indexOf('@')<=0){
            alert("Must Include '@'..")
        }else if((Email.charAt(Email.length-4)!=='.') && (Email.charAt(Email.length-3)!=='.')){
            alert("Involid Possition Of '.'")
        }else if(Password.length<=5){
            alert("Password Must Be At Least 6 Charactors Length....")
        }
        console.log(data)
    }
    return (
        <div className="align-content-center login " style={{height:"100vh"}}>
            <div className="container py-5">
                <div className="row">
                    <div className="col-7">
                        <div>
                            <img src="https://static.vecteezy.com/system/resources/previews/019/872/884/original/3d-minimal-user-login-page-user-authentication-concept-user-verification-concept-login-page-with-a-fingerprint-padlock-3d-illustration-free-png.png" className="w-100" style={{height:"400px"}} />
                        </div>
                    </div>

                    <div className="col-5">
                <div className="row">
                    <div className="col-10 mt-5 mx-auto">
                        <form className="p-3" autocomplete="off" onSubmit={submitHandler}>
                            <div className=" position-relative mt-3">
                                  <input type="text" className="form-control shadow-none  bg-transparent rounded-0 fw-bold" onChange={changleHandler} value={Username} name="Username" placeholder="Username..."/>
                            <span className="position-absolute top-50 end-0 translate-middle"> <i class="fa-solid fa-user"></i></span>
                            </div>
                            <div className="position-relative  mt-4">
                            <input type="text" className="form-control shadow-none bg-transparent rounded-0  fw-bold" onChange={changleHandler} value={Email} name="Email" placeholder="Email..."/>
                            <span className="position-absolute top-50  end-0 translate-middle"><i class="fa-solid fa-unlock-keyhole"></i></span>
                            </div>
                            <div className="position-relative  mt-4 ">
                            <input type="text" className="form-control shadow-none bg-transparent rounded-0  fw-bold" onChange={changleHandler} value={Password} name="Password"  placeholder="Password..."/>
                            <span className="position-absolute  top-50  end-0 translate-middle"><i class="fa-solid fa-envelope"></i></span>
                            </div>
                            <div className="text-center mt-3">
                                
                                <button onClick={SigIn} className="btn btn-primary w-50 fw-bold ">Sign in</button>

                                <div className="d-flex mt-3 justify-content-between">
                                    <a href="#">Forgotten Account?</a>
                                    <a href="#" onClick={SigUp} >Sign up for FlipKart</a>
                                 {/* <Link to="/signUp">Sign up for Themealdb</Link> */}
                                   </div>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    );
}
export default LogIn;
