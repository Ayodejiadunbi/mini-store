

import Itemcard from "./itemcard"
import Kidsdata from "./kidsdata"

const Kidfashion=()=>{
    return(
        <>
                <div className="kids">
                        <div className='banner' style={{display:'flex',justifyContent:"center", textAlign:'center', backgroundColor:'#96D2C8'}}>
                                   <h5>Kids shop</h5>
                        </div>

                        <section className="container">
                            <div className="row">
                                {Kidsdata.productData.map((item, index)=>{
                                    return(
                                    <div className="col-12 col-md-3" key={index}>
                                        <Itemcard
                                            img={item.img}
                                            title={item.title}
                                            desc={item.desc}
                                            price={item.price}
                                            item={item}
                                            key={index}
                                        />
                                    </div>
                                )
                                }
                             
                                )}
                            </div>
                        </section>
                </div>

        </>
    )
}

export default Kidfashion