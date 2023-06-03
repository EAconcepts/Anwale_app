import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Footer =({user})=>{

    const [scrollDirection, setScrollDirection] = useState('down');

    useEffect(()=>{
        let lastScrollPos = window.pageYOffset;
        const handleScroll = ()=>{
            const currentScrollPos = window.pageYOffset;
            if(currentScrollPos > lastScrollPos){
                setScrollDirection('down')
             } else{
                setScrollDirection('up');
             }
            lastScrollPos= currentScrollPos;
        };
        window.addEventListener('scroll', handleScroll);
        return()=>window.addEventListener('scroll', handleScroll);
    },[])
    return(
        <nav className={` fixed bottom-0 right-0 left-0 z-10 bg-slate-100 sm:hidden ${scrollDirection==='down' ? ' translate-y-full' : 'translate-y-0'}`}>
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
                    <NavLink to={user ? '/post-ads' : '/login'}>
                        <i className="fa fa-plus-square"></i>
                        <p className="-my-1 text-xs">Post Ads</p>
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

export default Footer;