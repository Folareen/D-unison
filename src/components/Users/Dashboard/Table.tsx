import "./Table.css"
const NavTable =() => {
    return(
        <>
                <div className="col-12 col-lg-12">
                    <h5 style={{color:'#060606', fontSize:'14px'}}>Services summary</h5>
                    <div className="table-responsive">
                    <table class="table table-striped" style={{ borderRadius: '3rem', backgroundColor: '#F4F5FA', border: '1px solid rgba(0, 0, 0, 0.10)' }}>
            <thead>
                <tr>
                <th scope="col gt">Prject Name</th>
                <th scope="col">Services provider</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
                <th scope="col">Progress</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td >I will create a website</td>
                <td>Mark Thomas</td>
                <td>May 25, 2023</td>
                <td><button className="btn btn-primary table-btn "><p className="d-flex justify-content-center align-items-center">Completed</p></button></td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td scope="">I will create a website</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td><button className="btn btn-primary table-btn "><p className="d-flex justify-content-center align-items-center">Completed</p></button></td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td scope="row">I will create a website</td>
                <td colspan="2">Larry the Bird</td>
                <td><button className="btn btn-primary table-btn "><p className="d-flex justify-content-center align-items-center">Completed</p></button></td>
                <td>@mdo</td>
                </tr>
            </tbody>
            </table> 

                    </div>

                </div>
        </>
    )
}

export default NavTable;