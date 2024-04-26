import { Link } from "react-router-dom"
import lady from "../assets/Women_double_banner.png"
import men from "../assets/Men_double_banner.png"
import fash1 from '../assets/fash1.png'
import fash2 from '../assets/fash2.png'
import fash3 from '../assets/fash3.png'
import fash4 from '../assets/fash4.png'
import kids from '../assets/kid_1152x252.png'
import fashion1 from '../assets/fashion1.png'
import fashion2 from '../assets/fashion2.png'
import fashion3 from '../assets/fashion3.png'
import fashion4 from '../assets/fashion4.png'

const Fashion =()=>{
    return(
        <>
             <div className="fashion">
                        <div className='banner' style={{display:'flex',justifyContent:"center", textAlign:'center', backgroundColor:'#96D2C8'}}>
                                   <h5>Fashion</h5>
                        </div>



                        
                        <div className="row" style={{marginBottom:"1rem"}}>
                                  <div className="col-12 col-md-3">
                                        
                                           <div className="card" style={{width: ''}}>
                                               <img src={fash1} className="card-img-top" alt="Image" style={{padding:'10px'}}/>
                                    
                                                  <div className="card-body">
                                                       <h5 className="card-title">Mens Office Polos Shirts Casual Joggers </h5>
                                                       <p className="card-text">$7</p>
                                                      <Link to='/menfash'><a href="#" className="btn btn-outline-primary">View More</a></Link>
                                                 </div>
                                             </div>
                                   </div>

                                   <div className="col-12 col-md-3">
                                        
                                        <div className="card" style={{width: ''}}>
                                            <img src={fash2} className="card-img-top" alt="Image" style={{padding:'10px'}}/>
                                 
                                               <div className="card-body">
                                                    <h5 className="card-title">ADIDAS Core Slides Adilette Shower</h5>
                                                    <p className="card-text">$18</p>
                                                    <Link to='/menfash'><a href="#" className="btn btn-outline-primary">View More</a></Link>
                                              </div>
                                          </div>
                                </div>

                                <div className="col-12 col-md-3">
                                        
                                        <div className="card" style={{width: ''}}>
                                            <img src={fash3} className="card-img-top" alt="Image" style={{padding:'10px'}}/>
                                 
                                               <div className="card-body">
                                                    <h5 className="card-title">Mens Printed Short Sleeves - 3D </h5>
                                                    <p className="card-text">$3</p>
                                                   <Link to='/menfash'><a href="#" className="btn btn-outline-primary">View More</a></Link> 
                                              </div>
                                          </div>
                                </div>

                                <div className="col-12 col-md-3">
                                        
                                        <div className="card" style={{width: ''}}>
                                            <img src={fash4} className="card-img-top" alt="Image" style={{padding:'10px'}}/>
                                 
                                               <div className="card-body">
                                                    <h5 className="card-title">Butterfly Pendant Necklace Set-Silver</h5>
                                                    <p className="card-text">$7</p>
                                                    <Link to='/womenfash'><a href="#" className="btn btn-outline-primary">View More</a></Link>
                                              </div>
                                          </div>
                                </div>
                         
        
                            </div>

                <div className="row">
                               <div className="col-12 col-md-6">
                               <Link to="/menfash">
                                  <img src={men} alt="Image" style={{width:'100%'}}/>
                               </Link>
                               </div>

                               <div className="col-12 col-md-6">
                                <Link to='/womenfash'>
                                   <img src={lady} alt="Image" style={{width:'100%'}}/>
                                 </Link>    
                               </div>



                           
                </div>

                <div className="row" style={{marginTop:'1rem'}}>
                    <div className="col-12">
                    <Link to='/kidfashion'>
                        <img src={kids} alt="Kids Image" style={{width:"100%"}}/>
                    </Link>
                    </div>
                </div>


                <div className="row" style={{marginTop:"1rem"}}>
                                  <div className="col-12 col-md-3">
                                        
                                           <div className="card" style={{width: ''}}>
                                               <img src={fashion1} className="card-img-top" alt="Image" style={{padding:'10px'}}/>
                                    
                                                  <div className="card-body">
                                                       <h5 className="card-title">Statement Making Fashion Women Inclined Shoulder/Hand Bags</h5>
                                                       <p className="card-text">$37</p>
                                                      <Link to='/womenfash'><a href="#" className="btn btn-outline-primary">View More</a></Link>
                                                 </div>
                                             </div>
                                   </div>

                                   <div className="col-12 col-md-3">
                                        
                                        <div className="card" style={{width: ''}}>
                                            <img src={fashion2} className="card-img-top" alt="Image" style={{padding:'10px'}}/>
                                 
                                               <div className="card-body">
                                                    <h5 className="card-title">Women Shoes Sandals Heels Slippers Ladies Shoes Casual Shoes</h5>
                                                    <p className="card-text">$18</p>
                                                     <Link to='/womenfash'><a href="#" className="btn btn-outline-primary">View More</a></Link>  
                                              </div>
                                          </div>
                                </div>

                                <div className="col-12 col-md-3">
                                        
                                        <div className="card" style={{width: ''}}>
                                            <img src={fashion3} className="card-img-top" alt="Image" style={{padding:'10px'}}/>
                                 
                                               <div className="card-body">
                                                    <h5 className="card-title">Kids Boys And Girls Quality Sneakers Shoe-black For Outing. </h5>
                                                    <p className="card-text">$3</p>
                                                  <Link to='/kidfashion'><a href="#" className="btn btn-outline-primary">View More</a></Link>  
                                              </div>
                                          </div>
                                </div>

                                <div className="col-12 col-md-3">
                                        
                                        <div className="card" style={{width: ''}}>
                                            <img src={fashion4} className="card-img-top" alt="Image" style={{padding:'10px'}}/>
                                 
                                               <div className="card-body">
                                                    <h5 className="card-title">2-Piece ChildrenS Vest Set T-Shirt + Shorts P024 For Gen z Generation</h5>
                                                    <p className="card-text">$7</p>
                                                  <Link to='/kidfashion'><a href="#" className="btn btn-outline-primary">View More</a></Link>  
                                              </div>
                                          </div>
                                </div>
                         
        
                            </div>
             </div>

        </>
    )
}

export default Fashion