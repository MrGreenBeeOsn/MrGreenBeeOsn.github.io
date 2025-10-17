import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function AccountingEquation(): React.JSX.Element {

  const postId = "AccountingEquation";

  return (<>

  <main className="image image2">
      
    <h4><HashLink smooth to="/accounting#accounting-terms"><mark className="highlight-tertiary-padding-4-8">Accounting</mark></HashLink></h4>

    <h2 className="margin-y-50 text-center">What is the Accounting Equation?</h2>

    {/* This is the content of Accounting Term. */}

    <p>The <strong>accounting equation</strong> is a fundamental formula that lies at the heart of double-entry bookkeeping, the most common system used for recording financial transactions. It's a simple equation that holds true for any business at any given time.</p>

    <p className="margin-top-20">Here's how it works:</p>

    <p className="margin-top-50 text-center">

      <span className="highlight-255-padding-0-4 text-border">
        <strong>
          <HashLink smooth to="#assets">Assets</HashLink>
        </strong>
      </span> =&nbsp;

      <span className="highlight-255-padding-0-4 text-border">
        <strong>
          <HashLink smooth to="#liabilities">Liabilities</HashLink>
        </strong>
      </span> +&nbsp;

      <span className="highlight-255-padding-0-4 text-border">
        <strong>
          <HashLink smooth to="#equity">Equity</HashLink>
        </strong>
      </span>

    </p>
     
    <h4 className="margin-y-50 text-center" id="assets">Assets:</h4>
    
    <p>These are the things a company owns or controls that have value. They can be physical things like cash, inventory, equipment, or buildings (called tangible assets), or intangible things like copyrights or patents.</p>

    <h4 className="margin-y-50 text-center" id="liabilities">Liabilities:</h4>
    
    <p>These are the company's financial obligations - the money it owes to others. Examples include loans payable, accounts payable (money owed to suppliers for goods or services), and salaries payable (wages owed to employees).</p>

    <h4 className="margin-y-50 text-center" id="equity">Equity:</h4>
    
    <p>This represents the owners' investment in the business. It's the difference between the company's assets (what it owns) and its liabilities (what it owes). In a sole proprietorship, this would be the owner's capital. In a corporation, it would be shareholders' equity.</p>

    <p className="margin-top-20">Here's what the equation tells us:</p>

      <ul className="list-square">

        <li><strong>Balance Sheet Representation</strong>: The <strong>accounting equation</strong> basically reflects the information in a company's balance sheet, a financial statement that shows its financial position at a specific point in time. The left side (assets) represents what the company owns, and the right side (liabilities + equity) represents how that ownership is financed.</li>

        <li><strong>Two Sides of the Coin</strong>: Think of it like a balanced scale. The assets (what you own) need to be balanced by the sources of financing those assets (liabilities and equity). Every financial transaction affects at least two of these categories, keeping the equation balanced.</li>

      </ul>

    <p className="margin-top-20">Here are some examples of how the <strong>accounting equation</strong> works:</p>

      <ul className="list-square">

        <li><strong>Starting a Business</strong>: When a business owner invests cash into their company, assets (cash) increase, and equity (owner's capital) increases to reflect the investment. The equation stays balanced.</li>

        <li><strong>Buying Supplies on Credit</strong>: If a company buys office supplies on credit, this increases inventory (an asset) but also creates a liability (accounts payable) since the company now owes money to the supplier. The equation stays balanced.</li>

      </ul>

    <p className="margin-top-20">The <strong>accounting equation</strong> is a simple yet powerful tool that helps accountants ensure the accuracy and completeness of a company's financial records. It provides a quick snapshot of a company's financial health and serves as the foundation for creating important financial statements.</p>

    {/* =============================
          ☘️ Think simply!
    ============================= */}

    <hr className="hr-short"/>

    <h3 className="margin-bottom-50 text-center">☘️ Think simply!</h3>

    <p>Imagine you have a super cool piggy bank! The piggy bank is like your own little bank where you keep all your money. But with all those coins and bills, it's good to know how much you have and where it goes. The <strong>Accounting Equation</strong> is like a special trick that helps you figure it all out!</p>

    <p className="margin-top-20">Here's how it works:</p>

      <ul className="list-square">

        <li><strong>All Your Stuff</strong> (<strong>Assets</strong>):Think about all the awesome things you own – your toys, books, maybe even that cool bike! These are your assets, everything valuable that belongs to you.</li>

        <li><strong>Money You Owe</strong> (<strong>Liabilities</strong>): Did you ever borrow a toy from a friend and promise to give it back? That's kind of like a liability. It's something you owe to someone else.</li>

        <li><strong>Your Own Mone</strong> (<strong>Owner's Equity</strong>):This is all the money you've saved up in your piggy bank and any money you earn from chores or gifts. It's the money that truly belongs to you!</li>

      </ul>
    
    <h4 className="margin-y-50 text-center">Now, here's the fun part: </h4>

    <p>There's a secret code to remember everything!</p>

    <p className="margin-y-50 text-center">

      <span className="highlight-255-padding-0-4 text-border">
        Your Stuff (Assets)
      </span> =&nbsp;

      <span className="highlight-255-padding-0-4 text-border">
        Money You Owe (Liabilities)
        </span> +&nbsp;
        
      <span className="highlight-255-padding-0-4 text-border">
        Your Own Money (Owner's Equity)
      </span>

    </p>

    <p>This code, called the <strong>Accounting Equation</strong>, is like a magic trick that always needs to be balanced. It means the total value of everything you own (stuff) must equal the total amount you owe (money you borrowed) plus the money you have saved up (your own money).</p>

    <h4 className="margin-y-50 text-center">Why is this code important?</h4>

      <ul className="list-square">

        <li><strong>Piggy Bank Check-up</strong>: It's like a checkup for your piggy bank! You can see if you have more money saved up than you owe, or if you need to save a little more before buying that new game.</li>

        <li><strong>Smart Spender</strong>: Knowing how much is in your piggy bank helps you make good choices. Maybe you decide to save some money for a bigger toy instead of spending it all on candy.</li>

        <li><strong>Growing Up</strong>! As you get older, you might have more things and maybe even borrow money to buy a bike. The <strong>Accounting Equation</strong> can still help you keep track of it all!</li>

      </ul>

    <p className="margin-top-20">Things to remember about the <strong>Accounting Equation</strong>:</p>

      <ul className="list-square">

        <li><strong>Always Balanced</strong>: Just like a seesaw needs to be balanced for everyone to have fun, the equation needs to be balanced to know your piggy bank's health.</li>

        <li><strong>Helpful Tool</strong>: It's a simple trick that grown-ups use to keep track of their money too, not just piggy banks!</li>

        <li><strong>Track Your Money</strong>: The equation helps you see how much money comes in (like birthday money) and goes out (like buying toys) so you can be a financially responsible piggy bank owner!</li>

      </ul>

    <div className="viewcounter">

			<div className="post-date no-margin">
				<span>March 6, 2024 · by 💎Gem ·</span>
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