import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import SearchComponent from '@/components/search/SearchComponent';
import VideoSearch from '@/components/video/VideoSearch';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons'
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

export default function Home(): React.JSX.Element {
  
  return (<>
     
  <main className="image">

    <article>

      <div className="margin-top-50">
    
        <header className="portfolio-header title">

          <h1 className="name">ßee AccDev</h1>
          <div className="title">🐝 🅰️ccounting learner</div>

          <div className="margin-top-10 location"><FontAwesomeIcon icon={faLocationDot} /> HM District, HCMC</div>
          <div className="graduation"><FontAwesomeIcon icon={faGraduationCap} /> University of Economics HCMC</div>
          
          <div className="contact-info">

            <div className="contact-item">
              <FontAwesomeIcon icon={faInstagram} />
              <Link to="https://www.instagram.com/mr.greenbee.ongsiengnang/" className="email-link" target="_blank">
                Instagram
              </Link>
            </div>

            <div className="contact-item">
              <FontAwesomeIcon icon={faTiktok} />
              <Link to="https://www.tiktok.com/@mr.greenbee.ongsiengnang" className="email-link" target="_blank">
                TikTok
              </Link>
            </div>

            <div className="contact-item">
              <FontAwesomeIcon icon={faWhatsapp} />
              <Link to="https://chat.whatsapp.com/K5o1yD7XLtMGiOstKEKkEO" className="email-link" target="_blank">
                WhatsApp
              </Link>
            </div>

            {/* <div className="contact-item">
              <FontAwesomeIcon icon={faGithub} />
              <Link to="https://github.com/MrGreenBeeOsn" className="email-link" target="_blank">
                GitHub
              </Link>
            </div> */}

          </div>

        </header>

        <div className="bee-wrapper1">
          <img src="/assets/images/bee3.png" alt="Mr. Bee Osn"/>
        </div>

      </div>

      <h1 className="margin-y-50 text-center">☘️ Welcome!</h1>

      <div className="table-search margin-bottom-50">
			
				{/* <SearchComponent />
        
        <VideoSearch /> */}
							
			</div>

      <p className="quote">

        🐝 <Link to="/accounting/what-is-accounting?">Accounting</Link> is the system of <mark className="highlight-255-padding-0-4">recording, classifying, summarizing, and analyzing</mark> <mark className="highlight-255-padding-0-4">financial transactions</mark> of a business or individual. 📊

      </p>
      
      <p className="quote">

        🐝 <Link to="/ke-toan/ke-toan-la-gi?">Kế toán</Link> là một ngành nghề <mark className="highlight-255-padding-0-4">ghi chép, thu thập, sắp xếp và tổng hợp thông tin tài chính</mark> của một tổ chức.
        
      </p>

      <div className="grid">
        <div className="card2">
          <p className="text-small no-margin">
        
            ☕ Happy <mark className="highlight-tertiary-padding-2-4">reading</mark> today!&nbsp;

            <Link to="https://www.microsoft.com/en-us/edge/features/read-aloud" className="speaker-link" target="_blank" data-title="Play read aloud">

              <i className="fa-solid fa-volume-high speaker-icon">&nbsp;</i>

            </Link>

            <i className="fa-solid fa-book-open-reader reader-icon"></i>
      
          </p>
        </div>
      </div>

      <p className="margin-bottom-50 text-center text-small">
          
        __Summer, 2025 · by <Link to="/about">Mr. ßee</Link>--
          
      </p>

    </article>

  </main>

  </>);
}