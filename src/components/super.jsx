

import Itemcard from "./itemcard"
import Superdata from "./superdata"

const Super=()=>{
    return(
        <>
                <div className="supermarket">
                        <div className='banner' style={{display:'flex',justifyContent:"center", textAlign:'center', backgroundColor:'#96D2C8'}}>
                                   <h5>SuperMarket</h5>
                        </div>

                        <section className="container">
                            <div className="row">
                                {Superdata.productData.map((item, index)=>{
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

export default Super