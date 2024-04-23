
import { Link } from "react-router-dom";
import { useState } from "react";

const PaymentForm=()=>{

    const [expiry, setExpiry] = useState('');

    const handleExpiryChange = (e) => {
      let value = e.target.value;
      // Ensure only numbers are entered
      value = value.replace(/\D/g, '');
      // Insert '/' after the second character
      if (value.length > 2) {
        value = value.slice(0, 2) + '/' + value.slice(2);
      }
      setExpiry(value);
    };


    return(
        <>

             <div className="paymentform" style={{marginTop:'5rem'}}>
                <div className="row">
                    <div className="col-12" style={{display:'flex' , justifyContent:'center'}}>
                        
                           <form style={{marginTop:'3rem',border:'2px solid white',backgroundColor:'white', padding:'2rem 0rem', display:'grid', justifyContent:'center',borderTopLeftRadius:'3rem', borderBottomRightRadius:'3rem', minWidth:'30%'}}>
                              <h6 style={{color:'rgb(116, 113, 113)', paddingLeft:'6rem', marginBottom:'1rem'}}>Enter Card Details</h6>
                                  <div>
                                    <label  htmlFor="cardType" style={{paddingRight:'30px'}}>Card Type</label>
                                        <select id="cardType" name="cardType" style={{backgroundColor:'#D9D9D9', width:'13rem', borderRadius:'5px', marginBottom:'1rem', borderColor:"#D9D9D9"}}>
                                              <option value="visa">Visa</option>
                                              <option value="mastercard">MasterCard</option>
                                              <option value="amex">American Express</option>
                                              <option value="discover">Discover</option>
                                        </select>
                                  </div>

                                  <div >
                                     <label  htmlFor="cardNumber" style={{paddingRight:'10px'}}>Card Number</label>
                                        <input  type="text" id="number" name="cardNumber" placeholder="Card Number" style={{backgroundColor:'#D9D9D9', width:'13rem', borderRadius:'5px', marginBottom:'1rem', borderColor:"#D9D9D9"}}/>
                                  </div>

                                  <div >
                                      <label  htmlFor="cardExpiry" style={{paddingRight:'10px'}}>Expiry Date</label>
                                       <input  type="text" id="number" name="cardExpiry" placeholder="MM/YY" value={expiry} onChange={handleExpiryChange} style={{backgroundColor:'#D9D9D9', width:'13rem', borderRadius:'5px', marginBottom:'1rem', borderColor:"#D9D9D9"}}/>
                                  </div>

                                  <div>
                                    <label  htmlFor="cvv" style={{paddingRight:'60px'}}>CVV</label>
                                    <input  type="text" id="number" name="cvv" placeholder="CVV" style={{backgroundColor:'#D9D9D9', width:'13rem', borderRadius:'5px', marginBottom:'2rem', borderColor:"#D9D9D9"}}/>
                                  </div>

                                 <Link to='/payment'><button className="btn btn-outline-primary" style={{width:'10rem', marginLeft:'5rem'}}>Submit</button></Link> 
                         </form>

                    </div>
                </div>
                   

                        
            </div>
        </>
    )
}

export default PaymentForm