import './Login.scss';

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { path } from '../../ultils/path';

const Login = () => {
    const navigate = useNavigate();

    const handleCreateNewAccount = () => {
        navigate(`${path.register}`);
    };
    return (
        <div className="login-container">
            <div className="container">
                <div className="row p-2 p-lg-4">
                    <div className="left-content d-none d-sm-block col-sm-6">
                        <div className="brand">Log In</div>
                        <div className="content">Click your picture or add an account.</div>
                    </div>
                    <div className="right-content col-12 col-sm-6 border d-flex flex-column gap-4 p-2">
                        <div className="brand d-block d-sm-none">Log In</div>
                        <input className="form-control p-2" placeholder="Email address or phone number" />
                        <input className="form-control p-2" placeholder="Password" />
                        <button className="btn btn-primary">Log In</button>
                        <span className="text-center">
                            <a href="/forgot-password">Forgotten Password</a>
                        </span>
                        <hr />
                        <div className="text-center">
                            <button className="btn btn-success" onClick={handleCreateNewAccount}>
                                Create New Account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
