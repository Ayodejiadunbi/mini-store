import customerpix from '../assets/customerservice.png'
import {Link} from 'react-router-dom'
import asus from "../assets/asus-laptops_300x400.png"
import dell from "../assets/dell-laptop_300x400.png"
import hp from "../assets/hp-laptops_300x400.png"
import lenovo from "../assets/lenovo-laptops_300x400.png"
import mac from "../assets/macbooks.png"
import external from '../assets/external-hd_300x400.png'
import flash from '../assets/flash-drives_300x400.png'
import modem from '../assets/modems_300x400.png'
import printer from '../assets/printers_300x400.png'
import access from '../assets/accessories_300x400.png'



const Contact=()=>{
    return(
        <>
          <div className="contact page" style={{marginTop:'7rem', marginBottom:'3rem', textAlign:"center", padding:'0rem 5rem'}}>
                <h3 style={{border:'2px solid #96D2C8', padding:'2rem 0rem', backgroundColor:'#96D2C8', color:'white', height:'7rem'}}>NEED HELP?</h3>

                <div className="row" style={{ border:'1px solid white', backgroundColor:'white', margin:'2rem 0.1rem'}}>
                    <div className="col-12 col-md-6" style={{paddingLeft:'9rem'}}>
                        <h5  style={{marginTop:'3rem'}}>If you have inquiries or need assistance, do not hesitate to reach us. 
                            We are available Monday to Sunday (8am to 7pm). Public Holidays between 9am and 5pm.
                        </h5>


                            <div style={{display:'flex', gap:'15px', marginTop:'2rem'}}>

                                 <Link to="/message" style={{display:'flex' , textDecoration:'none'}}>
                                     <i className="bi bi-envelope" style={{fontSize:'2.1rem', position:'absolute', border:'2px solid white', borderRadius:"50%", padding:"0px 5px", backgroundColor:'white', color:"black"}}></i> 
                                     <h6 style={{marginLeft:'35px', marginTop:'5px', border:'2px solid #96D2C8', backgroundColor:'#96D2C8', padding:'5px 15px', borderRadius:'5px', color:'black'}}>SEND A MESSAGE</h6>
                                 </Link>
                                
                                 <a href= "https://wa.me/2349072611604" target="_blank" style={{display:'flex', textDecoration:'none', color:'black'}}>
                                     <i className="bi bi-chat-dots" style={{fontSize:'2rem', position:'absolute', border:'2px solid white', borderRadius:"50%", padding:"0px 6px", backgroundColor:'white'}}></i>
                                     <h6 style={{marginLeft:'35px', marginTop:'5px', border:'2px solid #96D2C8', backgroundColor:'#96D2C8', padding:'5px 15px', borderRadius:'5px'}}>CHAT WITH US</h6>
                                 </a>

                           </div>

                           <Link to='/callus' style={{display:'flex', marginTop:'30px', marginLeft:'9rem', textDecoration:'none', color:'black'}}>
                                      <i className="bi bi-headset" style={{fontSize:'2rem', position:'absolute', border:'2px solid white', borderRadius:"50%", padding:"0px 5px", backgroundColor:'white'}}></i>
                                      <h6 style={{marginLeft:'35px', marginTop:'5px', border:'2px solid #96D2C8', backgroundColor:'#96D2C8', padding:'5px 15px', borderRadius:'5px'}}>CALL US</h6>
                           </Link>
                    </div>

                    <div className="col-12 col-md-6">
                        <img src={customerpix} alt="Image" style={{width:'60%', borderTopRightRadius:'55px', borderBottomLeftRadius:'25px'}}/>

                    </div>
                </div>

                <div className='banner' style={{display:'flex',justifyContent:"center", textAlign:'center', backgroundColor:'#96D2C8'}}>
                     <h5>Laptops</h5>
                </div>

                <div style={{display:'flex', gap:'10px', border:"10px solid white", backgroundColor:'white'}}> 
                    <img src={asus} alt="Laptop" style={{width:'19%'}}/>
                    <img src={dell} alt="Laptop" style={{width:'19%'}}/>
                    <img src={hp} alt="Laptop" style={{width:'19%'}}/>
                    <img src={lenovo} alt="Laptop" style={{width:'19%'}}/>
                    <img src={mac} alt="Laptop" style={{width:'21%'}}/>
                </div>

                <div className='banner' style={{display:'flex',justifyContent:"center", textAlign:'center', backgroundColor:'#96D2C8', marginTop:'2rem'}}>
                     <h5>Other Computers & Accessories</h5>
                </div>

                <div style={{display:'flex', gap:'10px', border:"10px solid white", backgroundColor:'white'}}> 
                    <img src={external} alt="Accessories" style={{width:'19%'}}/>
                    <img src={flash} alt="Accessories" style={{width:'19%'}}/>
                    <img src={modem} alt="Accessories" style={{width:'19%'}}/>
                    <img src={printer} alt="Accessories" style={{width:'19%'}}/>
                    <img src={access} alt="Accessories" style={{width:'21%'}}/>
                </div>

          </div>
        </>
    )
}

export default Contact