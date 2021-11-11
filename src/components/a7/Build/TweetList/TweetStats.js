import {useDispatch} from "react-redux";
import React from "react";

const TweetStats = ({tweet}) => {
    const dispatch = useDispatch();
    const likeClickHandler = () => {
        dispatch({type: 'like-tweet', tweet});
    };
    return (
        <div className="row mt-2">
            <div className="col-3">
                {tweet.stats.comments}
            </div>
            <div className="col-3">
                {tweet.stats.retweets}
            </div>
            <div className="col-3" onClick={likeClickHandler}>
                {
                    tweet.liked && <i className="fas fa-heart me-2"
                                      style={{color: tweet.liked ? "red": "white"}}></i>
                }
                {
                    !tweet.liked && <i className="far fa-heart me-2"></i>
                }
                {tweet.stats.likes}
            </div>
            <div className="col-3"></div>
        </div>
        );
}

export default TweetStats;
