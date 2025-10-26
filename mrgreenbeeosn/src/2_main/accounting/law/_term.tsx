import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function (): React.JSX.Element {

  const postId = "";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/law#law-terms"><mark className="highlight-tertiary-padding-4-8">Law</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">What is law?</h1>

      {/* This is the content of Law Term. */}

      

      {/* =============================
            ☘️ Think simply!
      ============================= */}
      
      <hr className="hr-short"/>

      <h2 className="margin-bottom-50 text-center">☘️ Think simply!</h2>

    

      <div className="viewcounter">

        <div className="post-date no-margin">
          <span> · by 💎Gem ·</span>
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