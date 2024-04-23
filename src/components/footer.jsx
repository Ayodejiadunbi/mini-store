import logo from '../assets/brandlogo.png'
import {Link} from "react-router-dom"


const Footer=()=>{
    return(
        <>

         {/* -----------------------------------------------footerSection----------------------------------------- */}


         <div className='containerFooter' style={{backgroundColor:'black', padding:'2rem', marginTop:'1.5rem'}}>
                             <div className='row'>
                               <div className='col-12 col-md-3'>
                                       <div className='footerimage' style={{display:'flex', gap:'7px'}}>
                                            <a href='#'><img src={logo} alt='logo' style={{width: '60px', marginLeft:'1.4rem', marginBottom:'1rem', borderRadius:'50%'}}/></a>
                                            <h3 style={{fontSize: '1.1rem', paddingTop:'1.6rem', fontWeight:'bold', color:'blue'}}>OneStore</h3>
                                       </div>
                                   <ul>
                                        <li>
                                            <Link to="/callus" style={{paddingBottom:'0.9rem', color:'white', textDecoration:'none'}}>Phone: +2349072611604OneStore</Link>
                                        </li>

                                        <li>
                                            <a href="mailto:onuorabube44@gmail.com?subject=Inquiry%20about%20your%20services&body=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services." 
                                              style={{ paddingBottom: '0.9rem', color: 'white', textDecoration:'none' }}>
                                              Email: Info@OneStore.com
                                            </a>
                                        </li> 

                                       <li style={{paddingBottom:'0.9rem', color:'white'}}>Address: Online OneStore</li>
                                   </ul>
                                   <p style={{marginLeft:'1.7rem', marginTop: '2rem', color:'white'}}>Copyright: <br/> &copy;  2024. OneStore. All rights reserved.</p> 
                               </div>

                               <div className='col-12 col-md-3'>
                                       <h5 style={{color:'#96D2C8', paddingLeft:'30px'}}>Home</h5>
                                       <ul>
                                            <li>
                                                <Link to='/about' style={{paddingBottom:'0.9rem', color:'white', textDecoration:'none'}}>About Us</Link>
                                            </li>  

                                            <li>
                                                <Link to="contact" style={{paddingBottom:'0.9rem', color:'white', textDecoration:'none'}}>Contact Us</Link>
                                             </li> 
                                       </ul>
                               </div>

                               <div className='col-12 col-md-3'>
                                       <h5 style={{color:'#96D2C8', paddingLeft:'30px'}}>Resources</h5>
                                       <ul>
                                            <li style={{paddingBottom:'0.9rem', color:'white'}}>Blog</li> 
                                            <li style={{paddingBottom:'0.9rem', color:'white'}}>Newsletter</li>
                                       </ul>
                               </div>

                               <div className='col-12 col-md-3'>
                                       <h5 style={{color:'#96D2C8', paddingLeft:'30px'}}>Legal</h5>
                                       <ul>
                                            <li>
                                               <Link to='/terms&condition' style={{paddingBottom:'0.9rem', color:'white', textDecoration:'none'}}>Terms&Condition</Link>
                                            </li>   

                                            <li>
                                               <Link to='/terms&condition' style={{paddingBottom:'0.9rem', color:'white', textDecoration:'none'}}>Privacy</Link>
                                            </li>   
                                         
                                       </ul>
                               </div>
                             </div>

                         </div>



        </>
    )
}

export default Footer