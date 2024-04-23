
import grain1 from '../assets/grain.png'
import art1 from '../assets/Artboard_1_copy_2.png'
import art2 from '../assets/Artboard_1_copy_4.png'
import art3 from '../assets/Artboard_1_copy_5.png'
import art4 from '../assets/Artboard_1.png'
import art5 from '../assets/laundry_300x400v2.png'


const Callus=()=>{
    return(
        <>
            <div style={{marginTop:'10rem', marginBottom:'3rem', padding:'0rem 5rem', textAlign:'center'}}>
                <h5 >Reach The Customer Service </h5>
                <h6 style={{color:'blue'}}>Speak your mind; we are listening!</h6>

                <div style={{display:'flex', gap:"2rem", justifyContent:'center'}}>
                  <i className="bi bi-telephone-fill" style={{fontSize:"5rem"}}></i>

                    <div>
                       <p>+234OneStore</p>
                       <p>+234OneStore</p>
                       <p>+234OneStore</p>
                    </div>
                </div>

                <div className='banner' style={{display:'flex',justifyContent:"center", textAlign:'center', backgroundColor:'#96D2C8', marginTop:'2rem'}}>
                     <h5>SuperMarket</h5>
                </div>

                <div style={{display:'flex', gap:'10px', border:"10px solid white", backgroundColor:'white'}}> 
                    <img src={grain1} alt="Grocery" style={{width:'16%'}}/>
                    <img src={art1} alt="Grocery" style={{width:'16%'}}/>
                    <img src={art2} alt="Grocery" style={{width:'16%'}}/>
                    <img src={art3} alt="Grocery" style={{width:'16%'}}/>
                    <img src={art4} alt="Grocery" style={{width:'16%'}}/>
                    <img src={art5} alt="Grocery" style={{width:'16%'}}/>
                </div>
            </div>
        </>
    )
}

export default Callus