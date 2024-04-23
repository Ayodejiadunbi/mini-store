

import { Link } from "react-router-dom"



const Payment=()=>{
    return(
        <>
            <div className="payment" style={{marginTop:'8rem', display:'grid', justifyContent:'center'}}>
                <div className="row">
                    <div className="col-12">
                        <div className="card-header" style={{display:'flex', gap:'23rem'}}>
                                <h6 style={{paddingLeft:"10px"}}>CART SUMMARY</h6>
                                <Link to='/carts' style={{textDecoration:'none'}}><h6>SEE DETAILS<i className="bi bi-arrow-right"></i></h6></Link>
                        </div>

                         <h6 style={{marginTop:'30px', paddingLeft:"10px"}}>CHOOSE A PAYMENT METHOD</h6>

                         <div className="card" style={{width: "40rem", padding:'20px', marginBottom:"10px"}}>
                             
                                    <div className="form-check" >
                                         <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                         <label className="form-check-label" htmlFor="flexRadioDefault2">
                                             Pay with USSD or BankTransfer
                                         </label>
                                    </div>

                                    <div className="mt-3">
                                                  <select className="form-select" id="services" >
                                                       <option style={{color:'rgb(170, 170, 71)'}}>Select</option>
                                                       <option>BANK NAME:Royal Bank Of Canada--ACCOUNT NAME:9012-2125-0000</option>
                                                       <option>BANK NAME:Royal Bank Of SPAIN--ACCOUNT NAME:9012-2125-0000</option>
                                                       <option>BANK NAME:ECOBANK NIGERIA--ACCOUNT NAME:3840-00-7368</option>
                                                       <option>BANK NAME:Royal Bank Of Canada--ACCOUNT NAME:9012-2125-0000</option>
                                                  </select>
                                    </div>

                                    <h6 style={{paddingTop:'30px', textAlign:'center', color:'rgb(116, 113, 113)'}}>Copy The Bank Details And Make The Payment</h6>
                        </div>
                               
                       
                               
                        <div className="card" style={{width: "40rem", padding:'20px'}}>
                                   <div className="form-check">
                                         <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                         <label className="form-check-label" htmlFor="flexRadioDefault2">
                                           <Link to='/paymentform' style={{textDecoration:'none'}}> Pay with Mastercard and Visa</Link>
                                        </label>
                                    </div>
                                    <h6 style={{paddingTop:'30px', textAlign:'center', color:'rgb(116, 113, 113)'}}>Click To Enter Your Card Details</h6>
                         </div>
                    </div>
                </div>

                    <div>
                        <Link to='/finalcheckout'><button className="btn btn-primary" style={{width:"40rem", margin:'2rem 0rem'}}>PAY NOW</button></Link>   
                         <h6 style={{textAlign:'center'}}>Please note: we will never ask you for your password, PIN, CVV or<br/> full card details over the phone or via email.<br/>
                           Need help? 
                          <Link to='/contact' style={{paddingLeft:'5px', textDecoration:'none'}}>Contact us</Link> 
                         </h6>
                   </div>
            </div>

        </>
    )
}

export default Payment