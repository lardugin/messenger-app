import React, { Component } from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';
import FlatButton from 'material-ui/FlatButton';

import './Nav.less';

@withRouter
export default class Nav extends Component {
    render () {
        return (
            <nav className="nav">
                <FlatButton
                    label="About"
                    primary={this.props.router.isActive('about')}
                    containerElement={
                        <Link to="/about" />
                    }
                />
                <FlatButton
                    label="Inbox"
                    primary={this.props.router.isActive('inbox')}
                    containerElement={
                        <Link to="/inbox" />
                    }
                />
            </nav>
        )
    }
};
