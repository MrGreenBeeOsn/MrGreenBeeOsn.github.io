import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import MrBeeOsnTopic from '@/components/MrBeeOsnTopic';
import ExternalLink from '@/components/ExternalLink';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function ProjectIndex(): React.JSX.Element {

  const postId = "ProjectIndex";

  return (<>
     
  <main className="image image4">

    {/* =============================
        Mr.Bee Osn Topic
    ============================= */}
    
      <MrBeeOsnTopic />

    {/* =============================
        About
    ============================= */}

    <h2 className="margin-y-50 text-center">Project</h2>

    <h2 className="year" id="2025">2025</h2>

      <ul className="month-list">

        <li><span className="month">Mr. Bee - Ong siêng năng</span></li>

        <li><span className="month"></span>🚀 What is <Link to="/accounting/what-is-accounting?">accounting</Link>?</li>

        <li><span className="month"></span>🚀 What is <Link to="https://mrbluebeeosn.github.io/#/bookkeeping/what-is-bookkeeping">bookkeeping <sup><ExternalLink /></sup></Link>?</li>

        <li><span className="month"></span>🚀 What is <Link to="https://mrblackbeeosn.github.io/#/programming/what-is-programming">programming <sup><ExternalLink /></sup></Link>?</li>

      </ul>

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
    
  </main>

  </>);
}