import React, { useState } from 'react';

const SignupForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(''); // State for success message

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccess(''); // Clear any previous success message

        if (!username || !email || !password || !confirmPassword) {
            setError('Please fill in all fields.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        // Handle the signup process here
        console.log('Signing up with:', { username, email, password });

        // Display success message
        setSuccess('Signup successful!'); // Set success message
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h2>Sign Up</h2>
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
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{ margin: '10px 0', width: '100%', padding: '8px' }}
                        />
                    </label>
                </div>
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
                <button type="submit" style={{ padding: '10px 15px', margin: '10px 0' }}>Sign Up</button>
            </form>
        </div>
    );
};

export default SignupForm;
