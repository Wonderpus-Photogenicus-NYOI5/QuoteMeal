import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUsername, updatePassword, updateConfirmPassword, updateFirstName, updateLastName, updateEmail, updateWrongPassword, clearState } from '../reducers/signupreducer';


const SignupForm = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const form = useSelector(state => state.signup);
  const { username, password, confirmPassword, firstName, lastName, email, wrongPassword } = form;

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    if (name === 'username') {
      dispatch(updateUsername(value));
    }
    if (name === 'password'){
      dispatch(updatePassword(value));
    }
    if (name === 'confirmPassword'){
      dispatch(updateConfirmPassword(value));
    }
    if (name === 'firstName'){
      dispatch(updateFirstName(value));
    }
    if (name === 'lastName'){
      dispatch(updateLastName(value));
    }
    if(name === 'email'){
      dispatch(updateEmail(value));
    }
  }

  const handleSubmit = async (e) => {
    if (password !== confirmPassword) {
      dispatch(updateWrongPassword(true));
    } else {
      const res = await fetch('/api/user/signup', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, firstName, lastName, email }),
      });
      const data = res.json();
      if (data) {
        dispatch(clearState())
        return navigate('/login');
      } else {
        dispatch(updateWrongPassword(true));
        dispatch(clearState())
      }
    }
  };

  return (
    <div className='form-control mt-10 sm:mx-auto sm:w-full sm:max-w-sm' id="signupForm">
      <form onSubmit={handleSubmit}>
      <label className="label">
        <span className="label-text">Username</span>
      </label>
      <label className="input-group ">
          <input name="username" value={username} onChange={e => handleChange(e)} className="input input-bordered input-primary w-full max-w-xs" />
      </label>

        {wrongPassword && 
          <p style={{ color: 'red' }}>Passwords do not match</p>}
        
        <label className="label">
        <span className="label-text">Password</span>
        </label>
        <label className="input-group ">
        <input name="password" type="password" value={password} onChange={e => handleChange(e)} className="input input-bordered input-primary w-full max-w-xs" />
        </label>
        <label className="label">
        <span className="label-text">Confirm Password</span>
        </label>
        <label className="input-group">
          <input name="confirmPassword" type="password" value={confirmPassword} onChange={e => handleChange(e)} className="input input-bordered input-primary w-full max-w-xs"/>
        </label>
        <label className="label">
        <span className="label-text">First Name</span>
        </label>
        <label className="input-group">
        <input name="firstName" value={firstName} onChange={e => handleChange(e)} className="input input-bordered input-primary w-full max-w-xs"/>
        </label>
        <label className="label">
        <span className="label-text">Last Name</span>
        </label>
        <label className="input-group">
          <input name="lastName" value={lastName} onChange={e => handleChange(e)} className="input input-bordered input-primary w-full max-w-xs"/>
        </label>
        <label className="label">
        <span className="label-text">Email</span>
        </label>
        <label className="input-group">
          <input name="email" value={email} onChange={e => handleChange(e)} className="input input-bordered input-primary w-full max-w-xs"/>
        </label>
        <br></br>
        <button type="submit" onClick={e => {
          e.preventDefault();
          handleSubmit(e);
        }} className="btn btn-primary flex justify-center rounded-md  hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Log in
        </button>
      </form>
    </div>
  )
}

export default SignupForm;