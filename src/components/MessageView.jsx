import React from 'react';

import MESSAGES from '../messages.json'

import Message from './Message.jsx';

import './MessageView.less';

const MessageView = props => {
    const message = MESSAGES.find( message => message.id === props.params.message );

    return (
        <Message
            senderEmail={message.senderEmail}
            senderName={message.senderName}
            subject={message.subject}
        >
            {message.body}
        </Message>
    )
};

export default MessageView;
