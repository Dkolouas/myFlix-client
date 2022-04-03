import React from 'react';
import PropTypes from 'prop-types';
import './movie-view.scss';
import axios from 'axios';
import { Container, Row, Col, Button, Card, CardGroup } from 'react-bootstrap';
export class MovieView extends React.Component {

    render() {
        const { movie, onBackClick } = this.props;
        if (!movies) return null;


        return (
            <Container fluid style={{ paddingTop: '0.75rem' }}>
                <div className="movie-view">
                    <div className="movie-poster">
                        <img src={movie.ImagePath} />
                    </div>
                    <div className="movie-title">
                        <span className="label">Title: </span>
                        <span className="value">{movie.Title}</span>
                    </div>
                    <div className="movie-description">
                        <span className="label">Description: </span>
                        <span className="value">{movie.Description}</span>
                    </div>
                    <div className="movie-genre">
                        <span className="label">Genre: </span>
                        <span className="value">{movie.Genre}</span>
                    </div>
                    <div className="movie-director">
                        <span className="label">Director: </span>
                        <span className="value">{movie.Director}</span>
                    </div>
                    <button onClick={() => { onBackClick(null); }}>Back</button>

                </div>
            </Container>
        );
    }
}

MovieView.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        Director: PropTypes.string.isRequired,
        ImagePath: PropTypes.string.isRequired,
        Genre: PropTypes.shape({
            Name: PropTypes.string.isRequired
        })
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};