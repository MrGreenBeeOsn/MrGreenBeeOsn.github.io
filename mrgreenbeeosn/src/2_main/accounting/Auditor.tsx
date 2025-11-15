import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Auditor(): React.JSX.Element {

  const postId = "Auditor";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/accounting#accounting-terms"><mark className="highlight-tertiary-padding-4-8">Accounting</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">What is an auditor?</h1>

      {/* This is the content of Accounting Term. */}
      
      <p>An <strong>auditor</strong> is like a financial detective. They're responsible for examining a company's financial records and ensuring they are accurate and fair. It's like making sure a detective solves a crime correctly!</p>

      <p className="margin-top-20">Here's what <strong>auditors</strong> do:</p>

        <ul className="list-square">

          <li><strong>Check the Numbers</strong>: They review the company's financial statements, like their income statement and balance sheet, to make sure the numbers are correct.</li>

          <li><strong>Find Mistakes</strong>: <strong>Auditors</strong> look for any errors or mistakes in the numbers. It's like finding a missing clue in a mystery!</li>

          <li><strong>Detect Fraud</strong>: They also look for signs of fraud or illegal activities. This is like catching a thief in a crime.</li>

          <li><strong>Make Sure Everything is Legal</strong>: <strong>Auditors</strong> ensure the company is following all the rules and regulations for accounting. It's like making sure the detective follows the law when solving a case.</li>

          <li><strong>Give Their Opinion</strong>: After their investigation, <strong>auditors</strong> write a report saying whether the financial statements are accurate and fair. This is like the detective presenting their findings to the police.</li>

        </ul>

      <h3 className="margin-y-50 text-center">Why are <strong>auditors</strong> important?</h3>

      <p><strong>Auditors</strong> help ensure that investors, lenders, and other people who trust the company can rely on its financial information. It's like making sure everyone knows the truth about the company's financial health.</p>

      {/* =============================
            ☘️ Think simply!
      ============================= */}

      <hr className="hr-short"/>
      
      <h2 className="margin-bottom-50 text-center">☘️ Think simply!</h2>

      <p>Imagine you're playing detective! You're trying to solve a mystery about a missing toy.</p>

        <ul className="list-square">

          <li><strong>The Detective</strong> (<strong>Auditor</strong>): The <strong>auditor</strong> is like the detective who looks for clues. They check all your toys to make sure they're there and that no one took any.</li>

          <li><strong>The Clues</strong> (<strong>Financial Statements</strong>): The financial statements are like the clues you find in the mystery. They show you how much money you have, how much you spent, and if you have any toys missing.</li>

          <li><strong>Finding Mistakes</strong> (<strong>Errors</strong>): The detective looks for mistakes in the clues, like if you accidentally wrote down the wrong number for how many toys you have.</li>

          <li><strong>Catching Thieves</strong> (<strong>Fraud</strong>): The detective also looks for signs that someone might have taken your toys. This is like catching someone who stole your favorite doll!</li>

          <li><strong>Following the Rules</strong> (<strong>Compliance</strong>): The detective makes sure you're playing fair and following the rules of your house. This is like making sure the company follows all the rules for keeping track of their money.</li>

          <li><strong>Giving a Report</strong> (<strong>Opinion</strong>): After the detective is done investigating, they write a report saying if they found all your toys and if everything is okay. This is like the detective telling you if they solved the mystery!</li>

        </ul>

      <p className="margin-top-20">So, an <strong>auditor</strong> is like a detective who helps make sure everything is okay with a company's money!</p>

      <div className="viewcounter">

        <div className="post-date no-margin">
          <span>October 19, 2024 · by 💎Gem ·</span>
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