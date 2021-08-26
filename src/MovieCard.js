//rac
import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";

const MovieCard = ({ movie }) => {
	return (
		<div style={{ margin: "15px 10px" }}>
			<Card style={{ width: "18rem" }}>
				<Card.Img variant="top" src={movie.img} />
				<Card.Body>
					<Card.Title>
						<Link to={`/${movie.id}`}>{movie.title}</Link>
					</Card.Title>

					<StarRatingComponent
						name="rate1"
						starCount={5}
						value={movie.rating}
					/>

					<Card.Text>{movie.description}</Card.Text>
				</Card.Body>
				<ListGroup className="list-group-flush">
					<ListGroupItem>{movie.date}</ListGroupItem>
					<ListGroupItem>{movie.posterURL}</ListGroupItem>
				</ListGroup>
			</Card>
		</div>
	);
};

export default MovieCard;
