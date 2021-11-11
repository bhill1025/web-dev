import React from "react";
import PostSummaryListItem from "./PostSummaryListItems.js";
import posts from "./posts.json";

const PostSummaryList = () => {
    return(
        <ul className="list-group mb-2">
            <div className="wd-main-image">
                <img src="../images/starship.jpg" className="card-img-top" alt="..."/>
                <h2 className="wd-caption">SpaceX's Starship</h2>
            </div>
            {
                posts.map(post => {
                    return (
                        <PostSummaryListItem post={post}/>
                    );
                })
            }
        </ul>
    );
}
export default PostSummaryList;