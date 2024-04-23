import {Link} from "react-router-dom"


const Forgot=()=>{

    return(
        <>

        <div className="forgot" style={{ marginTop:'10rem'}}>
                <div className="row">
                    <div className="col-12" style={{display:'flex' , justifyContent:'center'}}>

                    <form style={{border:'2px solid white',backgroundColor:'white', padding:'2rem 0rem', display:'grid', justifyContent:'center',borderTopLeftRadius:'3rem', borderBottomRightRadius:'3rem', minWidth:'30%'}}>
                        <div style={{display:'grid', justifyContent:'center', marginBottom:'3rem'}}>
                              <h2 style={{fontWeight:'bolder'}}>Forgot Password?</h2>
                              <h6 style={{color:'blue', paddingLeft:'3rem'}}>Lets Have That Fixed</h6>
                        </div>
                       

                        <div style={{display:'grid', justifyContent:'center'}}>
                             <input className="form-control mb-3" type="email" id="email" placeholder="Email" name="email"  style={{width:'25rem', backgroundColor:'#D9D9D9'}}/>
                        </div>

                        <h6>We will send a mail conatining a reset link, <br/>Kindly follow the reset link to reset your password</h6>

                        <div style={{display:"flex", justifyContent:'center'}}>
                        <Link to='/reset'><button className="btn btn-success" style={{width:'10rem', marginTop:'3rem'}}>Proceed<i className="bi bi-arrow-right"></i></button></Link>
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
export default Forgot