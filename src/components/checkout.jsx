
import { Link } from "react-router-dom"


const CheckOut=()=>{
    return(
        <>
            <div className="checkout" style={{marginTop:"10rem", display:'grid', justifyContent:"center", textAlign:'center'}}>
                <div className="row">
                    <div className="col-12" style={{}}>

                        <div style={{display:'flex', gap:'20px'}}>
                           <div className="card" style={{width: "55rem", marginBottom:'2rem', height:"18rem"}}>
                                  <div className="card-header">
                                     1.CUSTOMER ADDRESS
                                   </div>
                                   <ul className="list-group list-group-flush">
                                       <li className="list-group-item">John Doe</li>
                                       <li className="list-group-item">
                                          <textarea type="text" id='address' placeholder="Enter Your Address" name="address" rows='6' style={{borderColor:"white",width: "52rem"}}/>
                                       </li>
                                   </ul>
                                   
                             </div>
                        </div>
                          

                             <div className="card" style={{width: "55rem"}}>
                                  <div className="card-header">
                                       2.DELIVERY DETAILS
                                   </div>
                                  
                                    <div style={{display:'flex', gap:'20px', marginBottom:'1rem', textAlign:"center", justifyContent:"center", paddingTop:'1rem'}}>
                                         <div className="form-check">
                                               <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                               <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                 Home Delivery
                                               </label>
                                          </div>

                                          <div className="form-check">
                                               <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                               <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                 Pick-Up Station
                                               </label>
                                          </div>

                                    </div>

                             </div>

                             <div className="card" style={{width: "55rem", marginTop:'2rem'}}>
                                <div className="card-header" style={{textAlign:'center'}}>
                                               Pick-Up Station
                                    </div>
                                    <div className="mb-3">
                                                  <select className="form-select" id="services" >
                                                       <option style={{color:'rgb(170, 170, 71)'}}>Select</option>
                                                       <option>Station1</option>
                                                       <option>Station2</option>
                                                       <option>Station3</option>
                                                       <option>Station4</option>
                                                  </select>
                                    </div>
                            </div>    

                            <div className="card" style={{width: "55rem", marginTop:'2rem'}}>
                                <div className="card-header">
                                               3.PAYMENT METHOD
                                    </div>
                                    <div style={{display:'flex', gap:'20px', marginBottom:'1rem', textAlign:"center", justifyContent:"center", paddingTop:'1rem'}}>
                                         <Link to='/payment' className="form-check">
                                               <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                               <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                 Pay with Cards, Bank Transfer or USSD
                                               </label>
                                          </Link>

                                          <div className="form-check">
                                            <Link to='/finalcheckout'>
                                               <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                               <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                 Pay On Delivery
                                               </label>
                                             </Link> 
                                          </div>

                                    </div>
                                    <h6 style={{textAlign:'center'}}>You will be redirected to our secure make payment page.</h6>
                                  
                                    <div className="card-footer" style={{textAlign:'center', textDecoration:'none'}}>
                                           <Link to="/carts" style={{textDecoration:'none'}}> Modify Cart</Link> 
                                    </div>
                            </div>   
                            <Link to="/payment"> <button className="btn1 btn-primary">MAKE PAYMENT</button></Link>      
                    </div>
                        
                  
                </div>
            </div>

        </>
    )
}

export default CheckOut