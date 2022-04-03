import React from "react";

<<<<<<< Updated upstream
=======
import { LoginView } from "../login-view/login-view";
>>>>>>> Stashed changes
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { RegistrationView } from "../registration-view/registration-view";

import "./main-view.scss";

export class MainView extends React.Component {

    constructor() {
        super();
        this.state = {
            movies: [
                { _id: 1, Title: 'Inception', Description: 'desc1...', Genre: 'Sci-Fi', Director: 'Christopher Nolan', ImagePath: '...' },
                { _id: 2, Title: 'The Shawshank Redemption', Description: 'desc2...', Genre: 'Drama', Director: 'Frank Darabont', ImagePath: '...' },
                { _id: 3, Title: 'Gladiator', Description: 'desc3...', Genre: 'Action', Director: 'Ridley Scott', ImagePath: '...' }
            ],
            selectedMovie: null
        };
    }

<<<<<<< Updated upstream
    setSelectedMovie(newSelectedMovie) {
=======
    componentDidMount() {
        axios.get('https://powerful-sea-93969.herokuapp.com/movies')
            .then(response => {
                this.setState({
                    movies: response.data
                });
            })
            .catch(err => {
                console.log(err);
            })
    }



    /*When a movie is clicked, this function is invoked and updates the state of the `selectedMovie` *property to that movie*/

    setSelectedMovie(movie) {
        this.setState({
            selectedMovie: movie
        });
    }

    /* When a user successfully logs in, this function updates the `user` property in state to that *particular user*/

    onLoggedIn(user) {
>>>>>>> Stashed changes
        this.setState({
            selectedMovie: newSelectedMovie
        });
    }

    onRegister(register, user) {
        this.setState({
            user
        });
    }

    render() {
        const { movies, selectedMovie } = this.state;

        if (movies.length === 0) return <div className="main-view">The list is empty!</div>;

        return (
<<<<<<< Updated upstream
            <div className="main-view">
                {selectedMovie
                    ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
                    : movies.map(movie => (
                        <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }} />
                    ))
=======
            <Row className="justify-content-md-center">
                {
                    selectedMovie
                        ? (

                            <Col md={8}>
                                <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
                            </Col>
                        )

                        : movies.map(movie => (
                            <Col md={3}>
                                <MovieCard key={movie._id} movie={movie} onMovieClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
                            </Col>
                        ))

>>>>>>> Stashed changes
                }
            </Row >
        );
    }
}

<<<<<<< Updated upstream
=======



>>>>>>> Stashed changes
export default MainView