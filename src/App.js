import "./App.css";
import { React, useState } from "react";
import MovieList from "./MovieList";
import { BrowserRouter, Route } from "react-router-dom";
import MovieDetails from "./MovieDetails";

function App(props) {
	/* state */
	const [movies, setMovies] = useState([
		{
			id: 1,
			title: "Lara Croft: Tomb Raider",
			duration: "100 min",
			date: "2001",
			posterURL: "https://www.youtube.com/watch?v=B5DMBPvLSJA",
			rating: 5,
			genre: "Action",
			description: "description Lara Croft: Tomb Raider",
			img: "LaraCroftTombRaider.jpg",
			trailer: "https://www.youtube.com/embed/VlCylyAKpGA",
		},
		{
			id: 2,
			title: "Avengers",
			duration: "140 min",
			date: "2012",
			posterURL: "https://www.youtube.com/watch?v=ew1c4FizEAo",
			rating: 4,
			genre: "Sci-Fi",
			description: "description Avengers",
			img: "Avengers.jpg",
			trailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
		},
		{
			id: 3,
			title: "21 Jump Street",
			duration: "109 min",
			date: "2012",
			posterURL: "https://www.youtube.com/watch?v=826VLoO9Ioc",
			rating: 3,
			genre: "Comedy",
			description: "description 21 Jump Street",
			img: "21JumpStreet.jpg",
			trailer: "https://www.youtube.com/embed/RLoKtb4c4W0",
		},
	]);

	return (
		<div className="Generale">
			{/* <MovieList movies={movies} /> */}

			<BrowserRouter>
				<Route exact path="/">
					<MovieList movies={movies} />
				</Route>
				<Route path="/:description">
					<MovieDetails movies={movies} />
				</Route>
			</BrowserRouter>
		</div>
	);
}

export default App;
