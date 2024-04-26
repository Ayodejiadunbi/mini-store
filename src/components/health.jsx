import Itemcard from "./itemcard"
import Healthdata from "./healthdata"

const Health=()=>{
    return(
        <>
                <div className="health">
                        <div className='banner' style={{display:'flex',justifyContent:"center", textAlign:'center', backgroundColor:'#96D2C8'}}>
                                   <h5>Health & Beauty</h5>
                        </div>

                        <section className="container">
                            <div className="row">
                                {Healthdata.productData.map((item, index)=>{
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

export default Health