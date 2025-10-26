import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function FIFO(): React.JSX.Element {

  const postId = "FIFO";

  return (<>

  <main className="image image2">

    <article>
      
      <h4><HashLink smooth to="/accounting#accounting-terms"><mark className="highlight-tertiary-padding-4-8">Accounting</mark></HashLink></h4>

      <h1 className="margin-y-50 text-center">What is FIFO?</h1>

      {/* This is the content of Accounting Term. */}
      
      <p><strong>FIFO</strong>, which stands for "<strong>First-In</strong>, <strong>First-Out</strong>," is an inventory valuation method used in accounting to determine the cost of goods sold (COGS) and ending inventory value. It assumes that the items purchased or produced first are the first ones to be sold.</p>

      <p className="margin-top-20">Here's a breakdown of <strong>FIFO</strong> in accounting:</p>

      <p className="margin-top-20">Core Principle:</p>

      <p className="text-indent-whole">The core principle of <strong>FIFO</strong> is that the cost of the earliest acquired or produced items is recognized as part of the COGS in the current accounting period. The remaining inventory on the balance sheet is assumed to be comprised of the most recently acquired or produced items.</p>

      <p className="margin-top-20">Impact on Financial Statements:</p>

        <ul className="list-square">

          <li><strong>COGS</strong>: Under <strong>FIFO</strong>, the COGS will generally be lower during periods of rising prices because the older, lower-cost items are being sold first. This can lead to a higher reported net income in those periods.</li>

          <li><strong>Inventory Valuation</strong>: The ending inventory value on the balance sheet will typically be closer to the current market costs under <strong>FIFO</strong>, assuming prices are rising.</li>

        </ul>
      
      <p className="margin-top-20">Advantages of <strong>FIFO</strong>:</p>

        <ul className="list-square">

          <li><strong>Simplicity</strong>: <strong>FIFO</strong> is a relatively easy-to-understand and implement method, making it popular for many businesses.</li>

          <li><strong>Matching Principle</strong>: <strong>FIFO</strong> aligns with the matching principle, which states that expenses should be recognized in the same period as the related revenue they help generate. By assuming the older inventory is sold first, the cost of those items is matched against the revenue generated from their sale.</li>

          <li><strong>Lower Inventory Costs</strong>: During periods of rising prices, <strong>FIFO</strong> can result in lower inventory carrying costs on the balance sheet, potentially making a company appear more profitable.</li>

        </ul>

      <p className="margin-top-20">Disadvantages of <strong>FIFO</strong>:</p>

        <ul className="list-square">

          <li><strong>Overstated Profits</strong>: In periods of rising prices, <strong>FIFO</strong> can potentially overstate a company's profitability because the COGS is based on older, lower costs, while the ending inventory is valued at more recent, higher costs.</li>

          <li><strong>Inventory Obsolescence</strong>: <strong>FIFO</strong> might not accurately reflect the actual flow of goods, especially if some items remain in inventory for a long time. This could lead to an understatement of the value of ending inventory if prices have fallen.</li>

        </ul>

      <p className="margin-top-20">Alternatives to <strong>FIFO</strong>:</p>

        <ul className="list-square">

          <li><strong>LIFO</strong> (<strong>Last-In</strong>, <strong>First-Out</strong>): This method assumes the most recently purchased or produced items are sold first. It can have the opposite effect on COGS and inventory valuation compared to <strong>FIFO</strong>, particularly during periods of price fluctuations.</li>

          <li><strong>Average Cost</strong>: This method calculates a weighted average cost per unit based on all purchases made during a period. It provides a more stable cost flow assumption but may not reflect actual inventory movements as accurately as <strong>FIFO</strong> or LIFO.</li>

        </ul>
      
      <h3 className="margin-y-50 text-center">Choosing the Right Inventory Valuation Method:</h3>
      
      <p>The selection of an inventory valuation method depends on various factors, including a company's inventory turnover rate, industry norms, and price trends.  Some factors to consider include:</p>

        <ul className="list-square">

          <li><strong>Price Fluctuations</strong>: If prices are rising, <strong>FIFO</strong> might be preferred for potentially lower COGS and higher reported profits. LIFO might be more suitable if prices are falling.</li>

          <li><strong>Inventory Management</strong>: <strong>FIFO</strong> can be easier to implement if there is a good physical flow of inventory.</li>

        </ul>

      <p className="margin-top-20">In conclusion, <strong>FIFO</strong> is a widely used inventory valuation method in accounting. Understanding its impact on COGS, ending inventory value, and its advantages and disadvantages is crucial for businesses to make informed decisions about inventory management and financial reporting.</p>

      {/* =============================
            ☘️ Think simply!
      ============================= */}

      <hr className="hr-short"/>

      <h2 className="margin-bottom-50 text-center">☘️ Think simply!</h2>
      
      <p>Imagine you have a magical cookie jar that never runs out of cookies! But here's the twist: the cookies at the bottom are the oldest and sometimes get a little crumbly. To keep things yummy, you use the <strong>FIFO</strong> method, which means First In, First Out. It's like eating the oldest cookies first, just like taking out the first block from a stack of colorful building blocks.</p>

      <p className="margin-top-20">Here's how it works:</p>

        <ul className="list-square">

          <li><strong>Cookie jar</strong>: This is like any place where you keep things, like your toy box, pantry, or even a store with lots of toys.</li>

          <li><strong>FIFO</strong>: This is a fancy word that means you use or take out the things you got first before the ones you got later.</li>

          <li><strong>Adding cookies</strong>: This is like putting new toys in your box or getting new ingredients for your pantry.</li>

          <li><strong>Taking cookies</strong>: This is like using or playing with your toys or taking out ingredients to cook.</li>

        </ul>

      <p className="margin-top-20">Think of it this way:</p>

        <ul className="list-square">

          <li>A bakery uses <strong>FIFO</strong> for their cupcakes. The ones they made first are the ones they sell first, so everyone gets fresh cupcakes!</li>

          <li>A library uses <strong>FIFO</strong> for their books. The books that get returned first are the ones put back on the shelf first, making them easier to find again.</li>

        </ul>

      <h3 className="margin-y-50 text-center">Why is FIFO important?</h3>

        <ul className="list-square">

          <li><strong>Freshness matters</strong>: For things like food or toys that can get old, <strong>FIFO</strong> helps you use the oldest ones first, which avoids waste and keeps things fresh or fun.</li>

          <li><strong>Keeping track</strong>: If you have a store or a big collection, <strong>FIFO</strong> helps you know how much you have and how much it costs, just like knowing how many cookies are left in your jar.</li>

          <li><strong>Easy to remember</strong>: <strong>FIFO</strong> is a simple rule that's easy to follow, like taking the first toy out of your box when you want to play.</li>

        </ul>
      
      <p className="margin-top-20">Here are some things to remember about <strong>FIFO</strong>:</p>

      <ul className="list-square">

        <li><strong>It's not the only way</strong>: Sometimes, it might be better to use the newest things first, like taking out the newest crayon for drawing.</li>

        <li><strong>Not everything needs FIFO</strong>: You wouldn't use <strong>FIFO</strong> for your clothes, right? You wear what you want to wear, not the oldest shirt first.</li>

        <li><strong>Find what works</strong>: Choose the way of organizing things that makes the most sense for you, just like choosing the way you want to play with your toys!</li>

      </ul>

      <p className="margin-top-20">So, <strong>FIFO</strong> is like a magic spell for keeping things organized and using them in the right order, just like eating the oldest cookies from your jar first. It's a simple and helpful way to make sure things are used efficiently and stay fun or delicious!</p>

      <div className="viewcounter">

        <div className="post-date no-margin">
          <span>February 24, 2024 · by 💎Gem ·</span>
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