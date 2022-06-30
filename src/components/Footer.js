import React from 'react'
import {Link} from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
      <>
        <div className="footer-container">
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
