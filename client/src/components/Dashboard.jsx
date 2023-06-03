
import {NavLink, useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLessThan, faUserCircle, faGear, faList, faCommenting, faChartSimple, faBolt, faWallet, faNairaSign, faPhoneVolume,  } from '@fortawesome/free-solid-svg-icons'
import Login from './auth/Login';
import StaticFooter from './StaticFooter';
import { faBell, faCircleQuestion, faGem, faUser } from '@fortawesome/free-regular-svg-icons';


const Dashboard = ({user}) =>{

    const navigateTo = useNavigate()
    const username = localStorage.getItem('userName')

    const handleBackIcon =()=>{
        navigateTo(-1)
    }

    const DashboardPage =()=>{
        return(
            <div className='h-screen bg-slate-200'>
            <nav className='flex justify-between gap-3 px-4 py-2 bg-slate-100'>
                <div className='flex gap-3'>
                    <button onClick={handleBackIcon}>
                        <FontAwesomeIcon icon={faLessThan} className='text-xl mr-2' /> 
                    </button>
                    <FontAwesomeIcon icon={faUserCircle} className='text-xl text-slate-900'/>
                    <span className='text-xs'>{username} </span>
                </div>
                <NavLink to='/settings' className='text-xs'>
                    SETTINGS <FontAwesomeIcon icon={faGear}/>
                </NavLink>
            </nav>
            <div className='pt-1 '>
                <div className='flex gap-3'>
                    <div className='flex flex-col w-1/2 ml-1'>
                        <div className='flex flex-col bg-white rounded divide-y divide-slate-100'>
                            <NavLink className='p-3'>
                                <FontAwesomeIcon icon={faList}/> <span className='text-base'>My adverts</span>
                            </NavLink>
                            <NavLink className='p-3'>
                                <FontAwesomeIcon icon={faCommenting}/> <span className='text-base'>Feedback</span>
                            </NavLink>
                            <NavLink className='p-3'>
                                <FontAwesomeIcon icon={faChartSimple}/> <span className='text-base'>Perfomance</span>
                            </NavLink>
                        </div>
                        <div className='flex flex-col mt-2 bg-white rounded divide-y divide-slate-100'>
                            <NavLink className='p-3'>
                                <FontAwesomeIcon icon={faBolt}/> <span className='text-base'>PRO Sales</span>
                            </NavLink>
                            <NavLink className='p-3'>
                                <FontAwesomeIcon icon={faGem}/> <span className='text-base'>Premium Services</span>
                            </NavLink>
                            <NavLink className='p-3'>
                                <div className='flex gap-2'>
                                    <FontAwesomeIcon icon={faWallet}/> 
                                    <div className='flex flex-col -mt-2'>
                                        <p className='text-xs'><FontAwesomeIcon icon={faNairaSign} className='text-[10px]'/> 0</p>
                                        <p className=' text-[10px] text-gray-400'>MY BALANCE</p>
                                    </div>
                                </div>
                            
                            </NavLink>
                        </div>
                    </div>
                    <div className='w-1/2 mr-1'>
                        <div className='flex flex-col bg-white rounded divide-y divide-slate-100'>
                            <NavLink className='p-3'>
                                <FontAwesomeIcon icon={faUser}/> <span className='text-base'>Followers</span>
                            </NavLink>
                            <NavLink className='p-3'>
                                <FontAwesomeIcon icon={faBell}/> <span className='text-base'>Notifications</span>
                            </NavLink>
                        
                        </div>
                        <div className='flex flex-col mt-2 bg-white rounded divide-y divide-slate-100'>
                            <NavLink className='p-3'>
                                <FontAwesomeIcon icon={faPhoneVolume}/> <span className='text-base'>Manager's Call</span>
                            </NavLink>
                            <NavLink className='p-3'>
                                <FontAwesomeIcon icon={faCircleQuestion}/> <span className='text-base'>FAQ</span>
                            </NavLink>
                        </div>
                    </div> 
                </div>
            </div>
            <StaticFooter user={user} />
        </div>
        )
    }
    return(
        <div>
            {user ? <DashboardPage/> : <Login/>}
        </div>
        
    )
}

export default Dashboard;