import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function HumanResources(): React.JSX.Element {

  const postId = "HumanResources";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/business#financial-terms"><mark className="highlight-tertiary-padding-4-8">Business</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">What is Human Resources?</h1>

      {/* This is the content of Business Term. */}

      <p><strong>Human Resources</strong> is a strategic function within an organization that is responsible for managing the people who make up the workforce. <strong>HR</strong> departments focus on maximizing the potential of employees, ensuring compliance with labor laws, and contributing to overall organizational success.</p>

      <p className="margin-top-20">Core Functions of <strong>HR</strong>:</p>

        <ul className="list-square">

          <li><strong>Talent Acquisition</strong>: This involves finding, attracting, and hiring qualified candidates to fill open positions within the organization.</li>

          <li><strong>Employee Onboarding</strong>: Welcoming new employees, providing necessary training and information, and integrating them into the company culture.</li>

          <li><strong>Performance Management</strong>: Setting performance goals, conducting performance reviews, and providing feedback to employees.</li>

          <li><strong>Training and Development</strong>: Identifying training needs, developing training programs, and providing opportunities for employee growth.</li>

          <li><strong>Compensation and Benefits</strong>: Administering salaries, wages, bonuses, and benefits packages.</li>

          <li><strong>Employee Relations</strong>: Building positive employee relationships, handling grievances, and resolving conflicts.</li>

          <li><strong>Legal Compliance</strong>: Ensuring compliance with employment laws, regulations, and company policies.</li>

          <li><strong>Health and Safety</strong>: Promoting a safe and healthy work environment.</li>

        </ul>

      <p className="margin-top-20"><strong>HR</strong> as a Strategic Partner:</p>

      <p className="text-indent-whole">Beyond these core functions, <strong>HR</strong> plays a crucial role in aligning the organization's human capital with its strategic goals. <strong>HR</strong> professionals work closely with management to develop strategies for attracting, developing, and retaining top talent. They also contribute to organizational change initiatives and foster a positive work culture.</p>

      <p className="margin-top-20">In essence, <strong>HR</strong> is responsible for optimizing the human capital of an organization to achieve its business objectives.</p>

      {/* =============================
            ☘️ Think simply!
      ============================= */}

      <hr className="hr-short"/>

      <h3 className="margin-bottom-50 text-center">☘️ Think simply!</h3>

      <p>Imagine you're the captain of a sports team.</p>
      
      <p><strong>Human Resources</strong> is like the coach who helps pick the best players for your team, teaches them how to play better, and makes sure everyone is happy and having fun. They also make sure you all have the right gear and follow the rules of the game.</p>

      <div className="viewcounter">

        <div className="post-date no-margin">
          <span>July 31, 2024 · by 💎Gem ·</span>
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