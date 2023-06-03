import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import Settings from './components/pages/Settings';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import PostAds from './components/pages/PostAds';

function App() {

  const [user, loading, erroMsg] = useAuthState(auth)
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
});
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home user={user}  />}/>
          <Route path='/dashboard' element={<Dashboard user={user} />}/>
          <Route path='/login' element={<Login user={user} loading={loading} />}/>
          <Route path='/sign-up' element={<SignUp formValues={formValues} setFormValues={setFormValues} />}/>
          <Route path='/settings' element={<Settings user={user} />}/>
          <Route path='/post-ads' element={<PostAds user={user}/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
