import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import MrBeeOsnTopic from '@/components/MrBeeOsnTopic';
import ExternalLink from '@/components/ExternalLink';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function Portfolio(): React.JSX.Element {

  const postId = "Portfolio";

  return (<>
     
  <main className="image image4">

    <article>

      {/* =============================
          Mr.Bee Osn Topic
      ============================= */}
      
        <MrBeeOsnTopic />

      {/* =============================
          Portfolio
      ============================= */}

      <h1 className="margin-y-50 text-center">Portfolio</h1>
      
        <div className="container">

        <header>

          <h1 className="name">KHAU TRONG HIEU</h1>
          <div className="title">General Accountant | VAS | Tax Compliance | Financial Reporting</div>
          <div className="location">📍 Hoc Mon District, HCMC</div>
          
          <div className="contact-info">

            <div className="contact-item">📞 (+84) 906 920 292</div>

            <div className="contact-item">
              📧
              <a href="mailto:hieukhau@outlook.com" className="email-link">
                hieukhau@outlook.com
              </a>
            </div>

            <div className="contact-item">
              💼 
              <a href="linkedin.com/in/hieukhau" className="email-link">
                linkedin.com/in/hieukhau
              </a>
            </div>

            <div className="contact-item">
              🌐
              <a href="MrGreenBeeOsn.github.io" className="email-link">
                MrGreenBeeOsn.github.io
              </a>
              🔊📖
            </div>

          </div>

        </header>
        
        <section className="summary">

          <h2 className="portfolio-h2">SUMMARY</h2>

          <p className="margin-top-20">General Accountant with 5+ years of experience in VAS financial reporting, Vietnamese tax compliance, and full-cycle accounting operations. After a professional development period focused on IFRS learning and business English enhancement, actively seeking to return to full-time accounting practice.</p>
          
          <h3 className="margin-y-50 text-center">💼 Professional Background</h3>

          <div className="competencies">
              <div className="competency-item">VAS financial statements preparation and analysis</div>
              <div className="competency-item">Tax compliance: VAT, CIT, PIT, FCT filing and liaison with authorities</div>
              <div className="competency-item">Month-end and year-end closing procedures</div>
              <div className="competency-item">Account reconciliation, variance analysis, and financial controls</div>
              <div className="competency-item">Accounts payable/receivable and bank reconciliation</div>
          </div>

          <div className="skills-list">
              <div className="technical-item">Accounting Software: MISA AMIS, SMARTPRO, QuickBooks Online (Familiar)</div>
              <div className="technical-item">Spreadsheets: Advanced Excel (Pivot Tables, VLOOKUP, financial analysis)</div>
              <div className="technical-item">Standards: VAS (Proficient), IFRS (Foundational through self-study)</div>
              <div className="technical-item">Languages: Vietnamese (Native), English (Good working proficiency)</div>
          </div>
          
          {/* <p className="margin-top-50">I maintain a bilingual educational blog at MrGreenBeeOsn.github.io where I share insights on accounting standards, taxation, and business English.</p> */}

          <p className="margin-top-50">Ready to return to full-time accounting practice and apply updated knowledge in professional environment</p>

        </section>
        
        <section className="experience">
          <h2 className="portfolio-h2">💼 ACCOUNTING EXPERIENCE</h2>
          <div className="experience-item">
              <h3>General Accountant</h3>
              {/* <div className="date"></div> */}
              <ul>
                  <li>Prepared and analyzed VAS-compliant financial statements</li>
                  <li>Managed full-cycle accounting operations</li>
                  <li>Ensured tax compliance for VAT, CIT, PIT, and FCT</li>
                  <li>Executed month-end and year-end closing procedures</li>
                  <li>Performed account reconciliation and variance analysis</li>
              </ul>
          </div>
          {/* Thêm các kinh nghiệm khác tại đây */}
        </section>
        
        <section className="education">
          <h2 className="portfolio-h2">🎓 EDUCATION</h2>
          <div className="education-item">
              <h3>1.	University of Economics Ho Chi Minh City (UEH)</h3>
              <div className="date">2016 – 2020</div>
              <div className="date">Bachelor of Accounting – Major: Corporate Accounting</div>
          </div>
          <div className="education-item">
              <h3>2.	Ho Chi Minh City University of Industry and Trade (HUIT)</h3>
              <div className="date">2010 - 2014</div>
              <div className="date">Bachelor of Business Administration</div>
          </div>
        </section>
        
        <section className="certifications">
          <h2 className="portfolio-h2">📜 LICENCE & CERTIFICATIONS</h2>
          <div className="certification-item">
              <h3>Chief Accountant Certificate</h3>
              <div className="date">2020</div>
          </div>
          <div className="certification-item">
              <h3>General Accounting Certificate</h3>
              <div className="date">2019</div>
          </div>
          <div className="certification-item">
              <h3>Corporate Accounting & Tax</h3>
              <div className="date">2016</div>
          </div>
        </section>
        
      <section className="skills">
        <h2 className="portfolio-h2">Skills</h2>
        <div className="skills-container">
          <div className="skill-category">
              <h3>Accounting Standards</h3>
              <div className="skill-item">VAS</div>
              <div className="skill-item">IFRS</div>
          </div>
          <div className="skill-category">
              <h3>Taxation</h3>
              <div className="skill-item">Tax Compliance</div>
              <div className="skill-item">VAT, CIT, PIT, FCT</div>
          </div>
          <div className="skill-category">
              <h3>Financial</h3>
              <div className="skill-item">Financial Reporting</div>
              <div className="skill-item">Account Reconciliation</div>
              <div className="skill-item">Month-end Closing</div>
          </div>
          <div className="skill-category">
              <h3>Software</h3>
              <div className="skill-item">MISA AMIS</div>
              <div className="skill-item">Excel</div>
          </div>
        </div>
        
      </section>

    </div>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>by 🐝Mr. Bee Osn ·</span>
        </div>

        <div className="eye-icon no-margin">
          <EyeIcon />
        </div>

        <div className="post-date no-margin">
          <ViewCounter postId={postId} />
        </div>

        <div className="like-button no-margin">
          <LikeButton postId={postId} />
        </div>

      </div>

    </article>
    
  </main>

  </>);
}