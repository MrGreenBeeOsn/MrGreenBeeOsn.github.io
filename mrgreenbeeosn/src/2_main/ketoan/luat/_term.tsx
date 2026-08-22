import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function (): React.JSX.Element {

  const postId = "";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/luat#thuat-ngu-luat"><mark className="highlight-tertiary-padding-4-8">Luật</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">Luật thuế là gì?</h1>

      {/* Đây là nội dung của Thuật ngữ Luật. */}

      

      {/* =============================
          ☘️ Hãy nghĩ thật đơn giản!
      ============================= */}

      <hr className="hr-short"/>

      <h3 className="margin-bottom-50 text-center">☘️ Hãy nghĩ thật đơn giản!</h3>

      

      <div className="viewcounter">

        <div className="post-date no-margin">
          <span> · by 💎GEM ·</span>
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