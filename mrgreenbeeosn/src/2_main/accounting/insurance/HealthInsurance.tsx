import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function HealthInsurance(): React.JSX.Element {

  const postId = "HealthInsurance";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/insurance#insurance-terms"><mark className="highlight-tertiary-padding-4-8">Insurance</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">What is insurance?</h1>

      {/* This is the content of Law Term. */}

      <p><strong>Health insurance</strong> is a financial arrangement that provides coverage for medical expenses. It's a contract between an individual or group (the insured) and an insurance company (the insurer).</p>

      <p className="margin-top-20">How it works:</p>

      <h3 className="margin-y-50 text-center">Premiums:</h3>
      
      <p>The insured pays a regular fee, often monthly or annually, to the insurer.</p>
      
      <h3 className="margin-y-50 text-center">Coverage:</h3>
      
      <p>The insurer agrees to cover certain medical expenses, such as:</p>

        <ul className="list-square">

          <li>Doctor's visits</li>

          <li>Hospital stays</li>

          <li>Prescription medications</li>

          <li>Surgical procedures</li>

          <li>Mental health services</li>

          <li>Dental care (in some plans)</li>

        </ul>

      <h3 className="margin-y-50 text-center">Claims:</h3>
      
      <p>When the insured needs medical care, they file a claim with the insurer.</p>
      
      <h3 className="margin-y-50 text-center">Reimbursement:</h3>
      
      <p>The insurer may pay the healthcare provider directly or reimburse the insured for the covered expenses.</p>
      
      <p className="margin-top-20">Types of <strong>health insurance</strong>:</p>

        <ul className="list-square">

          <li><strong>Individual health insurance</strong>: Purchased by individuals or families.</li>

          <li><strong>Employer-sponsored health insurance</strong>: Offered by employers to their employees.</li>

          <li><strong>Government-sponsored health insurance</strong>: Programs like Medicare (for seniors) and Medicaid (for low-income individuals).</li>

        </ul>
      
      <p className="margin-top-20">Key terms to understand:</p>

        <ul className="list-square">

          <li><strong>Deductible</strong>: The amount the insured must pay out of pocket before the insurer starts to cover costs.</li>

          <li><strong>Co-pay</strong>: A fixed amount paid by the insured at the time of service.</li>

          <li>Co-insurance: A percentage of the medical bill that the insured must pay.</li>

          <li><strong>Out-of-pocket maximum</strong>: The maximum amount the insured must pay for medical expenses in a year.</li>

          <li><strong>Network</strong>: A group of healthcare providers who have agreed to accept lower rates from the insurer.</li>

        </ul>
      
      <p className="margin-top-20"><strong>Health insurance</strong> is crucial for protecting against the high costs of medical care. It provides financial security and peace of mind by ensuring that necessary medical treatment is affordable.</p>

      {/* =============================
            ☘️ Think simply!
      ============================= */}
      
      <hr className="hr-short"/>

      <h2 className="margin-bottom-50 text-center">☘️ Think simply!</h2>

      <p>Let's pretend we're playing a game.</p>

      <p>Imagine you're feeling sick and need to see a doctor. It would be scary and expensive, right?</p>

      <p><strong>Health insurance</strong> is like a magic shield. It helps protect you from getting hurt too much if you get sick.</p>

      <h3 className="margin-y-50 text-center">So, how does it work?</h3>
      
      <p>You pay a little bit of money every month, just like you might pay for a snack. This money is called a premium. In return, the insurance company promises to help you if you get sick.</p>

      <p>If you get sick, you can go to the doctor. The insurance company will help pay for your visit and any medicine you need.</p>

      <p>That's <strong>health insurance</strong> in a nutshell! It's like having a friend who promises to help you when you're not feeling well.</p>

      <div className="viewcounter">

        <div className="post-date no-margin">
          <span>August 23, 2024 · by 💎Gem ·</span>
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