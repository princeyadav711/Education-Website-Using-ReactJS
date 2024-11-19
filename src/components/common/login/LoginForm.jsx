import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./LoginForm.css";

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required('Username is required'),
            email: !isLogin ? Yup.string().email('Invalid email format').required('Email is required') : undefined,
            password: Yup.string()
                .required('Password is required')
                .min(6, 'Password must be at least 6 characters'),
            confirmPassword: !isLogin
                ? Yup.string()
                      .oneOf([Yup.ref('password'), null], 'Passwords must match')
                      .required('Confirm Password is required')
                : undefined,
        }),
        onSubmit: (values) => {
            setError('');
            if (isLogin) {
                // Handle login
                console.log('Logging in with:', { username: values.username, password: values.password });
                setSuccessMessage("Login successful!"); // Show success message after login
            } else {
                // Handle signup
                console.log('Signing up with:', values);
                setSuccessMessage("Successfully signed up!"); // Set success message after signup
            }
            formik.resetForm();
        },
    });

    return (
        <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h2 className='center'>{isLogin ? 'Login' : 'Sign Up'}</h2>
            
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>} {/* Display success message */}
            
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label>
                        Username:
                        <input
                            type="text"
                            name="username"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            required
                            style={{ margin: '10px 0', width: '100%', padding: '8px' }}
                        />
                        {formik.touched.username && formik.errors.username ? (
                            <p style={{ color: 'red' }}>{formik.errors.username}</p>
                        ) : null}
                    </label>
                </div>
                {!isLogin && (
                    <div>
                        <label>
                            Email Address:
                            <input
                                type="email"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                                style={{ margin: '10px 0', width: '100%', padding: '8px' }}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <p style={{ color: 'red' }}>{formik.errors.email}</p>
                            ) : null}
                        </label>
                    </div>
                )}
                <div>
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            required
                            style={{ margin: '10px 0', width: '100%', padding: '8px' }}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <p style={{ color: 'red' }}>{formik.errors.password}</p>
                        ) : null}
                    </label>
                </div>
                {!isLogin && (
                    <div>
                        <label>
                            Confirm Password:
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formik.values.confirmPassword}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                                style={{ margin: '10px 0', width: '100%', padding: '8px' }}
                            />
                            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                <p style={{ color: 'red' }}>{formik.errors.confirmPassword}</p>
                            ) : null}
                        </label>
                    </div>
                )}
                <div className='btnlayout'>
                    <button type="submit" style={{ padding: '10px 15px', margin: '10px 0' }} className='btn'>
                        {isLogin ? 'Login' : 'Sign Up'}
                    </button>
                </div>
            </form>
            <p>
                {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                <button 
                    onClick={() => {
                        setIsLogin(!isLogin);
                        setSuccessMessage(''); // Clear success message when switching forms
                        formik.resetForm();
                    }}
                    style={{ background: 'none', color: 'blue', fontSize: '18px', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
                 >
                    {isLogin ? 'Sign Up' : 'Login'}
                </button>
            </p>
        </div>
    );
};

export default AuthForm;
