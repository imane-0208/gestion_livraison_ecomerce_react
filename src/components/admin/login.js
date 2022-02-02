const loginAdmin = () => {

    
    return (


        <div className="auth-page">
            <div className="container-fluid p-0">
                <div className="row g-0 justify-content-center" >
                    <div className="col-xxl-3 col-lg-4 col-md-5">
                        <div className="auth-full-page-content d-flex p-sm-5 p-4">
                            <div className="w-100">
                                <div className="d-flex flex-column h-100">
                                    <div className="mb-4 mb-md-5 text-center">
                                        <a href="index.html" className="d-block auth-logo">
                                            <img src="/assets/images/logo-sm.svg" alt="" height="28"/> <span className="logo-txt">Minia</span>
                                        </a>
                                    </div>
                                    <div className="auth-content my-auto">
                                        <div className="text-center">
                                            <h5 className="mb-0">Welcome Back !</h5>
                                            <p className="text-muted mt-2">Sign in to continue to Minia.</p>
                                        </div>
                                        <form className="mt-4 pt-2" action="https://themesbrand.com/minia/layouts/index.html">
                                            <div className="mb-3">
                                                <label className="form-label">Username</label>
                                                <input type="text" className="form-control" id="username" placeholder="Enter username"/>
                                            </div>
                                            <div className="mb-3">
                                                <div className="d-flex align-items-start">
                                                    <div className="flex-grow-1">
                                                        <label className="form-label">Password</label>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <div className="">
                                                            <a href="auth-recoverpw.html" className="text-muted">Forgot password?</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="input-group auth-pass-inputgroup">
                                                    <input type="password" className="form-control" placeholder="Enter password" aria-label="Password" aria-describedby="password-addon"/>
                                                    <button className="btn btn-light shadow-none ms-0" type="button" id="password-addon"><i className="mdi mdi-eye-outline"></i></button>
                                                </div>
                                            </div>
                                            <div className="row mb-4">
                                                <div className="col">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" id="remember-check"/>
                                                        <label className="form-check-label" for="remember-check">
                                                            Remember me
                                                        </label>
                                                    </div>  
                                                </div>
                                                
                                            </div>
                                            <div className="mb-3">
                                                <button className="btn btn-primary w-100 waves-effect waves-light" type="submit">Log In</button>
                                            </div>
                                        </form>

                                        

                                        
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        {/* <!-- end auth full page content --> */}
                    </div>
                    
                </div>
                {/* <!-- end row --> */}
            </div>
            {/* <!-- end container fluid --> */}
        </div>


        );
}

export default loginAdmin;