import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import SearchBar from "../components/SearchBar";
import SearchComponent from '../components/SearchComponent';

export default function SearchIndex() {
	return (<>

	<main className="image image3">

		<div className="table-search">

			<SearchComponent />
				
		</div>

	</main>

	</>);
}