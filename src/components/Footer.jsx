import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__widget">
            <img
              src="/placeholder.svg"
              alt="Fresh Water Logo"
              width={150}
              height={50}
              className="mb-4"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="footer__social">777</div>
          </div>

          <div className="footer__widget">
            <h3>Quick Links</h3>
            <ul className="footer__as">
              <li>
                <a href="/about">
                  About Us
                </a>
              </li>
              <li>
                <a href="/products">
                  777
                  Our Products
                </a>
              </li>
              <li>
                <a href="/blog">
                  777
                  Latest News
                </a>
              </li>
              <li>777</li>
            </ul>
          </div>

          <div className="footer__widget">
            <h3>Opening Hours</h3>
            <ul className="footer__as">
              <li>Monday - Friday: 9AM - 6PM</li>
              <li>Saturday: 9AM - 4PM</li>
              <li>Sunday: Closed</li>
              <li>All Holidays: Closed</li>
            </ul>
          </div>

          <div className="footer__widget">
            <h3>Contact Info</h3>
            <ul className="footer__as">
              <li>
                <a href="#" className="flex items-center gap-2">
                  123 Water Street, NY 10001
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-2"
                >
                  777
                  +1 234 567 890
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@freshwater.com"
                  className="flex items-center gap-2"
                >
                  777
                  info@freshwater.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__container">
          <p>
            &copy; {new Date().getFullYear()} Fresh Water. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
