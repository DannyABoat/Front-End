import photo1 from '../images/download.png'
import photo2 from '../images/uk-hero-illo.png'
import photo3 from '../images/QR-code.png'
import photo4 from '../images/Pay-in3.png'
import photo5 from '../images/Yellow_Yoga.png'
import photo6 from '../images/Notification.gif'
import photo7 from '../images/Touch.gif'

const Body =() => {
    return(
    <div className='second'>
      <nav className="flex-nav">
        <ul>
          <li><img src={photo1} height="90px" width="150px" alt = ""></img></li>
          <li><a href="#"><h3>Personal</h3></a></li>
          <li><a href="#"><h3>Business</h3></a></li>
          <li><a href="#"><h3>Develop</h3></a></li>
          <li><a href="#"><h3>Help</h3></a></li>
        </ul>
     </nav>  
    

      <div className="blockOne">
        <p>
            <h1>The New PayPal app is here</h1>  
        </p>

        <div className="hero">
            <img style={{float: "right"}}
            src={photo2} height="400px" width="350px" alt=""></img>
        </div>

        <div className="QR">
            <img style={{float: "left"}}
            src={photo3} height="120px" width="100px"  alt=""></img>
        </div> 

        <div>
            <ol>
                <li>Open your phone's camera</li>
                <li>Scan the QR Code</li>
                <li>Get the app</li>
            </ol>
        </div>

        <div className="last">
            <p>
            <h4>Learn more about the new features</h4>
            </p>
        </div>   

        <div>
            <p1>Looking for PayPal Business? Whether you're local or global, we're here to support you</p1>
            
        </div>       
      </div>


      <div className="payInThree">
        <img style={{float: "right"}}
        src={photo4} height="300px" width="500px"  alt=""></img>
        <p2>
            Pay Later with <br></br> PayPal Pay in 3
        </p2>
        <br></br><br></br>
        <p3>
            Split purchases into three interest-free monthly payments at millions <br></br> of stores online.
            <br></br><br></br>
            <a href="https://www.paypal.com/uk/webapps/mpp/paypal-payin3">Find Out More</a>
            <br></br><br></br>
            Subject to status. UK residents only. PayPal is a responsible lender. <br></br> Pay in 3 performance may influence your credit score. T&Cs apply.
        </p3>
       </div>

      <div>
        <img style= {{float: "left"}}
        src={photo5} height="350px" width="450px"  alt=""></img>
      </div>    
      <div className="yoga">    
        <p2>Send money in seconds</p2>
        <br></br><br></br>
        <p3>
            Do more with friends – send money, split bills and pool funds from <br></br> friends quickly and easily, with just a mobile number or email address.*
            <br></br><br></br>
            <a href="https://www.paypal.com/uk/webapps/mpp/mobile-apps">Download the App</a>
        </p3>
      </div>

      <div classNames="notification">
        <img style={{float: "right"}}
        src={photo6} height="350px" width="450px"  alt=""></img>
        <p2>Get instant spend <br></br> notifications</p2>
        <br></br><br></br>
        <p3>
            Whether shopping at your usual store or somewhere new, we help keep <br></br> checkout fast and your purchase protected.** You also get instant <br></br> spend notifications, so you can easily keep track of all your online <br></br> hauls.
            <br></br><br></br>
            <a href="https://www.paypal.com/uk/webapps/mpp/mobile-apps">Download the App</a>
        </p3>    
    </div>

    
    <div>
        <img style={{float: "left"}}
        src={photo7} height="350px" width="450px"  alt=""></img>
    </div>
    <div class="touch">
        <p2>NewPay touch-free</p2>
        <br></br><br></br>
        <p3>
            With the PayPal app, the only thing you need to touch when you pay <br></br> in-person, is your own phone.
            <br></br><br></br>
            <a href="https://www.paypal.com/uk/webapps/mpp/qrcode">Learn more</a>
        </p3>
    </div>

    
    </div>  
    )
}

export default Body;
