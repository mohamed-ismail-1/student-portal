import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
            setUser(JSON.parse(loggedInUser));
        } else {
            navigate('/login');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    if (!user) return null;

    return (
        <div className="container mt-5">
            <div className="card shadow border-0 overflow-hidden">
                <div className="bg-primary p-4 text-white text-center">
                    <h1 className="fw-bold">Student Dashboard</h1>
                </div>
                <div className="card-body p-5 text-center">
                    <div className="mb-4">
                        <div className="rounded-circle bg-light d-inline-block p-4 mb-3">
                            <i className="bi bi-person-fill display-1 text-primary"></i>
                        </div>
                        <h2 className="text-dark">Welcome back, {user.name}!</h2>
                        <p className="text-muted fs-5">{user.email}</p>
                    </div>
                    <hr className="my-4" />
                    <div className="row g-3">
                        <div className="col-md-4">
                            <div className="p-3 border rounded bg-light">
                                <h4 className="text-primary">Profile</h4>
                                <p className="small text-muted">View and edit your personal details.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-3 border rounded bg-light">
                                <h4 className="text-primary">Courses</h4>
                                <p className="small text-muted">Browse your enrolled training sessions.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-3 border rounded bg-light">
                                <h4 className="text-primary">Settings</h4>
                                <p className="small text-muted">Manage your account preferences.</p>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleLogout} className="btn btn-outline-danger mt-5 px-5 py-2 fw-bold">
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
