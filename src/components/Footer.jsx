import React from 'react';


{/* Creo array con oggetti dentro */ }
const footerInfo = [
  {
    id: 1,
    title: "DC COMICS",
    links: [
      "Characters",
      "Comics",
      "Movies",
      "TV",
      "Games",
      "Videos",
      "News"
    ]
  },
  {
    id: 2,
    title: "SHOP",
    links: [
      "Shop DC",
      "Shop DC Collectibles"
    ]
  },
  {
    id: 3,
    title: "DC",
    links: [
      "Terms Of Use",
      "Privacy policy (New)",
      "Ad Choices",
      "Advertising",
      "Jobs",
      "Subscriptions",
      "Talent Workshops",
      "CPSC Certificates",
      "Ratings",
      "Shop Help",
      "Contact Us"
    ]
  },
  {
    id: 4,
    title: "SITES",
    links: [
      "DC",
      "MAD Magazine",
      "DC Kids",
      "DC Universe",
      "DC Power Visa"
    ]
  }
];

const Footer = () => {
  return (
    <footer>

      {/* Sezione footer-info */}
      <div className="footer-info-container">
        <div className="container footer-info">
          <div className="col-info-left">

            {/* Itero array con oggetti dentro */}
            {footerInfo.map((item) => (
              <div className="footer-col" key={item.id}>
                <h4>{item.title}</h4>
                <ul>

                  {/* Itero array dentro ogetto */}
                  {item.links.map((link, i) => (
                    <li key={item.id + "-" + i}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
            <a href="#" className="btn">SIGN-UP NOW!</a>
          </div>
          <div className="social">
            <p id='follow-us'>FOLLOW US</p>
            <img src="./img/footer-facebook.png" alt="" />
            <img src="./img/footer-periscope.png" alt="" />
            <img src="./img/footer-pinterest.png" alt="" />
            <img src="./img/footer-twitter.png" alt="" />
            <img src="./img/footer-youtube.png" alt="" />
          </div>
        </div>
      </div>


    </footer>

  )
}

export default Footer;
