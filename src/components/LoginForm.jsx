import { useNavigate, Link } from 'react-router-dom'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { loginUsername, loginPassword, updateLoggedIn, updateNoMatch, clearState } from '../reducers/loginreducer';
import { setUsername, setRecipes } from '../reducers/userreducer';

const LoginForm = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.login);
    const { username, password, loggedIn, noMatch } = user;

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
        if (!data) {
            dispatch(updateNoMatch(true));
        } else {
            dispatch(setUsername(data.username));
            dispatch(setRecipes(data.recipes));
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
        <div id="loginForm">
            {noMatch && 
            <p style={{color: 'red'}} >Username / Password do not match</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Username:{' '}
                    <input
                        name="username"
                        value={username}
                        onChange={handleChange}
                    />
                </label>
                <br></br>
                <label>
                    Password:{' '}
                    <input
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                </label>
                <br></br>
                <button type="submit" onClick={e => {
                    e.preventDefault();
                    handleSubmit(e)
                }}>Log in</button>
            </form>
            <p>
                Don't have an account? Click <Link to="/signup">here</Link> to
                sign up.
            </p>
        </div>
    )
}

export default LoginForm
