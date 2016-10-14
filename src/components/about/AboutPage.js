import React, { Component } from 'react';
import { Link } from 'react-router';

export default class AboutPage extends Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <h2>About Page</h2>
                <p>React, Redux and React Router...</p>
            </div>
        );
    }
}
