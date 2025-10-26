import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function Attorney(): React.JSX.Element {

  const postId = "Attorney";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/law#law-terms"><mark className="highlight-tertiary-padding-4-8">Law</mark></HashLink></h4>
      
      <h2 className="margin-y-50 text-center">What is an attorney?</h2>

      {/* This is the content of Law Term. */}

      <p><strong>Attorney</strong>: A Legal Advocate</p>

      <p>An <strong>attorney</strong> is a legal professional who is authorized to practice law. They are trained in the interpretation and application of laws, and they represent clients in legal matters.</p>

      <p className="margin-top-20">Key Roles of an <strong>Attorney</strong></p>

        <ul className="list-square">

          <li><strong>Legal Representation</strong>: <strong>Attorneys</strong> advocate for their clients' interests in court, negotiations, and other legal proceedings.</li>

          <li><strong>Legal Advice</strong>: They provide guidance on legal rights, obligations, and potential consequences of various actions.</li>

          <li><strong>Document Drafting</strong>: <strong>Attorneys</strong> prepare legal documents such as contracts, wills, and pleadings.</li>

          <li><strong>Research</strong>: They conduct legal research to support their clients' cases and develop legal strategies.</li>

        </ul>
      
      <h4 className="margin-y-50 text-center">Qualifications</h4>
      
      <p>To become an <strong>attorney</strong>, one typically completes a law degree (Juris Doctor or JD) and passes the bar exam in the jurisdiction where they intend to practice.</p>
      
      <p className="margin-top-20"><strong>Note</strong>: While "lawyer" is a broader term encompassing individuals with legal training, "<strong>attorney</strong>" specifically refers to those licensed to practice law in a court of law.</p>

      {/* =============================
            ☘️ Think simply!
      ============================= */}
      
      <hr className="hr-short"/>

      <h3 className="margin-bottom-50 text-center">☘️ Think simply!</h3>
      
      <p>An <strong>attorney</strong> is like a super helper for grown-ups.</p>

      <p>They know all about rules and can help people when they have a big problem. It's like having a really smart friend who can help you win a game.</p>

      <div className="viewcounter">

        <div className="post-date no-margin">
          <span>August 11, 2024 · by 💎Gem ·</span>
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