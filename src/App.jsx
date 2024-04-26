
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingpage'
import Navbar from './components/navbar';
import About from './components/about';
import Terms from './components/terms&condition';
import Footer from './components/footer'
import Contact from './components/contact';
import Message from './components/message';
import Callus from './components/callus';
import SignIn from './components/signin';
import SignUp from './components/signup';
import Forgot from './components/forgot';
import Reset from './components/reset';
import Email from './components/emailverification';
import Dashboard from './components/dashboard';
import Carts from './components/carts';
import CheckOut from './components/checkout';
import Payment from './components/payment';
import PaymentForm from './components/paymentform';
import FinalCheckOut from './components/finalcheckout';
import Appliances from './components/appliances';
import { CartProvider } from 'react-use-cart';
import Babyproduct from './components/babyproducts';
import Computing from './components/computing';
import Electronics from './components/electronics';
import Fashion from './components/fashion';
import Menfash from './components/menfash';
import Womenfash from './components/womenfash';
import Kidfashion from './components/kidfashion';
import Game from './components/game';
import Health from './components/health';
import Super from './components/super';
import Phone from './components/phone';


function App() {

  return (
    
    <Router>
      <div className='App'>
        <Navbar/>
          <CartProvider>
           <Routes>
              <Route path='/' element={<LandingPage/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/terms&condition' element={<Terms/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/message' element={<Message/>}/>
              <Route path='/callus' element={<Callus/>}/>
              <Route path='/signin' element={<SignIn/>}/>
              <Route path='/signup' element={<SignUp/>}/>
              <Route path='/forgot' element={<Forgot/>}/>
              <Route path='/reset' element={<Reset/>}/>
              <Route path='/emailverification' element={<Email/>}/>
              <Route path='/dashboard' element={<Dashboard/>}/>
              <Route path='/carts' element={<Carts/>}/>
              <Route path='/checkout' element={<CheckOut/>}/>
              <Route path='/payment' element={<Payment/>}/>
              <Route path='/paymentform' element={<PaymentForm/>}/>
              <Route path='/finalcheckout' element={<FinalCheckOut/>}/>
              <Route path='/appliances' element={<Appliances/>}/>
              <Route path='/babyproducts' element={<Babyproduct/>}/>
              <Route path='/computing' element={<Computing/>}/>
              <Route path='/electronics' element={<Electronics/>}/>
              <Route path='/fashion' element={<Fashion/>}/>
              <Route path='/menfash' element={<Menfash/>}/>
              <Route path='/womenfash' element={<Womenfash/>}/>
              <Route path='/kidfashion' element={<Kidfashion/>}/>
              <Route path='/game' element={<Game/>}/>
              <Route path='/health' element={<Health/>}/>
              <Route path='/super' element={<Super/>}/>
              <Route path='/phone' element={<Phone/>}/>
            </Routes> 
         </CartProvider>  
        <Footer/>
        
      </div>
    </Router>  

  )
}

export default App
