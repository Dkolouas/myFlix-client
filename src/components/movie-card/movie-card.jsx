import React from 'react';
<<<<<<< Updated upstream
=======
import PropTypes from 'prop-types';
import { Button, Card, CardGroup, Container, Col, Row } from 'react-bootstrap';
import "./movie-card.scss";
>>>>>>> Stashed changes

export class MovieCard extends React.Component {
    render() {
        const { movie, onMovieClick } = this.props;

<<<<<<< Updated upstream
        return <div className="movie-card" onClick={() => { onMovieClick(movie); }}>{movie.Title}</div>;
=======
        return (
            <Card>
                <Card.Img variant="top" src={movie.ImagePath} />
                <Card.Body>
                    <Card.Title>{movie.Title}</Card.Title>
                    <Card.Text>{movie.Description}</Card.Text>
                    <Button variant="link" onClick={() => { onMovieClick(movie); }}>View</Button>
                </Card.Body>
            </Card>
        );
>>>>>>> Stashed changes
    }
}
