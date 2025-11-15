import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Law(): React.JSX.Element {

  const postId = "Law";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/law#law-terms"><mark className="highlight-tertiary-padding-4-8">Law</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">What is law?</h1>

      {/* This is the content of Law Term. */}

      <p><strong>Law</strong>: A Framework for Society</p>

      <p><strong>Law</strong> is a system of rules and guidelines created and enforced by a governing authority to regulate behavior within a society. It serves as a framework to maintain order, protect individuals and property, and resolve disputes.</p>

      <p className="margin-top-20">Core Functions of <strong>Law</strong>:</p>

        <ul className="list-square">

          <li><strong>Order and Stability</strong>: <strong>Law</strong> provides a structured environment, preventing chaos and ensuring predictability.</li>

          <li><strong>Justice</strong>: It aims to uphold fairness and equity in dealing with individuals and groups.</li>

          <li><strong>Protection</strong>: <strong>Law</strong> safeguards individual rights, property, and public safety.</li>

          <li><strong>Dispute Resolution</strong>: It offers mechanisms to settle disagreements peacefully.</li>

          <li><strong>Social Control</strong>: <strong>Law</strong> influences societal behavior by establishing norms and expectations.</li>

        </ul>
      
      <p className="margin-top-20">Sources of <strong>Law</strong>:</p>

        <ul className="list-square">

          <li><strong>Legislation</strong>: <strong>Laws</strong> created by elected representatives (statutes).</li>

          <li><strong>Common Law</strong>: Judge-made <strong>law</strong> based on precedent (previous cases).</li>

          <li><strong>Constitutions</strong>: Fundamental <strong>laws</strong> outlining a state's or nation's governing principles.</li>

          <li><strong>Administrative Law</strong>: Rules and regulations issued by government agencies.</li>

          <li><strong>International Law</strong>: Treaties and agreements between nations.</li>

        </ul>

      <p className="margin-top-20">Branches of <strong>Law</strong>:</p>

        <ul className="list-square">

          <li><strong>Criminal Law</strong>: Deals with offenses against the state (e.g., murder, theft).</li>

          <li><strong>Civil Law</strong>: Concerns disputes between individuals or organizations (e.g., contracts, torts).</li>

          <li><strong>Constitutional Law</strong>: Focuses on the interpretation and application of a constitution.</li>

          <li><strong>Administrative Law</strong>: Governs the activities of government agencies.</li>

          <li><strong>International Law</strong>: Regulates the relationships between nations.</li>

        </ul>

      <p className="margin-top-20">Essentially, <strong>law</strong> is a dynamic and evolving system that reflects the values and aspirations of a society. It is a complex interplay of rules, principles, and procedures designed to balance individual rights with the collective good.</p>

      {/* =============================
            ☘️ Think simply!
      ============================= */}
      
      <hr className="hr-short"/>

      <h2 className="margin-bottom-50 text-center">☘️ Think simply!</h2>

      <p><strong>Law</strong> is like the rules of a big playground.</p>

      <p>Imagine the whole world is a giant playground. There are lots of kids playing, and everyone needs to know how to play nicely together. <strong>Law</strong> is like the rules that tell us what we can and can't do on this big playground.</p>

      <h3 className="margin-y-50 text-center">For example</h3>

      <p>One rule might be: "Don't hit other kids." That's a <strong>law</strong>! Or, "Share your toys." That's a <strong>law</strong> too.</p>

      <p>Grown-ups make these rules to keep everyone safe and happy.</p>

      <p className="margin-top-20">So, <strong>law</strong> helps us all play together without fighting or being mean.</p>

      <div className="viewcounter">

        <div className="post-date no-margin">
          <span>August 1, 2024 · by 💎Gem ·</span>
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