//rafce

import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import MovieCard from "./MovieCard";
import MovieDetails from "./MovieDetails";

const MovieList = ({ movies }) => {
	return (
		<div style={{ display: "flex", flexDirection: "row" }}>
			{movies.map((el, i) => (
				<MovieCard movie={el} key={i} />
			))}
			{/* <BrowserRouter>
				{movies.map((el, i) => (
					<Link to={`/movie/${el.id}`}>
						<MovieCard movie={el} key={i} />
						<MovieDetails movie={el} key={i} />
					</Link>
				))}
				<Route
					path="/movie/:id"
					render={(props) => {
						return movies
							.filter((el) => el.id === props.match.params.id)
							.map((el) => <div>{el.description}</div>);
					}}
				></Route>
			</BrowserRouter> */}
		</div>
	);
};
export default MovieList;
