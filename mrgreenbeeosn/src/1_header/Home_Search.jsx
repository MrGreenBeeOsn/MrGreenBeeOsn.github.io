import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import SearchBar from "../components/SearchBar";
import Blog from '../components/Blog';

export default function Home_Search() {
	return (<>

	<main className="image image3">
			
	<h2 className="margin-y-50 text-center">Concept Hub</h2>

		{/* This is the content of Mr. Bee Osn English Term. */}

		<div className="margin-bottom-50 margin-top-30 table-container">

			<Blog />

			<div className="text-border1 padding-20">

				<div  className="flex-container">
					
					<HashLink smooth to="/accounting#accounting-terms">
						<mark className="highlight-tertiary-padding-2-4">Accounting</mark>
					</HashLink>

					<HashLink smooth to="/accounting#tax-terms">
						<mark className="highlight-tertiary-padding-2-4">Tax</mark>
					</HashLink>

					<HashLink smooth to="/accounting#financial-terms">
						<mark className="highlight-tertiary-padding-2-4">Finance</mark>
					</HashLink>

					<HashLink smooth to="/accounting#law-terms">
						<mark className="highlight-tertiary-padding-2-4">Law</mark>
					</HashLink>

					<HashLink smooth to="/accounting#business-terms">
						<mark className="highlight-tertiary-padding-2-4">Business</mark>
					</HashLink>

				</div>

				<div  className="flex-container">

					<HashLink smooth to="/ketoan#thuat-ngu-ke-toan">
						<mark className="highlight-tertiary-padding-2-4">Kế Toán</mark>
					</HashLink>

					<HashLink smooth to="/ketoan#thuat-ngu-thue">
						<mark className="highlight-tertiary-padding-2-4">Thuế</mark>
					</HashLink>

					<HashLink smooth to="/ketoan#thuat-ngu-tai-chinh">
						<mark className="highlight-tertiary-padding-2-4">Tài Chính</mark>
					</HashLink>

					<HashLink smooth to="/ketoan#thuat-ngu-luat">
						<mark className="highlight-tertiary-padding-2-4">Luật</mark>
					</HashLink>

					<HashLink smooth to="/ketoan#thuat-ngu-doanh-nghiep">
						<mark className="highlight-tertiary-padding-2-4">Doanh Nghiệp</mark>
					</HashLink>

					<HashLink smooth to="/ketoan#thuat-ngu-bao-hiem">
						<mark className="highlight-tertiary-padding-2-4">Bảo hiểm</mark>
					</HashLink>
				
				</div>
				
			</div>
		
		</div>

	</main>

	</>);
}