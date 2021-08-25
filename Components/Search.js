import { Button } from "@material-ui/core";
import { MicOutlined, SearchOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvide";
import "./Search.css";

function Search(props) {
	const [term, dispatch] = useStateValue();
	const [input, setInput] = useState("");
	const history = useHistory();
	const submitInput = (e) => {
		e.preventDefault();
		dispatch({
			type: actionTypes.SET_SEARCH_TERM,
			term: input,
		});
		history.push("/search");
	};

	return (
		<form className='search'>
			<div className='search_input'>
				<SearchOutlined className='search_inputIcon' />
				<input value={input} onChange={(e) => setInput(e.target.value)} />
				<MicOutlined />
			</div>
			{props.hiddenButtons ? (
				<div className='search_buttons'>
					<Button type='sumit' onClick={submitInput} variant='outlined'>
						Google Search
					</Button>
					<Button variant='outlined'>Google image</Button>
				</div>
			) : (
				<div className='search_buttons hidden'>
					<Button type='sumit' onClick={submitInput} variant='outlined'>
						Google Search
					</Button>
					<Button variant='outlined'>Google image</Button>
				</div>
			)}
		</form>
	);
}

export default Search;
