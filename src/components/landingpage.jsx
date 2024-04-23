
import adidas from '../assets/adidasshoe.png'
import indomie from "../assets/indomie.png"
import mp3 from "../assets/mp3.png"
import plasma from "../assets/plasmatv.png"
import kitchen from "../assets/572x250-scale.png"
import airfryers from '../assets/air-fryer.png'
import home from '../assets/378x252_copy-homes.png'
import fashion from '../assets/378x252_copy.png'
import  accessories from '../assets/378x252_copy-accessories.png'
import phone from '../assets/androidPhones.png'
import fashiondeals from '../assets/Fashiondeals.png'
import freezer from '../assets/Freezer.png'
import fridge from '../assets/fridge.png'
import wash from '../assets/washingmachine.png'
import bina from '../assets/Binatone.png'
import gen from '../assets/generators.png'
import jacket from '../assets/jacket.jpg'
import nexus from '../assets/Nexus.png'
import phone2 from '../assets/phone.png'
import sneakers from '../assets/sneakers.png'
import air from '../assets/Air_conditioner.png'
import oil from '../assets/kingsoil.png'
import inverter from '../assets/inverter.png'
import generator from '../assets/generators (1).png'
import power from '../assets/power-bank.png'
// import { Link } from 'react-router-dom'




const LandingPage =()=> {
  return (
    <>

   

       {/* ---------------------------------------------------------------LandingPage/Home Page----------------------------------- */}

     <div className='maincontainer'>
                           <div className='banner' style={{display:'flex',justifyContent:"center", textAlign:'center', backgroundColor:'#96D2C8'}}>
                                   <h5>Let Make Your Day!</h5>
                           </div>

                          <div className='section1' style={{marginBottom:'20px'}}>
                            <div className='row'>
        
                              <div className='col-12 col-md-3'>
                                  <div className="card" style={{width: '19rem'}}>
                                     <img src={adidas} className="card-img-top" alt="Shoe"/>
                                         <div className="card-body">
                                           <h5 className="card-title">ADIDAS Advantage Lifestyle Court Lace Shoes</h5>
                                           <p className="card-text">$45</p>
                                           <a href="#" className="btn btn-outline-primary">View More</a>
                                         </div>
                                    </div>

                              </div>

                              <div className='col-12 col-md-3'>

                              <div className="card" style={{width: '19rem'}}>
                                     <img src={indomie} className="card-img-top" alt="Indomie" style={{padding:'10px'}}/>
                                    
                                         <div className="card-body">
                                           <h5 className="card-title">Indomie Regular Chicken Flavour 70g X 40</h5>
                                           <p className="card-text">$57</p>
                                           <a href="#" className="btn btn-outline-primary">View More</a>
                                         </div>
                                    </div>

                              </div>

                              <div className='col-12 col-md-3'>
                              <div className="card" style={{width: '19rem'}}>
                                     <img src={mp3} className="card-img-top" alt="Music Player"/>
                                    
                                         <div className="card-body">
                                           <h5 className="card-title">Zealot S32 Grey-green TWS Bluetooth Portable Speaker</h5>
                                           <p className="card-text">$15</p>
                                           <a href="#" className="btn btn-outline-primary">View More</a>
                                         </div>
                                    </div>

                              </div>

                              <div className='col-12 col-md-3'>
                                  <div className="card" style={{width: '20rem'}}>
                                     <img src={plasma} className="card-img-top" alt="Television" style={{padding:'10px'}}/>
                                     
                                         <div className="card-body">
                                           <h5 className="card-title">Nexus 32 Inches FHD TV H620B(SA)</h5>
                                           <p className="card-text">$245</p>
                                           <a href="#" className="btn btn-outline-primary">View More</a>
                                         </div>
                                  </div>

                              </div>
                            </div>
                          </div>

                          <div className='banner' style={{display:'flex',justifyContent:"center", textAlign:'center', backgroundColor:'#96D2C8'}}>
                            <h5>Seamless Shopping</h5>
                           </div>

                           <div className='section2' style={{display:'flex', gap:'10px', border:'10px solid white', backgroundColor:'white', borderRadius:'3px'}}>

                                    <div>
                                      <img src={kitchen} alt='Kitchen Scale' style={{width:'41.5rem'}}/>
                                    </div>

                                    <div >
                                       <img src={airfryers} alt='Air Fryers' style={{width:'41.5rem'}}/>
                                    </div>

                          </div>
                           


                          <div className='section3' style={{display:'flex', gap:'10px', border:'10px solid white', backgroundColor:'white',marginTop:'2rem', borderRadius:'3px'}}>
                   
                                <div >
                                    <img src={home} alt='Home Picture' style={{width:'27rem'}}/>
                                </div>

                                <div>
                                    <img src={fashion} alt='Fashion Picture' style={{width:'27.5rem'}}/>
                                </div>

                                <div>
                                    <img src={accessories} alt='Accesories Picture' style={{width:'28rem'}}/>
                                </div>

                          </div>


                           <div className='banner' style={{display:'flex',justifyContent:"center", textAlign:'center', backgroundColor:'#96D2C8', marginTop:'2rem'}}>
                                   <h5>Still Searching!</h5>
                           </div>


                           <div className='section4' style={{display:'flex', border:'1px solid white', padding:'10px', backgroundColor:'white', borderRadius:'3px', marginBottom:'20px'}}>

                                       <div className="card" style={{width: "18rem"}}>
                                            <img src={phone} className="card-img-top" alt="Andriod Phone"/>
                                            <div style={{textAlign:'center' , padding:'5px'}}>
                                                <p>Android Phones</p>
                                            </div>
                                       </div>

                                       <div className="card" style={{width: "18rem"}}>
                                            <img src={fashiondeals} className="card-img-top" alt="Fashion Set"/>
                                            <div style={{textAlign:'center' , padding:'5px'}} >
                                                <p>Fashion Deals</p>
                                            </div>
                                       </div>


                                       <div className="card" style={{width: "18rem"}}>
                                            <img src={freezer} className="card-img-top" alt="Freezer"/>
                                            <div style={{textAlign:'center' , padding:'5px'}} >
                                                <p>Freezer</p>
                                            </div>
                                       </div>

                                       <div className="card" style={{width: "18rem"}}>
                                            <img src={fridge} className="card-img-top" alt="Fridge"/>
                                            <div style={{textAlign:'center' , padding:'5px'}}>
                                                <p>Fridge</p>
                                            </div>
                                       </div>

                                       <div className="card" style={{width: "18rem"}}>
                                            <img src={wash} className="card-img-top" alt="Washing Machine"/>
                                            <div style={{textAlign:'center' , padding:'5px'}}>
                                                <p>Washing Machine</p>
                                            </div>
                                       </div>
                             </div>

                            <div className='banner' style={{display:'flex',justifyContent:"center", textAlign:'center', backgroundColor:'#96D2C8'}}>
                                   <h5>Fantastic Store!</h5>
                           </div>


                           <div className='section5'>

                          <div className='row'>
                           <div className='col-12 col-md-3 mt-3'>
                                  <div className="card" style={{width: '18rem'}}>
                                     <img src={bina} className="card-img-top" alt="Blender"/>
                                         
                                         <div className="card-body">
                                           <h5 className="card-title">Binatone 1.5 Litres Blender With Grinder (BLG-412) - Black</h5>
                                           <p className="card-text">$95</p>
                                           <a href="#" className="btn btn-outline-primary">View More</a>
                                         </div>
                                    </div>

                              </div>

                              
                              <div className='col-12 col-md-3 mt-3'>
                                  <div className="card" style={{width: '18rem'}}>
                                     <img src={gen} className="card-img-top" alt="Generator"/>
                                        
                                         <div className="card-body">
                                           <h5 className="card-title">Haier Thermocool 2.5kVA/2.0kW  Generator (BOBO 2800ES)</h5>
                                           <p className="card-text">$345</p>
                                           <a href="#" className="btn btn-outline-primary">View More</a>
                                         </div>
                                    </div>

                              </div>

                              
                              <div className='col-12 col-md-3 mt-3'>
                                  <div className="card" style={{width: '18rem'}}>
                                     <img src={jacket} className="card-img-top" alt="Jacket"/>
                                        
                                         <div className="card-body">
                                           <h5 className="card-title">Men Trendy Zipper Turtleneck  Jackets Sport Coats - White</h5>
                                           <p className="card-text">$5</p>
                                           <a href="#" className="btn btn-outline-primary">View More</a>
                                         </div>
                                    </div>

                              </div>

                              
                              <div className='col-12 col-md-3 mt-3'>
                                  <div className="card" style={{width: '18rem'}}>
                                     <img src={nexus} className="card-img-top" alt="Blender"/>
                                        
                                         <div className="card-body">
                                           <h5 className="card-title">Nexus 800ml (NX-4050) Vita SmoothMix Smoothie Blender</h5>
                                           <p className="card-text">$17</p>
                                           <a href="#" className="btn btn-outline-primary">View More</a>
                                         </div>
                                    </div>

                              </div>

                              
                              <div className='col-12 col-md-3 mt-3 mb-3'>
                                  <div className="card" style={{width: '18rem'}}>
                                     <img src={phone2} className="card-img-top" alt="Phone"/>
                                        
                                         <div className="card-body">
                                           <h5 className="card-title">XIAOMI Redmi 13C 6.74 8GB RAM/256GB ROM Android  Black</h5>
                                           <p className="card-text">$257</p>
                                           <a href="#" className="btn btn-outline-primary">View More</a>
                                         </div>
                                    </div>

                              </div>

                              <div className='col-12 col-md-3 mt-3 mb-3'>
                                  <div className="card" style={{width: '18rem'}}>
                                     <img src={sneakers} className="card-img-top" alt="Sneakers"/>
                                         
                                         <div className="card-body">
                                           <h5 className="card-title">Men Shoes Sneakers Running Shoes Breathable Non-Slip Fitness</h5>
                                           <p className="card-text">$9</p>
                                           <a href="#" className="btn btn-outline-primary">View More</a>
                                         </div>
                                    </div>

                              </div>

                              <div className='col-12 col-md-3 mt-3 mb-3'>
                                  <div className="card" style={{width: '18rem'}}>
                                     <img src={air} className="card-img-top" alt="Air Conditioner" style={{height:'18rem'}}/>
                                         
                                         <div className="card-body">
                                           <h5 className="card-title">Scanfrost 1.5HP Wall Split Air Conditioner- White</h5>
                                           <p className="card-text">$545</p>
                                           <a href="#" className="btn btn-outline-primary">View More</a>
                                         </div>
                                    </div>

                              </div>

                              <div className='col-12 col-md-3 mt-3 mb-3'>
                                  <div className="card" style={{width: '18rem'}}>
                                     <img src={oil} className="card-img-top" alt="King Oil"/>
                                         
                                         <div className="card-body">
                                           <h5 className="card-title">Devon KingS Cooking Oil 5L Similar products from Devon KingS</h5>
                                           <p className="card-text">$10</p>
                                           <a href="#" className="btn btn-outline-primary">View More</a>
                                         </div>
                                    </div>

                              </div>

                           </div>

                           </div>

                           <div className='banner' style={{display:'flex',justifyContent:"center", textAlign:'center', backgroundColor:'#96D2C8'}}>
                                   <h5>Portable Power</h5>
                           </div>


                           <div className='section6' style={{display:'flex', gap:'10px', border:'10px solid white', backgroundColor:'white' }}>
                                 <img src={inverter} alt='Inverter' style={{width:"28rem"}}/>

                                 <img src={power} alt='Power Bank' style={{width:"28rem"}}/>

                                 <img src={generator} alt='Generator' style={{width:"28rem"}}/>
                           </div>


                          



      
       </div>
    </>
  )
}

export default LandingPage;