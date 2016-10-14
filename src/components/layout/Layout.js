import React, { Component, PropTypes } from 'react';

export default class Layout extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h1 className="text-center">Welcome to Redux...</h1>
                    {this.props.children}   
                </div>
            </div>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.object.isRequired
};