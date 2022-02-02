const sidbar = () => {

    
    return (
    
    






  <div id="page-topbar">
                <div className="navbar-header">
                    <div className="d-flex">
                        
                        <div className="navbar-brand-box">
                            <a href="index.html" className="logo logo-dark">
                                <span className="logo-sm">
                                    <img src="/assets/images/logo-sm.svg" alt="" height="24"/>
                                </span>
                                <span className="logo-lg">
                                    <img src="/assets/images/logo-sm.svg" alt="" height="24"/> <span className="logo-txt">Minia</span>
                                </span>
                            </a>

                            <a href="index.html" className="logo logo-light">
                                <span className="logo-sm">
                                    <img src="/assets/images/logo-sm.svg" alt="" height="24"/>
                                </span>
                                <span className="logo-lg">
                                    <img src="/assets/images/logo-sm.svg" alt="" height="24"/> <span className="logo-txt">Minia</span>
                                </span>
                            </a>
                        </div>

                        <button type="button" className="btn btn-sm px-3 font-size-16 header-item" id="vertical-menu-btn">
                            <i className="fa fa-fw fa-bars"></i>
                        </button>

                        
                        <form className="app-search d-none d-lg-block">
                            <div className="position-relative">
                                <input type="text" className="form-control" placeholder="Search..."/>
                                <button className="btn btn-primary" type="button"><i className="bx bx-search-alt align-middle"></i></button>
                            </div>
                        </form>
                    </div>

                    <div className="d-flex">

                        <div className="dropdown d-inline-block d-lg-none ms-2">
                            <button type="button" className="btn header-item" id="page-header-search-dropdown"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i data-feather="search" className="icon-lg"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                                aria-labelledby="page-header-search-dropdown">
        
                                <form className="p-3">
                                    <div className="form-group m-0">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search ..." aria-label="Search Result"/>

                                            <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify"></i></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                       

                        <div className="dropdown d-inline-block">
                            <button type="button" className="btn header-item bg-soft-light border-start border-end" id="page-header-user-dropdown"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img className="rounded-circle header-profile-user" src="/assets/images/users/avatar-1.jpg"
                                    alt="Header Avatar"/>
                                <span className="d-none d-xl-inline-block ms-1 fw-medium">Shawn L.</span>
                                <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                                
                                <a className="dropdown-item" href="apps-contacts-profile.html"><i className="mdi mdi-face-profile font-size-16 align-middle me-1"></i> Profile</a>
                                <a className="dropdown-item" href="auth-lock-screen.html"><i className="mdi mdi-lock font-size-16 align-middle me-1"></i> Lock Screen</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="auth-logout.html"><i className="mdi mdi-logout font-size-16 align-middle me-1"></i> Logout</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

 






   
);
}

export default sidbar;