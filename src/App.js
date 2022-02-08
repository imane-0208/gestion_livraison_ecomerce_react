import React from "react";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";


import Login from "./components/admin/login";
import DashAdmin from "./components/admin/dashAdmin";

import LoginMnager from "./components/manager/login";
import DashManager from "./components/manager/dashManager";


function App() {
  return (
    


    <Router>
    
    
    
    <Routes>

       {/* Admin */}
       <Route exact path="/login"               element={<Login/>}/>
       <Route exact path="/dashAdmin"               element={<DashAdmin/>}/>

       {/* manager */}
       <Route exact path="/loginManager"               element={<LoginMnager/>}/>
       <Route exact path="/dashManager"               element={<DashManager/>}/>




    </Routes>

    

    
    
      
    
    </Router>
  );
}

export default App;
