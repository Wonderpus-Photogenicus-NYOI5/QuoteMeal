import { useNavigate, Link } from 'react-router-dom'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

const LoginForm = (props) => {
    const dispatch = useDispatch();
    const username = useSelector(state => state.login.username);
    const password = useSelector(state => state.login.password);

    const handleSubmit = async (e) => {
        const data = await fetch('/api/user/login', {
            headers: {
                Accept: 'application/json',
                'content-Type': 'application.json',
            },
            method: 'POST',
            body: JSON.stringify({
                username: 'Elinor',
                password: 'password',
            }),
        })
        const res = data.json()
        dispatch()
    }

    const handleChange = (e) => {}

    return (
        <div id="loginForm">
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
                <button type="submit">Log in</button>
            </form>
            <p>
                Don't have an account? Click <Link to="/signup">here</Link> to
                sign up.
            </p>
        </div>
    )
}

export default LoginForm
