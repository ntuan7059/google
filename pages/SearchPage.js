import {
	DescriptionOutlined,
	Image,
	LocalOffer,
	MoreVertOutlined,
	Room,
	SearchOutlined,
} from "@material-ui/icons";
import React, {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Search from "../Components/Search";
import { useStateValue } from "../StateProvide";
import "./SearchPage.css";


function SearchPage() {
	const [{ term }, dispatch] = useStateValue();
	const [data, setData]=useState()
	axios.get(
		`https://www.googleapis.com/customsearch/v1?key=AIzaSyAaBOyy1rSofEjiBs9gND4VOQQ94vSmSSM&cx=95a325698a9f84b4e&q=${term}`
	).then((response)=>{
		setData(response.data)
		console.log(response)
	})
	console.log(data);
	return (
		<div className='searchPage'>
			<div className='searchPage_header'>
				<Link to='/'>
					<img
						className='searchPage_logo'
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Google_logo_%282013-2015%29.svg/1024px-Google_logo_%282013-2015%29.svg.png'
					/>
				</Link>
				<div className='searchPage_headerBody'>
					<Search hideButtons={false} />

					<div className='searchPage_options'>
						<div className='optionsLeft'>
							<div className='searchPage_option'>
								<SearchOutlined />
								<Link to='/all'>All</Link>
							</div>
							<div className='searchPage_option'>
								<DescriptionOutlined />
								<Link to='/images'>News</Link>
							</div>
							<div className='searchPage_option'>
								<Image />
								<Link to='/images'>Images</Link>
							</div>
							<div className='searchPage_option'>
								<LocalOffer />
								<Link to='/shopping'>Shopping</Link>
							</div>
							<div className='searchPage_option'>
								<Room />
								<Link to='/maps'>Map</Link>
							</div>
							<div className='searchPage_option'>
								<MoreVertOutlined />
								<Link to='/more'>More</Link>
							</div>
						</div>

						<div className='optionsRight'>
							<div className='searchPage_option'>
								<Link to='/settings'>Settings</Link>
							</div>
							<div className='searchPage_option'>
								<Link to='/tools'>Tools</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='searchPage_results'>
				{term && (
					<div className='searchPage_results'>
						<p className='searchPage_resultCount'>
							About {data?.searchInformation.formattedTotalResults}
							results ({data?.searchInformation.formattedSearchTime} seconds)
							for {term}
				</p>
				{data?.items.map(item=>(
					<div
						className='searchPage_result'>
							<a href={item.link}>
								{item.displayLink}
							</a>
							<a className="searchPage_resultTitle" href={item.link}>
								<h2>{item.title}</h2>
							</a>
							<p className="searchPage_resultSnippet">
								{item.snippet}
							</p>
					</div>
				))}
					</div>
				)}
			</div>
		</div>
	);
}

export default SearchPage;
