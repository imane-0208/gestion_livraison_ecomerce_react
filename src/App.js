import React from "react";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";


import Login from "./components/admin/login";
import DashAdmin from "./components/admin/dashAdmin";


function App() {
  return (
    


    <Router>
    
    
    
    <Routes>
       <Route exact path="/login"               element={<Login/>}/>
       <Route exact path="/dashAdmin"               element={<DashAdmin/>}/>
    </Routes>

    

    
    
      
    
    </Router>
  );
}

export default App;
