import React, { useState } from 'react';
import { registerStudent } from '../services/api';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');
        
        // Form Validation
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        try {
            await registerStudent({
                name: formData.name,
                email: formData.email,
                password: formData.password
            });
            setSuccess("Registration successful! Redirecting to login...");
            setTimeout(() => navigate('/login'), 2000);
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed.');
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card shadow border-0">
                        <div className="card-body p-4">
                            <h2 className="text-center mb-4 fw-bold text-success">Register Student</h2>
                            {error && <div className="alert alert-danger">{error}</div>}
                            {success && <div className="alert alert-success">{success}</div>}
                            <form onSubmit={handleRegister}>
                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input name="name" type="text" className="form-control" onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email Address</label>
                                    <input name="email" type="email" className="form-control" onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input name="password" type="password" className="form-control" onChange={handleChange} required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Confirm Password</label>
                                    <input name="confirmPassword" type="password" className="form-control" onChange={handleChange} required />
                                </div>
                                <button type="submit" className="btn btn-success w-100 py-2">Register</button>
                            </form>
                            <div className="text-center mt-3">
                                <p>Already registered? <Link to="/login">Login Here</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
