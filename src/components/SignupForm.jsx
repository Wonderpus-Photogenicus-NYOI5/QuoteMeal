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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" value={username} onChange={e => handleChange(e)} />
        </label>
        <br></br>
        {wrongPassword && 
        <p style={{color: 'red'}}>Passwords do not match</p>}
        <label>
          Password: <input name="password" value={password} onChange={e => handleChange(e)} />
        </label>
        <br></br>
        <label>
          Confirm Password: <input name="confirmPassword" value={confirmPassword} onChange={e => handleChange(e)} />
        </label>
        <br></br>
        <label>
          First Name: <input name="firstName" value={firstName} onChange={e => handleChange(e)} />
        </label>
        <br></br>
        <label>
          Last Name: <input name="lastName" value={lastName} onChange={e => handleChange(e)} />
        </label>
        <br></br>
        <label>
          Email: <input name="email" value={email} onChange={e => handleChange(e)} />
        </label>
        <br></br>
        <button type="submit" onClick={e => {
          e.preventDefault();
          handleSubmit(e);
        }}>
          Log in
        </button>
      </form>
    </div>
  )
}

export default SignupForm;