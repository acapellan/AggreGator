import React from 'react';
import treeBackground from '../resources/images/background.png';
import logo from '../resources/images/logo_square.png';

const SignUp = () => {
    return (
        <>
            <div className="container-fluid" style={{backgroundImage:`url(${treeBackground})`, backgroundSize:"cover", backgroundRepeat:"repeat"}}>
                <div className="py-5">
                    <div className="text-center">
                        <img src={logo} className="rounded mb-4" width="192" height="192"/>
                        <h1 className="display-5 fw-bold text-white mb-4">We're so glad you're here!</h1>
                        <p className="lead mb-4 text-white">Before you can start using the full power of the Aggregator, we need a little bit of information from you.</p>
                    </div>
                    <form className="row justify-content-center text-center">
                        <div className=" col-sm-8 col-md-7 col-lg-6 col-xl-4 col-xxl-3 overflow-hidden">
                            <div className="row py-3 px-2 g-3 bg-light bg-opacity-75">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                    <input type="text" className="form-control" id="floatingFirstName" placeholder="Jane" />
                                    <label for="floatingFirstName">First name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                    <input type="text" className="form-control" id="floatingLastName" placeholder="Doe"/>
                                    <label for="floatingLastName">Last name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                    <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" />
                                    <label for="floatingEmail">Email address</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="password"/>
                                    <label for="floatingPassword">Password</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="bg-white py-2 px-3 text-start rounded">
                                        <label className="me-2" for="accountType">I am a ...</label>
                                        <select className="custom-select rounded" size="lg" id="accountType">
                                            <option selected>Choose...</option>
                                            <option value="1">Student</option>
                                            <option value="2">Professor</option>
                                            <option value="3">TA</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignUp;