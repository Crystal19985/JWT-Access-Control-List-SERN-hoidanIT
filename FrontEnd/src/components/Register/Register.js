import './Register.scss';

import React from 'react';

const Register = () => {
    return (
        <div className="register-container">
            <div className="container">
                <div className="row p-2 p-lg-4">
                    <div className="left-content d-none d-sm-block col-sm-6">
                        <div className="brand">Register</div>
                        <div className="content">Click your picture or add an account.</div>
                    </div>
                    <div className="right-content col-12 col-sm-6 border d-flex flex-column gap-4 p-2">
                        <div className="brand d-block d-sm-none">Register</div>
                        <div className='form-group'>
                            <label className='form-label'>Email : </label>
                            <input className="form-control p-2" placeholder="Email address" />
                        </div>

                       

                        <div className='form-group'>
                            <label className='form-label'>Phone number : </label>
                            <input className="form-control p-2" placeholder="phone number" />
                        </div>

                        <div className='form-group'>
                            <label className='form-label'>Password : </label>
                            <input className="form-control p-2" placeholder="Password" />
                        </div>

                        <div className='form-group'>
                            <label className='form-label'>Re-enter password : </label>
                            <input className="form-control p-2" placeholder="Re-enter password" />
                        </div>
                        
                        <button className="btn btn-primary">Register</button>
                        <span className="text-center">
                            <a href="/forgot-password">Forgotten Password</a>
                        </span>
                        <hr />
                        <div className="text-center">
                            <button className="btn btn-success">Back to Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
