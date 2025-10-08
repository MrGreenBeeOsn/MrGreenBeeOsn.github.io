import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '/src/components/EyeIcon';
import ViewCounter from '/src/components/ViewCounter';
import LikeButton from '/src/components/LikeButton';

export default function () {

  const postId = "";

  return (<>

  <main className="image image2">
    
    <h4><HashLink smooth to="/finance#financial-terms"><mark className="highlight-tertiary-padding-4-8">Finance</mark></HashLink></h4>
    
    <h2 className="margin-y-50 text-center">What is “Save for the rainy days"?</h2>

    {/* This is the content of Financial Term. */}

    

    {/* =============================
          ☘️ Think simply!
    ============================= */}

    <hr className="hr-short"/>

    <h3 className="margin-bottom-50 text-center">☘️ Think simply!</h3>

    

    <p className="margin-top-50 text-small"> · by 💎Gem ·</p>

    <div className="viewcounter">

			<div className="post-date no-margin">
				<span>August 30, 2025 · by 💎Gem ·</span>
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