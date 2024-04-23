
import { Link } from "react-router-dom"
import { useState } from 'react';



const Reset=()=>{

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return(
        <>
        <div className="reset" style={{ marginTop:'10rem'}}>
                <div className="row">
                    <div className="col-12" style={{display:'flex' , justifyContent:'center'}}>

                    <form style={{border:'2px solid white',backgroundColor:'white', padding:'2rem 0rem', display:'grid', justifyContent:'center',borderTopLeftRadius:'3rem', borderBottomRightRadius:'3rem', minWidth:'30%'}}>
                        <div style={{display:'grid', justifyContent:'center', marginBottom:'3rem'}}>
                              <h2 style={{fontWeight:'bolder', paddingLeft:'3rem'}}>Reset Password</h2>
                              <h6 style={{color:'blue'}}>Secure Your Accout With A New Password</h6>
                        </div>
                       

                        <div style={{display:'grid', justifyContent:'center'}}>
                             <i
                                className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}
                                style={{ position: 'absolute', right: '38%', top: '57%', transform: 'translateY(-50%)', cursor: 'pointer' }}
                                onClick={togglePasswordVisibility}
                               ></i> 
                             <input className="form-control mb-3" type={showPassword ? 'text' : 'password'}  id="password" placeholder="New Password" name="password" style={{width:'25rem', backgroundColor:'#D9D9D9'}}/>
                        
                             <input className="form-control mb-3" type={showPassword ? 'text' : 'password'}  id="password" placeholder="Confirm Password" name="confirmPassword" style={{width:'25rem', backgroundColor:'#D9D9D9'}}/>
                             <i
                              className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}
                              style={{ position: 'absolute', right: '38%', top: '49%', transform: 'translateY(-50%)', cursor: 'pointer' }}
                              onClick={togglePasswordVisibility}
                              ></i> 
                         </div>

                        <div style={{display:"flex", justifyContent:'center'}}>
                            <Link to='/dashboard'><button className="btn btn-success" style={{width:'10rem', marginTop:'1rem'}}>Proceed<i className="bi bi-arrow-right"></i></button></Link> 
                        </div>
                    </form>

                    </div>
                </div>
                <div style={{display:'flex', textAlign:'center', gap:'30px', justifyContent:'center', marginTop:'2rem'}}>
                        <h6>Dont Have An Account?</h6>
                        <Link to="/signup" style={{color:'blue', textDecoration:'none'}}>Sign UP</Link>
                </div>
            </div>
        </>
    )
}

export default Reset