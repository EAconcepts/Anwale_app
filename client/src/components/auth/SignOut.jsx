import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'

const SignOut = (user)=>{
    signOut(auth)
    localStorage.removeItem(user)
}

export default SignOut;