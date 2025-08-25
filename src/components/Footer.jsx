import React from 'react'

const Footer = () => {
  return (
    <footer>
      {/* Sezione footer-service */}

      <div class="services-bar">

        <div className="utilityMenu">
          <div class="service">
            <img className='imgUtility' src="./img/buy-comics-digital-comics.png" alt="" />
            <span>DIGITAL COMICS</span>
          </div>
          <div class="service">
            <img className='imgUtility' src="./img/buy-comics-merchandise.png" alt="" />
            <span>DC MERCHANDISE</span>
          </div>
          <div class="service">
            <img className='imgUtility' src="./img/buy-comics-subscriptions.png" alt="" />
            <span>SUBSCRIPTION</span>
          </div>
          <div class="service">
            <img className='imgUtility' src="./img/buy-comics-shop-locator.png" alt="" />
            <span>COMIC SHOP LOCATOR</span>
          </div>
          <div class="service">
            <img id="svg-img" src="./img/buy-dc-power-visa.svg" alt="" />
            <span>DC POWER VISA</span>
          </div>
        </div>
      </div>


      {/* Sezione footer-info */}

      <div className="footer-info-container">
        <div className="container footer-info">
          <div className="col-info-left">
            <div className="footer-col">
              <h4>DC COMICS</h4>
              <ul>
                <li><a href="#">Characters</a></li>
                <li><a href="#">Comics</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">TV</a></li>
                <li><a href="#">Games</a></li>
                <li><a href="#">Videos</a></li>
                <li><a href="#">News</a></li>
              </ul>

              <h4>SHOP</h4>
              <ul>
                <li><a href="#">Shop DC</a></li>
                <li><a href="#">Shop DC Collectibles</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>DC</h4>
              <ul>
                <li><a href="#">Terms Of Use</a></li>
                <li><a href="#">Privacy policy (New)</a></li>
                <li><a href="#">Ad Choices</a></li>
                <li><a href="#">Advertising</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Subscriptions</a></li>
                <li><a href="#">Talent Workshops</a></li>
                <li><a href="#">CPSC Certificates</a></li>
                <li><a href="#">Ratings</a></li>
                <li><a href="#">Shop Help</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>SITES</h4>
              <ul>
                <li><a href="#">DC</a></li>
                <li><a href="#">MAD Magazine</a></li>
                <li><a href="#">DC Kids</a></li>
                <li><a href="#">DC Universe</a></li>
                <li><a href="#">DC Power Visa</a></li>
              </ul>
            </div>
          </div>

          <div className="bigLogo">
            <img id="big-logo" src="./img/dc-logo-bg.png" alt="" />

          </div>
        </div>
      </div>

      {/* Sezione footer-buttom */}
      <div className="footer-buttom">
        <div className="container">
          <div className="button">
            <a href="#" class="btn">SIGN-UP NOW!</a>
          </div>
          <div className="social">
            <p id='follow-us'>FOLLOW US</p>
            <img src="./img/footer-facebook.png" alt="" />
            <img src="./img/footer-periscope.png" alt="" />
            <img src="./img/footer-facebook.png" alt="" />
            <img src="./img/footer-periscope.png" alt="" />
            <img src="./img/footer-periscope.png" alt="" />
          </div>
        </div>
      </div>


    </footer>

  )
}

export default Footer
