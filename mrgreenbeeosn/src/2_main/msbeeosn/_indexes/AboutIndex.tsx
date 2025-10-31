import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import MrBeeOsnTopic from '@/components/MrBeeOsnTopic';
import ExternalLink from '@/components/ExternalLink';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function AboutIndex(): React.JSX.Element {

  const postId = "AboutIndex";

  return (<>
     
  <main className="image image4">

    <article>

      {/* =============================
          Mr.Bee Osn Topic
      ============================= */}
      
        <MrBeeOsnTopic />

      {/* =============================
          About
      ============================= */}

      <div className="container">

        <h1 className="margin-y-50 text-center">Accounting Bee</h1>

        <div className="header">

        {/* <h1 className="margin-y-50 text-center">About</h1> */}
      
          <ul className="list-border">

            <li>Welcome everyone!</li>

            <li>Đây là website <mark className="highlight-255-padding-0-4">Accounting + Kế Toán</mark> nhiều trang nội bộ đầu tiên của mình!</li>
            
            <li>Trang web này được xây dựng để học <mark className="highlight-255-padding-0-4">Accounting & Kế Toán</mark> cơ bản.</li>

          </ul>

        </div>
        
        <div className="group-container">

          <h3 className="margin-top-50 text-center">Cộng đồng chính thức của Accounting Bee</h3>
          <p className="margin-bottom-50 text-center">(WA Business của Facebook)</p>

          <div className="group-title">
            <h2>Group chính</h2>
          </div>
          
          <div className="group-card">
            <h3>🐝 
              <Link to="https://chat.whatsapp.com/K5o1yD7XLtMGiOstKEKkEO" target="_blank">
                Accounting Bee📗 — Hub (thông báo chính)
              </Link>
            </h3>
            <p>Thông báo Kế toán chính thức, quy định!</p>
          </div>
          
          <div className="subgroups">
            <div className="group-title">
                <h2>Group con</h2>
            </div>
            
            <div className="subgroup-card">
              <div className="subgroup-icon">💬</div>
              <div className="subgroup-content">
                <h4>
                  <Link to="https://chat.whatsapp.com/Gtzd16qVdJW3IzzlMijwqo" target="_blank">
                    Internal Chat — Kênh trao đổi nhanh!
                  </Link>
                </h4>
                <p>Kênh trao đổi nhanh chóng và tiện lợi!</p>
              </div>
            </div>
            
            <div className="subgroup-card">
              <div className="subgroup-icon">☘️</div>
              <div className="subgroup-content">
                <h4>
                  <Link to="https://chat.whatsapp.com/BzHtZaao2JU1KVBjHWu5cz" target="_blank">
                    VN — Kế Toán
                  </Link>
                </h4>
                <p>Thảo luận Kế toán, hướng dẫn nội bộ!</p>
              </div>
            </div>
            
            <div className="subgroup-card">
              <div className="subgroup-icon">☘️</div>
              <div className="subgroup-content">
                <h4>
                  <Link to="https://chat.whatsapp.com/LFrhkV7pvsM7UOCAYI99y0" target="_blank">
                    EN — Accounting
                  </Link>
                </h4>
                <p>Thảo luận Accounting, hướng dẫn quốc tế!</p>
              </div>
            </div>
            
            <div className="subgroup-card">
              <div className="subgroup-icon">📁</div>
              <div className="subgroup-content">
                <h4>
                  <Link to="https://chat.whatsapp.com/BTVn7TqIG1305LhHXzKcAd" target="_blank">
                    Files — Nơi lưu tài liệu
                  </Link>
                </h4>
                <p>Chia sẻ tài liệu!</p>
              </div>
            </div>
          </div>
        </div>
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