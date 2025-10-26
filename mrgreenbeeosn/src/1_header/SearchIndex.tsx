import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import SearchBar from "@/components/SearchBar";
import SearchComponent from '@/components/SearchComponent';

export default function SearchIndex(): React.JSX.Element {
	
	return (<>

	<main className="image image3">

		<article>

			<div className="table-search">

				<SearchComponent />
					
			</div>

		</article>

	</main>

	</>);
}