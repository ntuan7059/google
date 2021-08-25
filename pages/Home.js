import { Avatar } from "@material-ui/core";
import { Apps } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import Search from "../Components/Search";
import "./Home.css";

function Home() {
	return (
		<div className='home'>
			<div className='home_header'>
				<div className='header_left'>
					<Link to='/about'>About</Link>
					<Link to='/store'>Store</Link>
				</div>
				<div className='header_right'>
					<Link to='/gmail'>Gmail</Link>
					<Link to='/images'>Images</Link>
					<Avatar />
					<Apps />
				</div>
			</div>
			<div className='home_body'>
				<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Google_logo_%282013-2015%29.svg/1024px-Google_logo_%282013-2015%29.svg.png' alt=''/>
				<div className='inputContainer'>
					<Search hiddenButtons={true}/>
				</div>
			</div>
		</div>
	);
}

export default Home;
