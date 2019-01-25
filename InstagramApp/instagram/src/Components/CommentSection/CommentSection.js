import React from 'react';
import './CommentSection.css';
import instaLike from '../../images/instaLike.png';
import instaComment from '../../images/instaComment.png';
import instaOption from '../../images/instaOption.png';
import Comment from '../Comment/Comment';

const CommentSection = props => (
    <div className="instaComment">
        <div className="commentId">
            <img src={instaLike} alt="Like button" />
            <img src={instaComment} alt="Comment button" />
        </div>

        <h6>{props.likes} like{props.likes !== 1 ? 's' : null}</h6>

        <div className="comments">
            {props.comments.map(comment => <Comment name={comment.username} text={comment.text} />)}
        </div>

        <p className="instaDate">{props.time}</p>

        <div className="newComment">
            <input type='text' placeholder='Add a Comment...' />
            <img src={instaOption} alt="Comment option button" />
        </div>
    </div >
);

export default CommentSection;