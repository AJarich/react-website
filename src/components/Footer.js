import React from 'react'
import { Button } from './Button';
import {Link} from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
      <>
        <div className="footer-container">
          <section className="footer_subscription">
            <p className="footer-subscription-heading">
              Join the Adventure Newsletter to receive our best vacation deals
            </p>
            <p className="footer-subscription-text">
              You can unsubscribe at anytime.
            </p>
            <div className="input-areas">
              <form>
                <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                <Button buttonStyle='btn--outline'>Subscribe</Button>
              </form>
            </div>
          </section>
          <div className="footer-links">
            <div className="footer-link-wrapper">
              <div className="footer-link-items">
                <h2>About Us</h2>
                <Link to="/sign-up">How it Works</Link>
                <Link to="/">How it Works</Link>
                <Link to="/">Careers</Link>
                <Link to="/">Investors</Link>
                <Link to="/">Terms of Service</Link>
              </div>
              <div class='footer-link-items'>
               <h2>Contact Us</h2>
               <Link to='/'>Contact</Link>
               <Link to='/'>Support</Link>
               <Link to='/'>Destinations</Link>
               <Link to='/'>Sponsorships</Link>
             </div>
            </div>
            <div className='footer-link-wrapper'>
              <div class='footer-link-items'>
                <h2>Videos</h2>
                <Link to='/'>Submit Video</Link>
                <Link to='/'>Ambassadors</Link>
                <Link to='/'>Agency</Link>
                <Link to='/'>Influencer</Link>
              </div>
            <div class='footer-link-items'>
              <h2>Social Media</h2>
              <Link to='/'>Instagram</Link>
              <Link to='/'>Facebook</Link>
              <Link to='/'>Youtube</Link>
              <Link to='/'>Twitter</Link>
            </div>
           </div>
          </div>
          <section className="social-media">
            <div className="social-media-wrap">
              <div className="footer-logo">
                <Link to="/" className="social-media-logo">
                  <i class="fa fa-tree" aria-hidden="true"></i>TRVL
                </Link>
              </div>
              <small className="website-rights">TRVL © 2022</small>
                <div class='social-icons'>
              <Link
                class='social-icon-link facebook'
                to='/'
                target='_blank'
                aria-label='Facebook'
              >
                <i class="fa fa-facebook-official" aria-hidden="true"></i>
              </Link>
              <Link
                class='social-icon-link instagram'
                to='/'
                target='_blank'
                aria-label='Instagram'
              >
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </Link>
              <Link
                class='social-icon-link youtube'
                to='/'
                target='_blank'
                aria-label='Youtube'
              >
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
              </Link>
              <Link
                class='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='Twitter'
              >
                <i class="fa fa-twitter-square" aria-hidden="true"></i>
              </Link>
              <Link
                class='social-icon-link linkedin'
                to='/'
                target='_blank'
                aria-label='LinkedIn'
              >
                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
              </Link>
            </div>
            </div>
          </section>
        </div>
      </>
    )
}

export default Footer
