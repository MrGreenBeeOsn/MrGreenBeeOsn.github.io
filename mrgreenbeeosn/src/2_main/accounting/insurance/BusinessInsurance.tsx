import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function BusinessInsurance(): React.JSX.Element {

  const postId = "BusinessInsurance";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/insurance#insurance-terms"><mark className="highlight-tertiary-padding-4-8">Insurance</mark></HashLink></h4>
      
      <h2 className="margin-y-50 text-center">What is business insurance?</h2>

      {/* This is the content of Law Term. */}

      <p><strong>Business insurance</strong> is a type of insurance that protects businesses from financial losses due to unexpected events, liabilities, or risks.</p>

      <p>It offers a range of policies tailored to meet the specific needs of different businesses, including:</p>

        <ul className="list-square">

          <li><strong>General liability insurance</strong>: Covers bodily injury or property damage caused by the business's operations.</li>

          <li><strong>Property insurance</strong>: Protects the business's physical assets, such as buildings, equipment, and inventory.</li>

          <li><strong>Workers' compensation insurance</strong>: Covers medical expenses and lost wages for employees injured on the job.</li>

          <li><strong>Professional liability insurance</strong> (<strong>Errors and omissions insurance</strong>): Protects professionals from claims of negligence or malpractice.</li>

          <li><strong>Product liability insurance</strong>: Covers claims related to defective products.</li>

          <li><strong>Business interruption insurance</strong>: Covers lost profits and expenses if the business is unable to operate due to a covered loss.</li>

        </ul>
      
      <p className="margin-top-20">The specific types of <strong>business insurance</strong> needed will vary depending on the nature of the business, its size, and the potential risks it faces. By having appropriate <strong>business insurance</strong> in place, businesses can protect their assets, ensure financial stability, and mitigate the impact of unexpected events.</p>

      {/* =============================
            ☘️ Think simply!
      ============================= */}
      
      <hr className="hr-short"/>

      <h3 className="margin-bottom-50 text-center">☘️ Think simply!</h3>

      <p>Let's pretend we're playing a game.</p>

      <p>Imagine you have a lemonade stand. You love to sell lemonade to your friends. But what if someone trips over a bucket and gets hurt? It would be scary, right?</p>

      <p><strong>Business insurance</strong> is like a safety net for your lemonade stand. It's like a promise that if something bad happens to your business, someone will help fix it or pay for the damage.</p>

      <h4 className="margin-y-50 text-center">So, how does it work?</h4>

      <p>You pay a little bit of money every month, just like you might pay for a snack. This money is called a premium. In return, the insurance company promises to help you if something bad happens to your lemonade stand.</p>

      <p>If someone gets hurt or your lemonade stand gets damaged, you can tell the insurance company. They'll check to see if it's covered by your insurance. If it is, they might give you money to fix the damage or pay for the person's doctor's bills.</p>

      <p>That's <strong>business insurance</strong> in a nutshell! It's like having a friend who promises to help you when something bad happens to your business.</p>

      <div className="viewcounter">

        <div className="post-date no-margin">
          <span>August 26, 2024 · by 💎Gem ·</span>
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