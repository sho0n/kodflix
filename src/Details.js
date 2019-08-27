import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import getTvshows from './tvShows-get';



export default class Details extends Component {

    constructor() {
        super();
        this.state = {
            tvShows: {}
        };
    }

    componentDidMount() {
        let tvShowId = this.props.match.params.tvShowId;
        let tvShows = getTvshows()
            .find((tvShow) => tvShow.id === tvShowId);
        this.setState({tvShows});

    }

    render() {
        if(this.state.tvShows === undefined) {
            return <Redirect to='/not-found'/>
        } else {
            return (
                <div className='movieInfo'>
                    <h1>{this.state.tvShows.name}</h1>
                    <Link to='./'>Back to home</Link>
            </div>
            );
        }
    }
}