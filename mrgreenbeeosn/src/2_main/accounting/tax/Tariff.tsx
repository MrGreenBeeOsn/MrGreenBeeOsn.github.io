import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function Tariff(): React.JSX.Element {

  const postId = "Tariff";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/tax#tax-terms"><mark className="highlight-tertiary-padding-4-8">Tax</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">What is a tariff?</h1>

      {/* This is the content of Tax Term. */}

      <p>A <strong>tariff</strong> is essentially a tax imposed by a government on imported goods or services. It's a fee that importers have to pay when bringing products into a country.</p>

      <p className="margin-top-20">Here's a breakdown of what that means:</p>

      <p className="margin-top-20">Purpose:</p>

        <ul className="list-square">

          <li><strong>Tariffs</strong> are primarily used to protect domestic industries from foreign competition. By making imported goods more expensive, they can encourage consumers to buy locally produced items.</li>

          <li>Governments also use <strong>tariffs</strong> as a way to generate revenue.</li>

          <li><strong>Tariffs</strong> can also be used as a political tool, to pressure other countries into changing certain policies.</li>

        </ul>

      <p className="margin-top-20">How it works:</p>

        <ul className="list-square">

          <li>When a foreign company wants to sell its products in a country that has a <strong>tariff</strong>, it has to factor the <strong>tariff</strong> into the price of its goods.</li>

          <li>This makes the imported goods more expensive for consumers, which can make domestic products more attractive.</li>

          <li>The money collected from <strong>tariffs</strong> goes to the government.</li>

        </ul>
      
      <p className="margin-top-20">Effects:</p>

        <ul className="list-square">

          <li><strong>Tariffs</strong> can increase the price of goods for consumers.</li>

          <li>They can also lead to trade disputes between countries.</li>

          <li>They can protect domestic industries, but they can also make them less competitive in the long run.</li>

          <li><strong>Tariffs</strong> can also lead to retaliatory <strong>tariffs</strong> from the other country, which then causes prices to rise for both countries consumers.</li>

        </ul>

      <p className="margin-top-20">In essence, a <strong>tariff</strong> is a way for a government to regulate international trade by making imported goods more expensive.</p>

      {/* =============================
            ☘️ Think simply!
      ============================= */}

      <hr className="hr-short"/>

      <h3 className="margin-bottom-50 text-center">☘️ Think simply!</h3>

      <p>Imagine your friend from another town wants to sell their toys in your town. But your town has a rule: every toy they bring in has to pay a little fee. This fee is called a <strong>tariff</strong>. It makes your friend's toys a bit more expensive, so people might buy toys made in your own town instead.</p>

      <div className="viewcounter">

        <div className="post-date no-margin">
          <span>April 10, 2025 · by 💎Gem ·</span>
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