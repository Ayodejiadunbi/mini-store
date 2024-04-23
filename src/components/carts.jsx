
import { Link } from "react-router-dom"
import { useCart } from "react-use-cart"

const Carts=()=>{
    const {
        isEmpty,
        totalUniqueItems,
        items, 
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
        } = useCart();

        
        
    return(
       
         <div className="carts" style={{marginTop:'10rem', borderRadius:'1rem'}}>
            <div className="card" style={{margin:'0rem 2rem'}}>
                                           <div className="card-header" style={{textAlign:"center", fontWeight:'600', fontSize:'1.5rem'}}>
                                             Cart Overview
                                           </div>

                    {isEmpty ? (<h2 className="text-center mt-3" > Your Cart Is Empty</h2>) 
                    : (
                    
                    <section className="py-4 container">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <h5>Cart ({totalUniqueItems}) Total Items: ({totalItems})</h5>
                                <table className="table table-light table-hover m-0">
                                    <tbody>
                                             {items.map((item, index)=>{
                                                return(
                                                           <tr key={index}>
                                                               <td>
                                                                   <img src={item.img} style={{height:"6rem"}}/>
                                                               </td>
                                                               <td>{item.title}</td>
                                                               <td>{item.price}</td>
                                                               <td>Quantity ({item.quantity})</td>
                                                               <td>
                                                                    <button
                                                                       className="btn btn-info ms-2"
                                                                       onClick={() => updateItemQuantity(item.id, item.quantity -1)}
                                                                    >-</button>

                                                                    <button
                                                                       className="btn btn-info ms-2"
                                                                       onClick={() => updateItemQuantity(item.id, item.quantity +1)}
                                                                    >+</button>

                                                                    <button
                                                                       className="btn btn-danger ms-2"
                                                                       onClick={()=> removeItem(item.id)}
                                                                    >Remove Item</button>
                                                               </td>
                                                           </tr>
                                                        )
                                       
                                             })}

                                    </tbody>
                                </table>
                            </div>

                                         <div className="col-auot ms-auto">
                                            <h3>Total Price: ${cartTotal}</h3>
                                         </div>

                                        <div className="col-auto">
                                            <button
                                                className="btn btn-danger m-2"
                                                onClick={() => emptyCart()}
                                                > Clear Cart
                                            </button>

                                            <Link to='/checkout'>
                                                   <button
                                                       className="btn btn-primary m-2"
                                                       > Pay Now
                                                   </button>
                                            </Link>


                                        </div>

                                    </div>
                         </section>
                    )}     
             </div>   

         </div>                   
      
    )
}

export default Carts