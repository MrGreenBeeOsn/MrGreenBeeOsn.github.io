import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import SearchBar from "../components/SearchBar";
import Blog from '../components/Blog';

export default function Home_Search() {
	return (<>

	<main className="image image3">
			
	<h3 className="margin-top-50 margin-bottom-20 text-center">Concept Hub</h3>

		{/* This is the content of Mr. Bee Osn English Term. */}

		<div className="table-container">

			<Blog />

			<div className="post-card">

				<div  className="flex-container">
					
					<HashLink smooth to="/accounting#accounting-terms">
						<mark className="highlight-tertiary-padding-2-4">Accounting</mark>
					</HashLink>

					<HashLink smooth to="/tax#tax-terms">
						<mark className="highlight-tertiary-padding-2-4">Tax</mark>
					</HashLink>

					<HashLink smooth to="/finance#financial-terms">
						<mark className="highlight-tertiary-padding-2-4">Finance</mark>
					</HashLink>

					<HashLink smooth to="/law#law-terms">
						<mark className="highlight-tertiary-padding-2-4">Law</mark>
					</HashLink>

					<HashLink smooth to="/business#financial-terms">
						<mark className="highlight-tertiary-padding-2-4">Business</mark>
					</HashLink>

				</div>

				<div  className="flex-container">

					<HashLink smooth to="/ke-toan#thuat-ngu-ke-toan">
						<mark className="highlight-tertiary-padding-2-4">Kế Toán</mark>
					</HashLink>

					<HashLink smooth to="/thue#thuat-ngu-thue">
						<mark className="highlight-tertiary-padding-2-4">Thuế</mark>
					</HashLink>

					<HashLink smooth to="/tai-chinh#thuat-ngu-tai-chinh">
						<mark className="highlight-tertiary-padding-2-4">Tài Chính</mark>
					</HashLink>

					<HashLink smooth to="/luat#thuat-ngu-luat">
						<mark className="highlight-tertiary-padding-2-4">Luật</mark>
					</HashLink>

					<HashLink smooth to="/doanh-nghiep#thuat-ngu-doanh-nghiep">
						<mark className="highlight-tertiary-padding-2-4">Doanh Nghiệp</mark>
					</HashLink>

					<HashLink smooth to="/bao-hiem#thuat-ngu-bao-hiem">
						<mark className="highlight-tertiary-padding-2-4">Bảo hiểm</mark>
					</HashLink>
				
				</div>
				
			</div>
		
		</div>

	</main>

	</>);
}