import React, { Component } from 'react';
import { Link } from 'react-router';

export default class HomePage extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Admin</h1>
                <p>React, Redux and React Router...</p>
                <Link to="about" className="btn btn-primary btn-large">Learn more</Link>
            </div>
        );
    }
}
