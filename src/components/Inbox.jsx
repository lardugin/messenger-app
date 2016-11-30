import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';

import MESSAGES from '../messages.json'

import './Inbox.less';

export default class Inbox extends Component {
    render() {
        return (
            <div className="inbox-page">
                <div className="massage-list">
                    <Paper>
                        <Menu>
                            {
                                MESSAGES.map( message => (
                                    <MenuItem
                                        primaryText={message.senderName}
                                        key={message.id}
                                        containerElement={
                                            <Link
                                                activeClassName="active"
                                                to={`/inbox/${message.id}`}
                                            />
                                        }
                                    />
                                ))
                            }
                        </Menu>
                    </Paper>
                </div>
                {
                    this.props.children
                    ? this.props.children
                    : <div className="not-chosen">Please select a chat to read message</div>
                }
            </div>
        )
    }
}

Inbox.propTypes = {
    children: PropTypes.element,
};
