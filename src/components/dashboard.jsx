import {Link} from "react-router-dom"


const Dashboard=()=>{
    return(
        <>
            <div className="dashboard" style={{marginTop:'10rem', width:"80%"}}>

               
                <div className="row">
                    <div className="col-12">
                                <div style={{display:'flex', gap:'50px', float:'right'}}>

                                      <div style={{ display:'flex'}}>
                                            <i className="bi bi-person" style={{fontSize:'2rem'}}></i>
                                             <h6 style={{paddingTop:'20px'}}>Hi Shopper</h6>
                                      </div>

                                      <Link to='/carts' style={{ display:'flex' , textDecoration:'none'}}>
                                              <i className="bi bi-cart3" style={{fontSize:'2rem'}}></i>
                                             <h6 style={{paddingTop:'20px'}}>Carts</h6> 
                                      </Link>
                                </div>
                    </div>

                    <div className="col-12" style={{display:'flex', justifyContent:'center', marginLeft:"8rem"}}>

                        <div className="card" style={{width: "70rem", height:'20rem'}}>
                                  <div className="card-header" style={{marginBottom:'2rem', textAlign:'center'}}>
                                    Account Overview
                                  </div>
                                  
                            <div style={{display:'flex', gap:'50px', justifyContent:'center'}}>
                                    <div className="card" style={{width: "30rem"}}>
                                        <div className="card-header">
                                            Account Details
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">John Doe</li>
                                            <li className="list-group-item">johndoe27@gmail.com</li>
                                            <li className="list-group-item">+444-789-0235</li>
                                        </ul>
                                    </div>

                                   <div className="card" style={{width: "30rem"}}>
                                        <div className="card-header">
                                            Address Book
                                        </div>
                                            <textarea className="text" rows='5' placeholder="Enter Your Address" style={{borderColor:'white'}}/>
                                    </div>
                            </div>
                        </div> 
                    </div>
                </div>

            </div>
        </>
    )
}

export default Dashboard