import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function TAccount(): React.JSX.Element {

  const postId = "TAccount";

  return (<>

  <main className="image image2">

    <article>
      
      <h4><HashLink smooth to="/accounting#accounting-terms"><mark className="highlight-tertiary-padding-4-8">Accounting</mark></HashLink></h4>

      <h1 className="margin-y-50 text-center">What is a T-account?</h1>

      {/* This is the content of Accounting Term. */}

      <p>A <strong>T-account</strong> is a simple visual tool used in accounting to represent a  specific account  and track the  increases  and  decreases  in its balance over time. It's shaped like the letter "T," hence the name.</p>

      <p className="margin-top-20">Here's a breakdown of <strong>T-accounts</strong>:</p>

      <p className="margin-top-20">Structure:</p>
      
        <ul className="list-square">
      
          <li>The account title is written above the horizontal line of the T.</li>
      
          <li>The left side of the T represents debit (DR) entries, which typically increase asset and expense accounts and decrease liability and equity accounts.</li>
      
          <li>The right side of the T represents credit (CR) entries, which typically decrease asset and expense accounts and increase liability and equity accounts.</li>

          <li>Amounts are recorded next to their respective sides (debit or credit) according to the transaction.</li>
      
        </ul>

      <p className="margin-top-20">Example:</p>

      <p className="text-indent-whole">Let's consider a  Cash  account.</p>
      
        <ul className="list-square">
      
          <li><strong>Account Title</strong>: Cash (DR)</li>
      
          <li><strong>Left Side</strong> (<strong>Debit</strong>): This side would record inflows of cash, such as cash received from customers for sales or a loan from a bank.</li>
      
          <li>Benefits of Using <strong>T-Accounts</strong>:</li>
      
        </ul>

      <p className="margin-top-20">Benefits of Using <strong>T-Accounts</strong>:</p>
      
        <ul className="list-square">
      
          <li><strong>Visualization</strong>: <strong>T-accounts</strong> provide a clear and easy-to-understand way to visualize the flow of debits and credits within an account.</li>
      
          <li><strong>Learning Tool</strong>: They are helpful for beginners in accounting to grasp the fundamental principles of double-entry bookkeeping.</li>
      
          <li className="margin-bottom-20">Transaction Analysis: <strong>T-accounts</strong> can be used to analyze individual transactions and understand their impact on specific accounts.</li>
      
        </ul>

      <p>Limitations of <strong>T-Accounts</strong>:</p>
      
        <ul className="list-square">
      
          <li><strong>Simplicity</strong>: <strong>T-accounts</strong> are not suitable for complex accounting scenarios with multiple transactions involving various accounts.</li>
      
          <li><strong>Limited Information</strong>: They don't provide details about the nature of transactions, only the monetary amounts.</li>
      
        </ul>

      <p className="margin-top-20">In conclusion, <strong>T-accounts</strong> are a foundational tool in accounting that helps represent individual accounts and track their activity visually. While they have limitations for comprehensive accounting, they are valuable for understanding basic accounting concepts and the impact of transactions on financial statements.</p>

      {/* =============================
            ☘️ Think simply!
      ============================= */}

      <hr className="hr-short"/>

      <h2 className="margin-bottom-50 text-center">☘️ Think simply!</h2>

      <p>Imagine you have a cool lemonade stand, and you're the best lemonade maker in town! You need to keep track of all the money coming in and going out for your stand. A <strong>T-account</strong> is like a special tool that helps you do just that, like a mini notebook for each part of your lemonade business.</p>

      <p className="margin-top-20">Think of it like this:</p>
      
        <ul className="list-square">
      
          <li><strong>Your lemonade stand</strong>: This is like a small business, and you're the awesome owner!</li>
      
          <li><strong>T-account</strong>: This is like a special notebook with a big T in the middle.</li>

          <li><strong>Left side</strong> (<strong>Debit</strong>): This side is like your spending pocket. You write down all the money you spend on things you need for your lemonade, like lemons, sugar, cups, and maybe even paying a friend to help you set up. These are called debits.</li>
      
          <li><strong>Right side</strong> (<strong>Credit</strong>): This side is like your earnings pocket. You write down all the money you earn from selling your delicious lemonade to thirsty customers. These are called credits.</li>
      
        </ul>

      <p className="margin-top-20">Here's how it works:</p>
      
        <ul className="list-square">
      
          <li><strong>Label the top of the T</strong>: Write "Lemonade Stand" or whatever your stand's name is.</li>
      
          <li><strong>Left side</strong> (<strong>spending</strong>): Imagine buying 5 lemons for $1 each. You write "5" on the left side because it's money you spent.</li>
      
          <li><strong>Right side</strong> (<strong>earnings</strong>): You sell a cup of lemonade for $1. You write "1" on the right side because it's money you earned.</li>
      
        </ul>

      <h3 className="margin-y-50 text-center">Why are T-accounts important?</h3>
          
        <ul className="list-square">
      
          <li><strong>Keeping track of your lemonade business</strong>: <strong>T-accounts</strong> help you see all the money you spend and earn in one place, like having separate pockets for spending and earnings.</li>
      
          <li><strong>Knowing if you're making money</strong>: By looking at both sides, you can see if you're earning more than you're spending (making a profit) or spending more than you're earning (making a loss).</li>
      
          <li><strong>Learning about money</strong>: <strong>T-accounts</strong> are like training wheels for learning about how businesses track their finances.</li>
      
        </ul>
      
      <p className="margin-top-20"><strong>Remember</strong>: <strong>T-accounts</strong> are like mini notebooks that help you keep track of your lemonade stand's finances. They're a fun way to learn how businesses work and make sure your stand is a success!</p>

      <div className="viewcounter">

        <div className="post-date no-margin">
          <span>February 22, 2024 · by 💎Gem ·</span>
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