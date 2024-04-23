
import { Link } from "react-router-dom"
import { useState } from 'react';



const SignUp=()=>{

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return(
        <>
        <div className="signup" style={{ marginTop:'10rem'}}>
                <div className="row">
                    <div className="col-12" style={{display:'flex' , justifyContent:'center'}}>

                    <form style={{border:'2px solid white',backgroundColor:'white', padding:'2rem 0rem', display:'grid', justifyContent:'center',borderTopLeftRadius:'3rem', borderBottomRightRadius:'3rem', minWidth:'30%'}}>
                        <div style={{display:'grid', justifyContent:'center', marginBottom:'3rem'}}>
                              <h2 style={{fontWeight:'bolder', paddingLeft:'5rem'}}>Welcome</h2>
                              <h6 style={{color:'blue'}}>Unlock a world of shopping and convenience </h6>
                        </div>
                       

                        <div style={{display:'grid', justifyContent:'center'}}>
                             <input className="form-control mb-3" type="email" id="email" placeholder="Email" name="email"  style={{width:'25rem', backgroundColor:'#D9D9D9'}}/>
                             <i
                                className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}
                                style={{ position: 'absolute', right: '38%', top: '57%', transform: 'translateY(-50%)', cursor: 'pointer' }}
                                onClick={togglePasswordVisibility}
                               ></i> 
                             <input className="form-control mb-3" type={showPassword ? 'text' : 'password'}  id="password" placeholder="password" name="password" style={{width:'25rem', backgroundColor:'#D9D9D9'}}/>
                        
                             <input className="form-control mb-3" type={showPassword ? 'text' : 'password'}  id="password" placeholder="Confirm password" name="confirmPassword" style={{width:'25rem', backgroundColor:'#D9D9D9'}}/>
                             <i
                              className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}
                              style={{ position: 'absolute', right: '38%', top: '65%', transform: 'translateY(-50%)', cursor: 'pointer' }}
                              onClick={togglePasswordVisibility}
                              ></i> 
                         </div>

                        <div style={{display:"flex", justifyContent:'center'}}>
                          <Link to="/emailverification"><button className="btn btn-success" style={{width:'10rem', marginTop:'1rem'}}>Sign Up<i className="bi bi-arrow-right"></i></button></Link>
                        </div>

                        <div className='mb-1 mt-5 line'></div>
                        <div className='mb-3 line'></div>
                       
                       <p style={{textAlign:'center',color:'rgb(174, 171, 171)' }}>OR</p>

                        <button type='submit' className='btn btn-dark d-flex align-items-center' style={{width:'15rem', borderRadius : '1.5rem', marginLeft:'5rem'}}>
                            <i className="bi bi-google" style={{padding:'5px', color: 'red'}}></i>
                             Continue With Google
                        </button>   
                    </form>

                    

                    </div>
                </div>
                <div style={{display:'flex', textAlign:'center', gap:'30px', justifyContent:'center', marginTop:'2rem'}}>
                        <h6>Already Have An Account?</h6>
                        <Link to="/signin" style={{color:'blue', textDecoration:'none'}}>Sign In</Link>
                    </div>
            </div>
        </>
    )
}

export default SignUp