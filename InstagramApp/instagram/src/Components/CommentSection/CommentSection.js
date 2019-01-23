import React from 'react';
import './CommentSection.css';
import instaLike from '../../images/instaLike.png';
import instaComment from '../../images/instaComment.png';

const CommentSection = props => (
    <div className="instaComment">
        <div className="commentId">
            <img src={instaLike} alt="Like button" />
            <img src={instaComment} alt="Comment button" />
        </div>

        <h6>{props.likes} like{props.likes !== 1 ? 's' : null}</h6>

        <div className="comments">
            {props.comments.map(comment => <p className="comment-instance"><span>{comment.username}</span> {comment.text}</p>)}
        </div>

        <p>{props.time}</p>
    </div>
);

export default CommentSection;