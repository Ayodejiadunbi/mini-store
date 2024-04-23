
import {Link} from 'react-router-dom'

const Email=()=>{
    return(
        <>
        <div className="emailVerification" style={{ marginTop:'10rem'}}>
                <div className="row">
                    <div className="col-12" style={{display:'flex' , justifyContent:'center'}}>

                    <form style={{border:'2px solid white',backgroundColor:'white', padding:'2rem 0rem', display:'grid', justifyContent:'center',borderTopLeftRadius:'3rem', borderBottomRightRadius:'3rem', minWidth:'30%'}}>
                        <div style={{display:'grid', justifyContent:'center', marginBottom:'2rem'}}>
                              <h2 style={{fontWeight:'bolder', paddingLeft:'2rem'}}>Verify Your Identity</h2>
                              <h6 style={{color:'blue'}}>We will send a mail containing a verification link, <br/>
                                Kindly follow the link to Verify your email <br/>and complete your registration
                              </h6>

                              <div style={{display:'flex', gap:'20px', textAlign:'center', justifyContent:'center', marginTop:'1rem'}}>
                                <h6>Didnt Get The Link</h6>
                                <h6 style={{color:'blue'}}>Resend</h6>
                              </div>
                        </div>
        
                        <div style={{display:"flex", justifyContent:'center', gap:'1rem'}}>
                           <Link to='/dashboard'><button className="btn btn-success" style={{width:'10rem', marginTop:'1.5rem'}}>Continue<i className="bi bi-arrow-right"></i></button></Link>
                        </div>
                       
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

export default Email