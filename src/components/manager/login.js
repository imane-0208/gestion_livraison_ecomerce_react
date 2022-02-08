import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { isExpired, decodeToken } from "react-jwt";





const LoginManager = () => {
    const navigate= useNavigate();
    const [email_manager, setEmail] = useState('');
    const [password_manager, setPassword] = useState('');
    

    const handleSubmit = e => {
        e.preventDefault();

        const manager = { 
            email_manager,
            password_manager
           };

        //    console.log(manager);

           


           fetch('http://localhost:3000/api/manager/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(manager)
        }).then((response) => response.json())

        .then((result) => {
            console.log(result);

            console.log(result.token);
            if(result.token){;
                console.log("ozekrtyuiomlkjh");
                localStorage.setItem('token',result.token)
                localStorage.setItem('data_user',JSON.stringify(result.data_login_admin))
              
                navigate('/dashManager')
             } else {
                 console.log("baaaaa3");
                 
             }
          });
        //  {
        //       console.log(response.data.token);
        //     console.log(response);
        //       setError('response : '+response)
        //     if(response.data.token){
        //         localStorage.setItem('token',response.data.token)
        //         localStorage.setItem('manager',JSON.stringify(response.data.data_login_admin))


        //         const data_login_admin = {
        //             email_manager: response.data.data_login_admin.email_manager,
        //             lastname: response.data.data_login_admin.lastname,
        //             name: response.data.data_login_admin.name,
        //             id: response.data.data_login_admin._id
        //         }

        //         localStorage.setItem('data_user',JSON.stringify(data_login_admin))
        //         console.log(data_login_admin);
        //     }
            
        //     console.log("hhhhhhhhh");
            
        //   }).catch(err => {
        //       console.log("error ; "+err);
        //   })
    }

    
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
                                            <img src="/assets/images/logo-sm.svg" alt="" height="28"/> <span className="logo-txt">MarocShip</span>
                                        </a>
                                    </div>
                                    <div className="auth-content my-auto">
                                        <div className="text-center">
                                            <h5 className="mb-0">Welcome Back !</h5>
                                            <p className="text-muted mt-2">Sign in to continue to MarocShip.</p>
                                        </div>
                                        <form className="mt-4 pt-2" action="https://themesbrand.com/minia/layouts/index.html" onSubmit={handleSubmit}>
                                            <div className="mb-3">
                                                <label className="form-label">Username</label>
                                                <input type="text" className="form-control" id="username" placeholder="Enter username" value={email_manager}
                                                onChange={e => setEmail(e.target.value)}/>
                                            </div>
                                            <div className="mb-3">
                                                <div className="d-flex align-items-start">
                                                    <div className="flex-grow-1">
                                                        <label className="form-label">Password</label>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <div className="">
                                                            <a href="auth-recoverpw.html" className="text-muted">Forgot password_manager?</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="input-group auth-pass-inputgroup">
                                                    <input type="password" className="form-control" placeholder="Enter password_manager" aria-label="Password" aria-describedby="password_manager-addon" value={password_manager}
                                                        onChange={e => setPassword(e.target.value)}/>
                                                    <button className="btn btn-light shadow-none ms-0" type="button" id="password_manager-addon"><i className="mdi mdi-eye-outline"></i></button>
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

export default LoginManager;