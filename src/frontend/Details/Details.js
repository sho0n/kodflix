import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import getTvshows from '../tvShows-get';
import './Details.css';


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
            .find((tvShow) => tvShow.id === tvShowId );
        this.setState({tvShows});

    }

    render() {
        if(this.state.tvShows === undefined) {
            return <Redirect to='/not-found'/>
        } else {
            return (
                <div className='Details'>
                    <Link to='./'>Back to home</Link>
                    <h1 className='d_tittle'>{this.state.tvShows.name}</h1>
                    <div className='showDetails'>
                        <p>{this.state.tvShows.description}</p>
                        <img 
                            src= {this.state.tvShows.image}
                            alt= {this.state.tvShows.name}>
                        </img>
                    </div>    
            </div>
            );
        }
    }
}