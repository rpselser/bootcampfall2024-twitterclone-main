// Tweet.js
import React, { useState } from 'react';

/* 
Create a new componnet called 'Tweet' make sure to pass down all the props you will need.
You will also need to use 'useState' for two variables. Then you want to create an event
handler for when the user clicks 'like'. You can ue whatever h1s or h2s or HTML elements that 
you want for your tweet, just make sure all the information from the screenshot I sent is there.
Also, if the post isn't liked already, then you want to display a white heart "🤍" otherwise, 
display a red heart "❤️" make sure to increase or decrease the like counter appropriately.
Theres a 'tweet' class you can use to style your tweet.
*/
let Tweet = ({ username, content, likes, timestamp }) => {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(likes);

    let processLike = () => {
    setLiked((prevLiked) => {
        let isLiked = !prevLiked;
        
        setLikeCount((prevCount) => isLiked ? prevCount + 1 : prevCount - 1);
        return isLiked;
    });
    };

    return (
    <div className="tweet">
        <h2> @{username}</h2>
        <p>{content}</p>
        <p>{timestamp} ago</p>
        <div>
        <p onClick={processLike}>
            {liked ? '❤️' : '🤍'} {likeCount} Likes
        </p>
        </div>
    </div>
    );
};


export default Tweet;
