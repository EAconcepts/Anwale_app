// import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const StaticFooter =({user})=>{

   
    return(
        <nav className={` fixed bottom-0 right-0 left-0 z-10 bg-slate-100 sm:hidden `}>
            <div className="flex justify-evenly text-center mb-1">
                <div>
                    <NavLink to='/'>
                        <i className="fa fa-home"></i>
                        <p className="-my-1 text-xs">Home</p>
                    </NavLink>
                </div>  
                <div>
                    <NavLink to={user ? '/saved' : '/login'}>
                        <i className="fa fa-bookmark"></i>
                        <p className="-my-1 text-xs">Saved</p>
                    </NavLink>
                </div> 
                <div className="">
                    <NavLink to={user ? '/sell' : '/login'}>
                        <i className="fa fa-plus-square"></i>
                        <p className="-my-1 text-xs">Sell</p>
                    </NavLink>
                </div>
                <div>
                    <NavLink to={user ? '/messages' : '/login'}>
                        <i className="fa fa-comments"></i>
                        <p className="-my-1 text-xs">Messages</p>
                    </NavLink>
                </div>    
                <div>
                    <NavLink to={user ? '/dashboard' : '/login'}>
                        <i className="fa fa-user"></i>
                        <p className="-my-1 text-xs">Profile</p>
                    </NavLink>
                </div>   
            </div>
        </nav>
    )
}

export default StaticFooter;