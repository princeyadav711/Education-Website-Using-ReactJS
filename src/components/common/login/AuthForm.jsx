import React, { useState } from 'react';
import "./LoginForm.css";

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(''); // State for success message

    const resetForm = () => {
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setError('');
        setSuccess('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!username || !password || (!isLogin && (!email || !confirmPassword))) {
            setError('Please fill in all fields.');
            return;
        }

        if (!isLogin && password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        if (isLogin) {
            // Handle login
            console.log('Logging in with:', { username, password });
        } else {
            // Handle signup
            console.log('Signing up with:', { username, email, password });
            setSuccess('Signup successful!'); // Set success message for signup
        }

        resetForm();
    };

    return (
        <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>} {/* Display success message */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Username:
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            style={{ margin: '10px 0', width: '100%', padding: '8px' }}
                        />
                        <error name="username" component="div" style={{ color: 'red' }} />
                    </label>
                </div>  
                {!isLogin && (
                    <div>
                        <label>
                            Email Address:
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                style={{ margin: '10px 0', width: '100%', padding: '8px' }}
                            />
                        </label>
                    </div>
                )}
                <div>
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{ margin: '10px 0', width: '100%', padding: '8px' }}
                        />
                    </label>
                </div>
                {!isLogin && (
                    <div>
                        <label>
                            Confirm Password:
                            <input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                style={{ margin: '10px 0', width: '100%', padding: '8px' }}
                            />
                        </label>
                    </div>
                )}
                <button type="submit" style={{ padding: '10px 15px', margin: '10px 0' }}>
                    {isLogin ? 'Login' : 'Sign Up'}
                </button>
            </form>
            <p>
                {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                <button
                    onClick={() => {
                        setIsLogin(!isLogin);
                        resetForm();
                    }}
                    style={{ background: 'none', color: 'blue', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
                >
                    {isLogin ? 'Sign Up' : 'Login'}
                </button>
            </p>
        </div>
    );
};

export default AuthForm;

