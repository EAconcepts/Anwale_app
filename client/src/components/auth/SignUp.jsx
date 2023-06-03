import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLessThan,} from '@fortawesome/free-solid-svg-icons'
import {auth} from '../../firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import Login from "./Login";



const SignUp = () => {

    const [signedUp, setSignedUp] = useState(false)
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [validated, setValidated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  const navigateTo = useNavigate()
  const handleBackIcon =()=>{
    navigateTo(-1)
}

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm(formValues);
    if (Object.keys(validationErrors).length === 0) {
      createUserWithEmailAndPassword(auth, formValues.email, formValues.password)
        .then((userCredential) => {
            console.log(userCredential)
            setShowModal(true)
          })
        .catch((error) =>{ 
            console.log(error)
            alert(error)})
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (values) => {
    let errors = {};

    if (!values.firstName) {
      errors.firstName = "First Name is required.";
    }
    if(!values.lastName){
        errors.lastName ='Last Name is required'
    }
    if (!values.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Invalid email address.";
    }
    if (!values.password) {
      errors.password = "Password is required.";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters long.";
    }
    if (!values.confirmPassword){
        errors.confirmPassword = "Please enter password again."
    }else if(values.password !==values.confirmPassword){
        errors.confirmPassword ="Password did not match"
    }
    return errors;
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };  
  function Modal() {
    return (
      <div>
        {showModal && (<Login/>)}
      </div>
    );
  }
  
  return (
    <div>
      <nav className='flex justify-between gap-3 px-4 py-2 bg-slate-200'>
        <div className='flex gap-3'>
          <button onClick={handleBackIcon}>
              <FontAwesomeIcon icon={faLessThan} className='text-xl mr-2' /> 
          </button>
        </div>
      </nav>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div><Modal/></div>
        <div className="bg-white lg:w-1/3 md:w-1/2 sm:w-2/3 rounded-lg shadow-lg p-8 lg:my-4">
          <h2 className="text-center font-bold text-gray-800 text-2xl mb-4">
            Create an account
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="first-name" className="block text-gray-800 font-bold mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  className={`block w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-gray-400 ${
                    errors.firstName ? "border-red-500" : ""
                  }`}
                  name="firstName"
                  value={formValues.firstName}
                  onChange={handleInputChange}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label htmlFor="last-name" className="block text-gray-800 font-bold mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  className={`block w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-gray-400 ${
                    errors.lastName ? "border-red-500" : ""
                  }`}
                  name="lastName"
                  value={formValues.lastName}
                  onChange={handleInputChange}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-800 font-bold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className={`block w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-gray-400 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  name="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="password" className="block text-gray-800 font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className={`block w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-gray-400 ${
                    errors.password ? "border-red-500" : ""
                  }`}
                  name="password"
                  value={formValues.password}
                  onChange={handleInputChange}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>
              <div>
                <label htmlFor="confirm-password" className="block text-gray-800 font-bold mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className={`block w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-gray-400 ${
                    errors.confirmPassword ? "border-red-500" : ""
                  }`}
                  name="confirmPassword"
                  value={formValues.confirmPassword}
                  onChange={handleInputChange}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                )}
              </div>
              <div className="text-center">        
                  <button
                      type="submit"
                      className="py-3 px-6 bg-gray-800 text-white rounded-lg hover:bg-gray-700"   >
                      Sign Up
                  </button>
              </div>
              <div>
                  <p className='text-xs mt-3 md:text-lg'>Have an account? <Link className=' underline' to='/login'>Login in here</Link></p>
              </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default SignUp;


