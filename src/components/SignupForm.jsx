import React from 'react';

const SignupForm = (props) => {
  const handleChange = (e) => {

  }

  const handleSubmit = (e) => {

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name="username" value={username} onChange={handleChange} />
        </label>
        <br></br>
        <label>
          Password: <input name="password" value={password} onChange={handleChange} />
        </label>
        <br></br>
        <label>
          Confirm Password: <input name="confirmPassword" value={confirmPassword} onChange={handleChange} />
        </label>
        <br></br>
        <button type="submit">
          Log in
        </button>
      </form>
    </div>
  )
}

export default SignupForm