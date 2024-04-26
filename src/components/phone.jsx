

import Itemcard from "./itemcard"
import Phonedata from "./phonedata"

const Phone=()=>{
    return(
        <>
                <div className="phone">
                        <div className='banner' style={{display:'flex',justifyContent:"center", textAlign:'center', backgroundColor:'#96D2C8'}}>
                                   <h5>Phone & Tablets</h5>
                        </div>

                        <section className="container">
                            <div className="row">
                                {Phonedata.productData.map((item, index)=>{
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

export default Phone