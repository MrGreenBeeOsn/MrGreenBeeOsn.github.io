import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function ValueAddedTax(): React.JSX.Element {

  const postId = "ValueAddedTax";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/tax#tax-terms"><mark className="highlight-tertiary-padding-4-8">Tax</mark></HashLink></h4>
      
      <h2 className="margin-y-50 text-center">What is value-added tax (VAT)?</h2>

      {/* This is the content of Tax Term. */}

      <p><strong>Value-added tax</strong> (<strong>VAT</strong>), also known as goods and services tax (GST) in some countries, is a consumption tax levied on the incremental value of goods and services at each stage of production and distribution. In simpler terms, it's a tax on the added value a business creates at each step in the supply chain.</p>

      <p className="margin-top-20">Here's a breakdown of VAT in accounting:</p>

        <ul className="list-square">

          <li><strong>Tax on Added Value</strong>: Imagine a product goes through several stages of production, from raw materials to finished goods. At each stage, a business adds value by processing or assembling the product. VAT is a tax applied to the value added at each stage, not the total value of the product.</li>

          <li><strong>Charged by Businesses</strong>, <strong>Collected by Government</strong>: Businesses registered for VAT collect VAT from their customers on the sale of taxable goods and services. They then periodically remit the collected VAT to the government tax authorities.</li>

          <li><strong>Mechanism to Avoid Double Taxation</strong>:  VAT is designed to avoid taxing the same value multiple times.  A business can claim credits for the VAT it paid on its purchases from other VAT-registered businesses. This ensures that only the final consumer bears the burden of the tax.</li>

          <li><strong>Impact on Accounting</strong>:  Companies registered for VAT must maintain detailed records of VAT charged on sales and VAT paid on purchases. These records are used to calculate the net VAT amount payable to the government. VAT also affects the way inventory and certain expenses are accounted for.</li>

          <li><strong>Benefits of VAT</strong>:  VAT can be considered a relatively efficient form of tax collection, as it's collected at each stage of the supply chain. It can also encourage businesses to be more efficient, as they can claim credits for VAT on their input costs.</li>

          <li><strong>Drawbacks of VAT</strong>:  VAT can be complex to administer and can increase compliance costs for businesses. Additionally, some essential goods and services may be exempt from VAT, which can create complexities.</li>

        </ul>

      <p className="margin-top-20">In conclusion, VAT is a widespread consumption tax that affects how businesses account for sales, purchases, and taxes. Understanding VAT is essential for businesses operating in countries with a VAT system.</p>

      {/* =============================
            ☘️ Think simply!
      ============================= */}

      <hr className="hr-short"/>

      <h3 className="margin-bottom-50 text-center">☘️ Think simply!</h3>

      <p>Imagine you're baking a delicious cake from scratch! To make it, you need flour, sugar, eggs, and maybe some yummy chocolate chips. Here's how a <strong>value-added tax</strong> (<strong>VAT</strong>) works like your cake-baking adventure:</p>

        <ul className="list-square">

          <li><strong>Ingredients</strong> (<strong>Raw Materials</strong>): First, you need to buy all the ingredients (raw materials) for your cake, like flour from the store. There might be a small tax added to the price of that flour. This tax is paid by the flour company, not you.</li>

          <li><strong>Mixing It Up</strong> (<strong>Value Added</strong>): Once you have your ingredients, you mix them all together to create your delicious cake. This adds value to the ingredients because now you have something yummy to eat, instead of just a bunch of separate things.</li>

          <li><strong>The Bakery Tax</strong> (<strong>VAT on Value Added</strong>): Imagine you decide to sell your cake at a bakery. A VAT tax might be applied to the final price of the cake you sell. This tax is based on the value you added (your baking skills!) to the ingredients. So, the tax wouldn't be on the flour itself, but on the final price of the cake you created.</li>

        </ul>

      <h4 className="margin-y-50 text-center">Who Pays VAT?</h4>

      <p>In most countries with VAT, businesses usually pay the VAT at each stage of production or distribution.  Then, they collect the VAT from the customer at the final sale and send that money to the government.  So, you might not directly pay the VAT, but it's kind of included in the price you pay for things.</p>

      <h4 className="margin-y-50 text-center">Why is VAT Important?</h4>

        <ul className="list-square">

          <li><strong>Government Needs Money</strong> (<strong>Funding Programs</strong>): The VAT tax that businesses collect helps the government get money to pay for things that benefit everyone, like parks, schools, and roads. It's like using some of the money from your cake sales to buy fun decorations for a birthday party (funding programs for everyone to enjoy).</li>

          <li><strong>Encourages Businesses to be Efficient</strong> (<strong>Less Waste</strong>): Because VAT is based on the value added at each stage, businesses are encouraged to be efficient. They want to waste less and add as much value as possible to avoid paying more tax. This can be good for the environment too!</li>

        </ul>

      <h4 className="margin-y-50 text-center">VAT vs. Sales Tax</h4>

      <p>VAT is different from a sales tax, which is usually a flat tax added to the final price of a good.  VAT, on the other hand, taxes the value added at each stage of production.  So, with VAT, the total amount of tax collected can be a little lower.</p>

      <div className="viewcounter">

        <div className="post-date no-margin">
          <span>April 6, 2024 · by 💎Gem ·</span>
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