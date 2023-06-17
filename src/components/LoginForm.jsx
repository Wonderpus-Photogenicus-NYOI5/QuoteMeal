import { useNavigate, Link } from 'react-router-dom'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { loginUsername, loginPassword, updateNoMatch, clearState } from '../reducers/loginreducer';
import { setUsername, setRecipes, updateLoggedIn } from '../reducers/userreducer';

const LoginForm = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.login);
    const { username, password, noMatch } = user;

    const handleSubmit = async (e) => {
        if (username === '' || password === '') {
            dispatch(updateNoMatch(true));
            return;
        }
        const res = await fetch('/api/user/login', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                username, password
            }),
        });
        const data = await res.json();
        console.log(data.recipes)
        if (!data) {
            dispatch(updateNoMatch(true));
        } else {
            dispatch(setUsername(data.username));
            dispatch(setRecipes(data.recipes));
            dispatch(updateLoggedIn(true));
            dispatch(clearState());
            return navigate('/');
        }
    }

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        if (name === 'username') {
        dispatch(loginUsername(value));
        }
        if (name === 'password'){
        dispatch(loginPassword(value));
        }
    }

    return (
        <div className='form-control mt-10 sm:mx-auto sm:w-full sm:max-w-sm' id="loginForm">
            {noMatch && 
                <p style={{ color: 'red' }} >Username / Password do not match</p>}
            
            <form onSubmit={handleSubmit}>
            <label className="label">
            <span className="label-text">Username</span>
            </label>
            <label className="input-group">
            <input type="text" placeholder="Username" className="input input-bordered input-primary w-full max-w-xs" name="username" value={username} onChange={handleChange}/>
            </label>

            <label className="label">
            <span className="label-text">Password</span>
            </label>
            <label className="input-group">
            <input type="password" placeholder="Password" className="input input-bordered input-primary w-full max-w-xs" name="password" value={password} onChange={handleChange}/>
                </label>
                <button className="btn btn-primary flex justify-center rounded-md  hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="submit" onClick={e => {
                    e.preventDefault();
                    handleSubmit(e)
                }}>Log In</button>
            </form>
            <p>
                Don't have an account? <Link className = "link link-primary" to="/signup">Click here</Link> to
                sign up.
            </p>
        </div>
    )
}

export default LoginForm
