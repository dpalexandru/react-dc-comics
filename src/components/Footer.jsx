import React from 'react'

const Footer = () => {
  return (
    <footer>

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



    </footer>

  )
}

export default Footer
