
import { Link } from "react-router-dom"


const FinalCheckOut=()=>{
    return(
        <>
            <div className="final" style={{marginTop:'10rem'}}>
                <div className="row">
                    <div className="col-12" style={{display:'flex', justifyContent:'center'}}>
                        <form>
                            <h5 style={{paddingLeft:'7rem', color:'blue'}}>Thank You!</h5>
                            <p>Congratulations on your purchase! Your order is being<br/>  processed and will be on its way to you soon.<br/>  Thank you for shopping with us!</p>
                        </form>
                        
                    </div>

                    <Link to='/' style={{textAlign:'center', textDecoration:'none'}}>Your shopping journey doesnt end here, Click for More</Link>
                </div>
            </div>

        </>
    )
}

export default FinalCheckOut