import React from 'react';
import './Comment.css';

const Comment = props => (
    <p className="comment">
        <span>{props.name}</span>{props.text}
    </p>
);

export default Comment;