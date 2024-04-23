
import led from '../assets/LED_TV.png'
import smart from '../assets/Smart_tv-1.png'
import sound from '../assets/Soundbar.png'
import portable from '../assets/Portable_speaker-1.png'
import speaker from '../assets/speakers-1.png'
import mixer from '../assets/mixers_300x400.png'
import condenser from '../assets/condenser-mic_300x400.png'
import studio from '../assets/studio-monitor_300x400.png'
import home from '../assets/home-theatres_300x400.png'
import sound1 from '../assets/soundbars_300x400.png'
import large from '../assets/TV-1.png'



const Terms =()=>{
    return(
        <>
            <div className="terms&condition" style={{marginTop:'7rem', marginBottom:'3rem', textAlign:"center", padding:'0rem 5rem'}}>
             
                    <h3 style={{marginTop:'10rem', color:'blue'}}>Terms & Conditions</h3>

                    <p>These Terms and Conditions govern your use of the OneStore E-Commerce platform and 
                       the services offered on the Platform. The Platform and Services are owned and operated by OneStore.
                       By accessing the Platform or using the Services, you agree to comply with and be bound by this Agreement. 
                       If you do not agree to these terms, please do not use the Platform or Services.
                    </p>

                <div className="row">

                    <div className="col-12" style={{border:'10px solid white', borderBottomLeftRadius:'1rem', borderTopRightRadius:'2rem', padding:'2rem', backgroundColor:'white'}}>

                        <h5 style={{color:'blue'}}>1. Use of Platform</h5>
                        <p>1.1 You must be at least 18 years old to use the Platform and Services. 
                            By using the Platform or Services, you represent that you are at least 18 years old.
                        </p>
                        <p>1.2 You agree to use the Platform and Services only for lawful purposes and in accordance
                           with this Agreement.
                        </p>

                        <h5 style={{color:'blue'}}>2. Privacy Policy</h5>
                        <p>2.1 Your use of the Platform and Services is also governed by our Privacy Policy, which is incorporated into this Agreement by reference.
                           Please review the Privacy Policy carefully for information about how we collect, use, and disclose your personal information.
                        </p>
                        
                        <h5 style={{color:'blue'}}>3. Intellectual Property</h5>
                        <p>3.1 The Platform and its original content, features, and functionality are owned by the Company
                          and are protected by international copyright,
                          trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                        </p>
                        <p>3.2 You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, 
                           create derivative works from, transfer, 
                           or sell any information, software, products, or services obtained from the Platform or Services.
                        </p>

                        <h5 style={{color:'blue'}}>4. Disclaimer of Warranties</h5>
                        <p>4.1 The Platform and Services are provided on an [as is] and [as available] basis, without any 
                            warranties of any kind, either express or implied. The Company disclaims all warranties, including, but not limited to,
                            the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
                        </p>

                        <h5 style={{color:'blue'}}>5. Limitation of Liability</h5>
                        <p>5.1 In no event shall the Company, its affiliates, or their respective officers, directors,
                           employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, 
                            including, without limitation, loss of profits, data, use, goodwill,
                            or other intangible losses, arising out of or in connection with your use of the Platform or Services.
                        </p>

                        <h5 style={{color:'blue'}}>6. Governing Law</h5>
                        <p>6.1 This Agreement shall be governed by and construed in accordance with the laws of Nigeria, 
                           without regard to its conflict of law principles.
                        </p>

                        <h5 style={{color:'blue'}}>7. Changes to Terms</h5>
                        <p>7.1 The Company reserves the right to modify or replace these Terms and Conditions at any time.
                            Any changes will be effective immediately upon posting the revised terms on the Platform. Your continued use of 
                            the Platform or Services following the posting of changes constitutes your acceptance of such changes.
                        </p>

                        <h5 style={{color:'blue'}}>8. Contact Us</h5>
                        <p>8.1 If you have any questions about this Agreement, please contact us at +2349072611604OneStore, Info@OneStore.com.

                        </p>
                    </div>
                </div>

                <div className='banner' style={{display:'flex',justifyContent:"center", textAlign:'center', backgroundColor:'#B177Da', marginTop:'2rem'}}>
                     <h5>Electronics</h5>
                </div>

                <div style={{display:'flex', gap:'10px', border:"10px solid white", backgroundColor:'white'}}> 

                           <div>
                                <img src={led} alt="Electronics" style={{width:'13.4rem'}}/>
                                <div style={{textAlign:'center', borderColor:'white', paddingTop:'5px'}}>
                                     <p>LED TV</p>
                                </div>
                            </div>

                            <div>
                                <img src={smart} alt="Electronics" style={{width:'13.4rem'}}/>
                                <div style={{textAlign:'center', borderColor:'white', paddingTop:'5px'}}>
                                     <p>Smart TV</p>
                                </div>
                            </div>

                            <div>
                                <img src={sound} alt="Electronics" style={{width:'13.4rem'}}/>
                                <div style={{textAlign:'center', borderColor:'white', paddingTop:'5px'}}>
                                     <p>Sound Bar</p>
                                </div>
                            </div>

                            <div>
                                <img src={speaker} alt="Electronics" style={{width:'13.4rem'}}/>
                                <div style={{textAlign:'center', borderColor:'white', paddingTop:'5px'}}>
                                     <p>Home Theatre</p>
                                </div>
                            </div>

                            <div>
                                <img src={portable} alt="Electronics" style={{width:'13.4rem'}}/>
                                <div style={{textAlign:'center', borderColor:'white', paddingTop:'5px'}}>
                                     <p>Portable Speaker</p>
                                </div>
                            </div>

                            <div>
                                <img src={large} alt="Electronics" style={{width:'13.4rem'}}/>
                                <div style={{textAlign:'center', borderColor:'white', paddingTop:'5px'}}>
                                     <p>Large Screen</p>
                                </div>
                            </div>
                </div>

                <div className='banner' style={{display:'flex',justifyContent:"center", textAlign:'center', backgroundColor:'#B177DA', marginTop:'2rem'}}>
                     <h5>Home Audio</h5>
                </div>

                <div style={{display:'flex', gap:'10px', border:"10px solid white", backgroundColor:'white'}}> 
                    <img src={mixer} alt="Electronics" style={{width:'19%'}}/>
                    <img src={condenser} alt="Electronics" style={{width:'19%'}}/>
                    <img src={studio} alt="Electronics" style={{width:'19%'}}/>
                    <img src={home} alt="Electronics" style={{width:'19%'}}/>
                    <img src={sound1} alt="Electronics" style={{width:'21%'}}/>
                </div>

            </div>
        </>
    )
}

export default Terms;