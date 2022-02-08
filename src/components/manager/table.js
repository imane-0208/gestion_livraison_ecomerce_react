import React, { useEffect, useState } from "react"



const TableRespos = () => {

    const [respos, setRespos] = useState([]);

    const fetchRespos = () => {
        fetch("http://localhost:3000/api/responsableLivraison/")
          .then(response => {
            return response.json()
          })
          .then(data => {
              console.log(data);
              setRespos(data.result)
          })
      }
    
      useEffect(() => {
        fetchRespos()
      }, []);

    //   const CreateManager = () => {
        const [name_manager, setfname] = useState('');
        const [lastname_manager, setlname] = useState('');
        const [email_manager, setemail] = useState('');
        const [password_manager, setpass] = useState('');
        
      
        const handleSubmit = (e) => {
          e.preventDefault();
          const manager = { 
            name_manager,
            lastname_manager,
            email_manager,
            password_manager,
           };
      
          fetch('http://localhost:3000/api/manager/create', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(manager)
          }).then(() => {
            // history.go(-1);
            console.log("hhhhhhhhh");
            
          }).catch(err => {
              console.log("error ; "+err);
          })
        }



    return (

        <div className="main-content">

                <div className="page-content">
                    <div className="container-fluid">

                        
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                    <h4 className="mb-sm-0 font-size-18">Editable Tables</h4>

                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><a href="javascript: void(0);">Tables</a></li>
                                            <li className="breadcrumb-item active">Editable Tables</li>
                                        </ol>
                                    </div>

                                </div>
                            </div>
                        </div>
                        

                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Table Edit</h4>
                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Manager</button>

                                        <form onSubmit={handleSubmit}>


                                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">

      <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">First Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name_manager}
          onChange={(e) => setfname(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Last Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={lastname_manager}
          onChange={(e) => setlname(e.target.value)}/>
  </div>


      
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email_manager}
          onChange={(e) => setemail(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" value={password_manager}
          onChange={(e) => setpass(e.target.value)}/>
  </div>
  
  



        
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary">Add Manager</button>
      </div>
    </div>
  </div>
</div>
</form>






                                        
                                    </div>
                                    <div className="card-body">
        
                                        <div className="table-responsive">
                                            <table className="table table-editable table-nowrap align-middle table-edits">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Name</th>
                                                        <th>Age</th>
                                                        <th>Gender</th>
                                                        <th>Edit</th>
                                                    </tr>
                                                </thead>
                                                    {respos.length > 0 && (
                                                <tbody>
                                                    {respos.map(manager => (
                                                    <tr key={manager.id}>
                                                            
                                                        <td   style={{width: "80px"}}>1</td>
                                                        <td >{manager.name_manager}</td>
                                                        <td >{manager.lastname_manager}</td>
                                                        <td >{manager.email_manager}</td>
                                                        <td style={{width: "100px"}}>
                                                            <a className="btn btn-outline-secondary btn-sm edit" title="Edit">
                                                                <i className="fas fa-pencil-alt"></i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                           ))}

                                                   
                                                </tbody>
                                                           )}
                                                </table>
                                        </div>
        
                                    </div>
                                </div>
                            </div> 
                        </div> 
                        
                    </div> 
                </div>
                

                
                
            </div>


        )
}

export default TableRespos;