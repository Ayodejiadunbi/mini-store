
import chair from "../assets/Gaming_chair-1.png"
import ps4 from "../assets/Ps4-1.png"
import ps5 from "../assets/Ps5-1.png"
import psp from "../assets/psp_console-1.png"
import controller from "../assets/controller-1.png"
import xbox from "../assets/xbox-1.png"

const Message=()=>{
    return(
        <>
            <div style={{marginTop:'10rem', marginBottom:'3rem', padding:'0rem 5rem'}}>
              
                    <h5 style={{textAlign:'center',marginBottom:'2rem'}}>Talk to us! We are just a message away</h5>

                    <div style={{display:'grid', justifyContent:'center'}}>

              

                        <div>
                              <input  className='form-control mb-3' type="email" placeholder="Enter Your Email" id="email" name="email" style={{width:'25rem',backgroundColor:'rgb(221, 218, 218)'}}/>
                        </div>

                        <div>
                            <textarea className='form-control mb-3' id="mesaage" placeholder="Enter Your Message" rows='2' style={{width:'25rem',backgroundColor:'rgb(221, 218, 218)'}}/>
                        </div>

                        <div>
                            <button className="btn btn-outline-success" style={{color:'black', backgroundColor:'#96D2C8'}}>Send Your Message</button>
                        </div>

                    </div>   


                    <div className='banner' style={{display:'flex',justifyContent:"center", textAlign:'center', backgroundColor:'#B177Da', marginTop:'2rem'}}>
                       <h5>Gaming</h5>
                    </div> 

                    <div style={{display:'flex', gap:'10px', border:"10px solid white", backgroundColor:'white'}}> 

                            <div>
                                <img src={chair} alt="Gaming" style={{width: "13.4rem"}}/>
                                <div style={{textAlign:'center', borderColor:'white', paddingTop:'5px'}}>
                                     <p>Gaming Chair</p>
                                </div>
                            </div>

                            <div>
                                <img src={ps4} alt="Gaming" style={{width:'13.4rem'}}/>
                                <div style={{textAlign:'center', borderColor:'white', paddingTop:'5px'}}>
                                     <p>PS4</p>
                                </div>
                            </div>

                            <div>
                                <img src={ps5} alt="Gaming" style={{width:'13.4rem'}}/>
                                <div style={{textAlign:'center', borderColor:'white', paddingTop:'5px'}}>
                                     <p>PS5</p>
                                </div>
                            </div>
                  
                            <div>
                                 <img src={psp} alt="Gaming" style={{width:'13.4rem'}}/>
                                 <div style={{textAlign:'center', borderColor:'white', paddingTop:'5px'}}>
                                     <p>PSP cOnsole</p>
                                </div>
                            </div>

                            <div>
                                <img src={controller} alt="Gaming" style={{width:'13.4rem'}}/>
                                <div style={{textAlign:'center', borderColor:'white', paddingTop:'5px'}}>
                                     <p>Controller</p>
                                </div>
                            </div>
                    
                            <div>
                                <img src={xbox} alt="Gaming" style={{width:'13.4rem'}}/>
                                <div style={{textAlign:'center', borderColor:'white', paddingTop:'5px'}}>
                                     <p>Xbox</p>
                                </div>
                            </div>   
                </div>

            </div>
        </>
    )
}

export default Message