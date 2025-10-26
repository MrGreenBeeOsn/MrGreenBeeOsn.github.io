import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function AccrualAccounting(): React.JSX.Element {

	const postId = "AccrualAccounting";

	return (<>

	<main className="image image2">

		<article>
			
			<h4><HashLink smooth to="/accounting#accounting-terms"><mark className="highlight-tertiary-padding-4-8">Accounting</mark></HashLink></h4>

			<h1 className="margin-y-50 text-center">What is accrual accounting?</h1>

			{/* This is the content of Accounting Term. */}

			<p><strong>Accrual accounting</strong> is a method of recording financial transactions where revenue is recognized when it's earned, regardless of when cash is received, and expenses are recognized when they are incurred, regardless of when payment is made. It's a more comprehensive way of portraying a company's financial health compared to cash accounting, which only considers actual cash inflows and outflows.</p>
			
			<p>Here's a breakdown of the key aspects of <strong>accrual accounting</strong>:</p>

			<h4 className="margin-y-50 text-center">Matching Principle:</h4>
					
			<p>This principle is the foundation of <strong>accrual accounting</strong>. It dictates that expenses incurred to generate revenue in a specific period should be recognized in that same period, even if the cash payment happens later. Conversely, revenue earned should be recognized when it's earned, even if the customer pays later. This ensures a more accurate matching of a company's income and expenses.</p>

			<h4 className="margin-y-50 text-center">Accruals and Deferrals:</h4>
					
			<p>Accruals are used to account for expenses incurred but not yet paid (accrued expenses) and revenue earned but not yet received (accrued revenue). Deferrals, on the other hand, are the opposite. They represent cash received in advance for goods or services that will be delivered later (deferred revenue) or expenses paid for in advance ( prepaid expenses). Both accruals and deferrals are adjusted through journal entries at the end of an accounting period to ensure financial statements accurately reflect the company's financial position.</p>

			<h4 className="margin-y-50 text-center">Benefits of Accrual Accounting:</h4>
					
				<ul className="list-square">
			
					<li>Provides a more accurate picture of a company's profitability by reflecting all income earned and expenses incurred during a period, regardless of cash flow.</li>
			
					<li>Improves comparability of financial statements between companies and across different periods.</li>
			
					<li>Offers better insights into a company's financial obligations and upcoming liabilities.</li>
			
				</ul>
			
			<h4 className="margin-y-50 text-center">Drawbacks of Accrual Accounting:</h4>
					
				<ul className="list-square">
			
					<li>Can be more complex to implement compared to cash accounting, especially for smaller businesses.</li>
			
					<li>Requires more detailed record-keeping and estimations, which can introduce potential errors.</li>
			
				</ul>

			<p className="margin-top-20"><strong>Accrual accounting</strong> is the mandated method for most businesses, particularly those with significant revenue or complex financial transactions.</p>

			<p className="margin-top-20">Here are some examples of accruals commonly used in <strong>accrual accounting</strong>:</p>
			
				<ul className="list-square">
			
					<li><strong>Accrued Expenses</strong>: Salary payable (wages earned by employees but not yet paid), interest payable (interest on a loan accrued but not yet paid), rent payable (rent incurred but not yet paid).</li>
			
					<li><strong>Accrued Revenue</strong>: Interest receivable (interest earned on a loan but not yet received), service revenue earned but not yet invoiced (e.g., legal fees for a case completed in December but invoiced in January).</li>
			
				</ul>

			<p className="margin-top-20">By understanding <strong>accrual accounting</strong>, you can gain a deeper understanding of a company's financial performance and the factors that influence its profitability. It provides a more holistic view than just looking at cash flow and helps investors, creditors, and other stakeholders make informed decisions.</p>

			{/* =============================
						☘️ Think simply!
			============================= */}

			<hr className="hr-short"/>

			<h3 className="margin-bottom-50 text-center">☘️ Think simply!</h3>
			
			<p>Imagine you and your friends have a super cool pretend bakery! You bake yummy cookies and sell them to earn pretend money. <strong>Accrual accounting</strong> is like keeping super duper track of all your bakery's money, even the treats and money you haven't gotten yet!</p>

			<p className="margin-top-20">Here's how it works:</p>
			
				<ul className="list-square">
			
					<li><strong>Regular Sales</strong>: This is when someone buys a cookie right away and gives you pretend money. You put that money right in your bakery cash register. <strong>Accrual accounting</strong> keeps track of these regular sales, just like you do.</li>
			
					<li><strong>Future Treat Sales</strong>: Maybe your friend wants a cookie tomorrow, but doesn't have any pretend money today. <strong>Accrual accounting</strong> makes a note of this promise, like an "IOU" for a cookie! Even though you haven't gotten the pretend money yet, <strong>accrual accounting</strong> knows you'll get it tomorrow.</li>
			
					<li><strong>Bakery Supplies</strong>: You need flour, sugar, and eggs to bake cookies! <strong>Accrual accounting</strong> tracks these expenses too, even if you haven't paid for them yet. Maybe you promised to pay your friend back for the eggs tomorrow. <strong>Accrual accounting</strong> makes a note of this promise, considering it a future expense for your bakery.</li>
			
				</ul>

			<p className="margin-top-20">Here's why <strong>accrual accounting</strong> is important for your bakery:</p>
			
				<ul className="list-square">
			
					<li><strong>Big Picture</strong>: It helps you see how your bakery is really doing. Just knowing how much pretend money is in your register right now might not tell the whole story. <strong>Accrual accounting</strong> shows you what money is coming in and going out in the future, so you can make better decisions about your bakery.</li>
			
					<li><strong>Planning for the Future</strong>: Maybe you want to buy more sprinkles to make your cookies even yummier! By seeing your future income (pretend money coming in) and expenses (pretend money going out), <strong>accrual accounting</strong> helps you plan ahead and make sure you have enough pretend money for all the ingredients you need.</li>
			
				</ul>

			<p className="margin-top-20">Here are some things to remember about <strong>accrual accounting</strong>:</p>
			
				<ul className="list-square">
			
					<li>It's a more grown-up way of keeping track of pretend money than just what's in your register right now.</li>
			
					<li>Big companies use it too, not just pretend bakeries!</li>
			
				</ul>

			<p className="margin-top-20">So, <strong>accrual accounting</strong> is like keeping super careful track of everything that affects your pretend money, even if you haven't gotten it or used it yet. It helps you see the whole picture and plan for the future of your bakery (or any business!).</p>

			<div className="viewcounter">

				<div className="post-date no-margin">
					<span>April 11, 2024 · by 💎Gem ·</span>
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