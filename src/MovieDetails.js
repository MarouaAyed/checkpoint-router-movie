import React from "react";
import { useRouteMatch } from "react-router-dom";

function MovieDetails({ movies }) {
	const match = useRouteMatch();
	//console.log(match.url.slice(1));

	const movie = movies.filter((el) => el.id == match.url.slice(1));
//	console.log(movie[0]);
	return (
		<div className="details">
			<div>{movie[0].title}</div>
			<div>{movie[0].description}</div>
			<div>
				<iframe
					width="560"
					height="315"
					src={movie[0].trailer}
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
		</div>
	);
}

export default MovieDetails;
