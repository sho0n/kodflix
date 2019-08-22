import React from 'react';
import { Link } from 'react-router-dom';

export default function Details() {
    return(
        <div>
            <h1>This is the details page</h1>
            <Link to='./'>Back to home</Link>
        </div>
    );
}