import React, {PropTypes} from 'react';
import { Link } from 'react-router';

import './MessageView.less';

const Message = props => (
    <div className="message-view">
        <ul className="message__title-list">
            <li>From: <Link to={`mailto:${props.senderEmail}`}>{props.senderEmail}</Link></li>
            <li>To: {props.senderName}</li>
            <li>Subject: {props.subject}</li>
        </ul>
        <p>{props.children}</p>
    </div>
);

Message.propTypes = {
    senderEmail: PropTypes.string.isRequired,
    senderName: PropTypes.string.isRequired,
    subject: PropTypes.string,
    children: PropTypes.string
};

export default Message;
