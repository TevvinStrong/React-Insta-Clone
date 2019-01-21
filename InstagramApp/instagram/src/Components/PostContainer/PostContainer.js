import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => (
    <div className="content">
        <div className="contentHeader">
            <img src={props.dummyData.thumbnailUrl} alt="user thumbnail" />
            <h4>{props.dummyData.username}</h4>
        </div>

        <div className='contentImage'>
            <img src={props.dummyData.imageUrl} alt="User post" />
            <div></div>
        </div>

        <CommentSection comments={props.dummyData.comments} likes={props.data.likes} time={props.data.timestamp} />
    </div>
);



export default PostContainer;