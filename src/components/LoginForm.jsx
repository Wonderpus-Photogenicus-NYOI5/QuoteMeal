import { useNavigate, Link } from 'react-router-dom';
import React from 'react';


const LoginForm = (props) => {
  const handleSubmit = async (e) => {

  }

  const handleChange = (e) => {

  }

  return (
    <div id='loginForm'>
      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" value={username} onChange={handleChange} />
        </label>
        <br></br>
        <label>
          Password: <input name="password" value={password} onChange={handleChange} />
        </label>
        <br></br>
        <button type="submit">
          Log in
        </button>
      </form>
      <p>
        Don't have an account? Click <Link to="/sign-up">here</Link> to sign up.
      </p>
    </div>
  )
}

export default LoginForm