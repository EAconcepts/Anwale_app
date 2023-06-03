import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLessThan, faUserCircle, faGear } from '@fortawesome/free-solid-svg-icons'

const PostAds = (user)=>{
    const navigateTo = useNavigate()
    const handleBackIcon = ()=>{
        navigateTo(-1);
    }
    return(
        <div>
            <nav className='flex justify-between gap-3 px-4 py-2 bg-slate-100'>
                <div className='flex gap-3'>
                    <button onClick={handleBackIcon}>
                        <FontAwesomeIcon icon={faLessThan} className='text-xl mr-2' /> 
                    </button>
                    <span className='text-xs'>Post ads </span>
                </div>
                <button className='text-xs'>
                    Clear
                </button>
            </nav>
            <div className="bg-slate-200 min-h-screen">
                <div className=" bg-white mx-1 mt-3"></div>
            </div>
        </div>
    )
}

export default PostAds;