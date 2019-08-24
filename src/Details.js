import React, { Component} from 'react';
import { Link } from 'react-router-dom';


export default class Details extends Component {

    constructor() {
        super();
        this.state = {
            welcomeMesage: 'Hello, this will be the details page for each Movie & TV show :)'
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                welcomeMesage: 'Coming soon! :)'
            });
        }, 3000);
    }

    render() {
        return (
            <div>
                <h1>{this.state.welcomeMesage}</h1>
                <Link to='./'>Back to home</Link>
            </div>
        );
    }
}