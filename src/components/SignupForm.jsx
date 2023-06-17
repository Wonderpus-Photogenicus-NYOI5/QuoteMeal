import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateLogin } from '../reducers/loginreducer';


const SignupForm = (props) => {
  const form = useSelector(state => state.login);
  const { username, password, confirmPassword, firstName, lastName, email } = form;

  const handleChange = (e) => {
    const value = e.target.value;
    console.log(e.target)
  }

  const handleSubmit = (e) => {

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" value={username} onChange={e => handleChange(e)} />
        </label>
        <br></br>
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
        <button type="submit">
          Log in
        </button>
      </form>
    </div>
  )
}

export default SignupForm;