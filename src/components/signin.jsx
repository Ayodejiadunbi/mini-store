
import {Link} from "react-router-dom"
import { useState } from 'react';

const SignIn=()=>{

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return(
        <>
            <div className="signin" style={{ marginTop:'10rem'}}>
                <div className="row">
                    <div className="col-12" style={{display:'flex' , justifyContent:'center'}}>

                    <form style={{border:'2px solid white',backgroundColor:'white', padding:'2rem 0rem', display:'grid', justifyContent:'center',borderTopLeftRadius:'3rem', borderBottomRightRadius:'3rem', minWidth:'30%'}}>
                        <div style={{display:'grid', justifyContent:'center', marginBottom:'3rem'}}>
                              <h2 style={{fontWeight:'bolder'}}>Welcome Back</h2>
                              <h6 style={{color:'blue'}}>KickOff Where You Left Off</h6>
                        </div>
                       

                        <div style={{display:'grid', justifyContent:'center'}}>
                             <input className="form-control mb-3" type="email" id="email" placeholder="Email" name="email"  style={{width:'25rem', backgroundColor:'#D9D9D9'}}/>
                             <input className="form-control mb-3" type={showPassword ? 'text' : 'password'}  id="password" placeholder="password" name="password" style={{width:'25rem', backgroundColor:'#D9D9D9'}}/>
                             <i
                                className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}
                                style={{ position: 'absolute', right: '38%', top: '57%', transform: 'translateY(-50%)', cursor: 'pointer' }}
                                onClick={togglePasswordVisibility}
                               ></i> 
                        </div>

                        <div style={{display:"flex", justifyContent:'center', gap:'1rem'}}>
                           
                           <Link to='/dashboard'> <button className="btn btn-success" style={{width:'10rem', marginTop:'3rem', marginLeft:'10rem'}}>Login<i className="bi bi-arrow-right"></i></button></Link>
                           <Link to='/forgot' style={{marginRight:'4rem', textDecoration:'none'}}>Forgot Password?</Link>
                        </div>
                       
                    </form>

                    </div>
                </div>
                <div style={{display:'flex', textAlign:'center', gap:'30px', justifyContent:'center', marginTop:'2rem'}}>
                        <h6>Dont Have An Account?</h6>
                        <Link to="/signup" style={{color:'blue', textDecoration:'none'}}>Sign Up</Link>
                 </div>
            </div>
        </>
    )
}

export default SignIn