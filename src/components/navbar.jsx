
import logo from "../assets/brandlogo.png"
import {Link} from "react-router-dom"



const Navbar=()=>{
    return(
        <>
             {/* -----------------------------------------------------navbar section-----------------------------------------*/}

      <nav className="navbar navbar-expand-lg navbar-light bg-light home" style={{marginTop:'20px', padding:'0px 10px'}}>
          <div className="container-fluid" >
                <Link to="/" className="navbar-brand" href="#">
                 <img src={logo}alt="Brand Logo" style={{width:'60px', borderRadius:'50%'}}/>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link to='/about' className="nav-link active" aria-current="page" href="#" style={{color:'black'}}>About Us</Link>
                    </li>
 
                    <li className="nav-item dropdown" >
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'black'}}>
                        Collections
                      </a>
                          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                  <Link to='/appliances' style={{textDecoration:'none'}}> <li><a className="dropdown-item" href="#">Appliances</a></li></Link> 
                                    <li><hr className="dropdown-divider"/></li>
                                  <Link to='/babyproducts' style={{textDecoration:'none'}}><li><a className="dropdown-item" href="#">Baby Products</a></li></Link> 
                                    <li><hr className="dropdown-divider"/></li>
                                  <Link to='computing' style={{textDecoration:'none'}}><li><a className="dropdown-item" href="#">Computing</a></li></Link> 
                                    <li><hr className="dropdown-divider"/></li>
                                   <Link to='/electronics' style={{textDecoration:'none'}}> <li><a className="dropdown-item" href="#">Electronics</a></li></Link> 
                                    <li><hr className="dropdown-divider"/></li>
                                  <Link to='/fashion' style={{textDecoration:'none'}}><li><a className="dropdown-item" href="#">Fashion</a></li></Link>  
                                    <li><hr className="dropdown-divider"/></li>
                                  <Link to='/game' style={{textDecoration:'none'}}><li><a className="dropdown-item" href="#">Gaming</a></li></Link>
                                    <li><hr className="dropdown-divider"/></li>
                                   <Link to='/health' style={{textDecoration:'none'}}><li><a className="dropdown-item" href="#">Health & Beauty</a></li></Link>
                                    <li><hr className="dropdown-divider"/></li>
                                   <Link to='/super' style={{textDecoration:'none'}}><li><a className="dropdown-item" href="#">SuperMarket</a></li></Link> 
                                    <li><hr className="dropdown-divider"/></li>
                                   <Link to='/Phone' style={{textDecoration:'none'}}><li><a className="dropdown-item" href="#">Phones & Tablets</a></li></Link> 
                                    <li><hr className="dropdown-divider"/></li>
                          </ul>
                    </li>

                    <li className="nav-item">
                      <Link to='/contact' className="nav-link" href="#" style={{color:'black'}}>Contact Us</Link>
                    </li>

                    <li className="nav-item">
                      <Link to='/terms&condition' className="nav-link" href="#" style={{color:'black'}}>Terms & Conditions</Link>
                    </li>
                  </ul>
                  
                  <div style={{display:'flex'}}>
                      <div className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color:'black'}}>
                                 <i className="bi bi-person"></i>
                                  Account
                            </a>

                           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                               <Link to='/signin'><button className="btn btn-success" type="submit" style={{marginLeft:'15px'}}>Sign In</button></Link> 
                               <li><hr className="dropdown-divider"/></li>
                           </ul>
                      </div>

                  </div>

                  <form className="d-flex">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                      <button className="btn btn-outline-success" type="submit">Search</button>
                 </form>
              </div>
           </div>
       </nav>
        </>
    )
}

export default Navbar;