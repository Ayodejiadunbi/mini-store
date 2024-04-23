
import bottles from "../assets/bottle_feeding.png"
import bouncers from "../assets/bouncers.png"
import carrier from "../assets/carrier.png"
import carseat from "../assets/carseat.png"
import strollers from "../assets/strollers.png"
import feedingchairs from "../assets/feeding_chairs.png"
import feedingtools from "../assets/feeding_tools.png"
import babydips from "../assets/baby_dips.png"
import babypacifiers from "../assets/Baby_pacifiers.png"
import babyfood from "../assets/babyfood.png"


const About =()=>{
    return(
        <>
            <div className="aboutSection" style={{marginTop:'7rem', marginBottom:'3rem', textAlign:"center", padding:'0rem 5rem'}}>

                    <div>
                        <h3 style={{color:'blue'}}>About Us</h3>

                    </div>

                <div className="row">
                    <div className="col-12" style={{border:'10px solid white', borderBottomLeftRadius:'1rem', borderTopRightRadius:'2rem', padding:'2rem', backgroundColor:'white' }}>

                        <p>At OneStore, we believe in simplifying the way you shop online. Our mission is to provide you with a
                           seamless and enjoyable shopping experience, right from the comfort of your home.
                        </p>

                        <h5 style={{color:'blue'}}>Our Story</h5>

                        <p>OneStore was founded in 2024 by Onuora Ebube Ebuka with a simple yet powerful idea - 
                           to create a platform that offers a wide range of high-quality products at affordable prices.
                            We understand the importance of convenience and reliability when it comes to online shopping,
                            and we strive to exceed your expectations every time you visit our store.
                        </p>

                        <h5 style={{color:'blue'}}>What We Offer</h5>

                        <p>Our platform features a curated selection of products across various categories, including electronics, fashion, home essentials,
                            and more. Each product is carefully chosen to ensure the best quality and value for our customers.
                        </p>

                        <h5 style={{color:'blue'}}>Our Commitment</h5>

                        <p>At OneStore, we are committed to customer satisfaction. We value your trust and strive to provide
                           excellent customer service at every step of your shopping journey.
                           Whether you have a question about a product or need assistance with an order, our team is here to help
                        </p>

                        <h5 style={{color:'blue'}}>Join Us</h5>

                        <p>Join us on this exciting journey and experience the convenience of shopping online with OneStore.
                           Discover new products, enjoy great deals, and shop with confidence. 
                           Thank you for choosing OneStore - your destination for all your shopping needs.
                        </p>

                    </div>
                </div>

                <div className='banner' style={{display:'flex',justifyContent:"center", textAlign:'center', backgroundColor:'#96D2C8', marginTop:'2rem'}}>
                     <h5>Baby Items</h5>
                </div>

                <div style={{display:'flex', gap:'10px', border:"10px solid white", backgroundColor:'white'}}> 
                    <img src={bottles} alt="Baby Items" style={{width:'19%'}}/>
                    <img src={bouncers} alt="Baby Items" style={{width:'19%'}}/>
                    <img src={carrier} alt="Baby Items" style={{width:'19%'}}/>
                    <img src={carseat} alt="Baby Items" style={{width:'19%'}}/>
                    <img src={strollers} alt="Baby Items" style={{width:'21%'}}/>
                </div>

                <div className='banner' style={{display:'flex',justifyContent:"center", textAlign:'center', backgroundColor:'#96D2C8', marginTop:'2rem'}}>
                     <h5>Healthy Feeding</h5>
                </div>

                <div style={{display:'flex', gap:'10px', border:"10px solid white", backgroundColor:'white'}}> 
                    <img src={feedingchairs} alt="Baby Items" style={{width:'19%'}}/>
                    <img src={feedingtools} alt="Baby Items" style={{width:'19%'}}/>
                    <img src={babydips} alt="Baby Items" style={{width:'19%'}}/>
                    <img src={babypacifiers} alt="Baby Items" style={{width:'19%'}}/>
                    <img src={babyfood} alt="Baby Items" style={{width:'21%'}}/>
                </div>

            </div>
        </>
    )
}

export default About