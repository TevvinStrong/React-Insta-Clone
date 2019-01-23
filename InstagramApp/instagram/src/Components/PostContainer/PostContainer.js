import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => (
    <div className="content">
        <div className="contentHeader">
            <img src={props.data.thumbnailUrl} alt="User thumbnail" />
            <h5>{props.data.username}</h5>
        </div>

        <div className='contentImage'>
            <img src={props.data.imageUrl} alt="User post" />
            <div></div>
        </div>

        <CommentSection comments={props.data.comments} likes={props.data.likes} time={props.data.timestamp} />
    </div>
);



export default PostContainer;