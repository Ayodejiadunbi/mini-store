

import {useCart} from "react-use-cart"


const Itemcard=(props)=>{
    const { addItem} = useCart();
    return(
        
            <div className="mx-0 mb-4">
                <div className="card p-0 overflow-hidden h-100 shadow" alt='im' style={{width:'19rem'}}>
                         <img src= {props.img} className="card-img-top img-fluid" alt={props.title}/>
                                <div className="card-body text-center">
                                   <h5 className="card-title">{props.title}</h5>
                                   <h5 className="card-title1">${props.price}</h5>
                                   <p className="card-title">{props.desc}</p>
                                   <button className="btn btn-outline-success"
                                    onClick={() =>addItem(props.item)}
                                   > Add to cart</button>
                                </div>
                </div>
            </div>

        
    )
}

export default Itemcard