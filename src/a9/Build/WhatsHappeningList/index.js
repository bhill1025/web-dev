import React from "react";
import PostSummaryListItem from "../PostSummaryList/PostSummaryListItems";
import posts from "../PostSummaryList/posts.json";

const WhatsHappeningList = (title) => {
    return(
        <ul className="list-group mb-2">
            <li className={"list-group-item"}>
                <h5><b>{title.title}</b></h5>
            </li>
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
export default WhatsHappeningList;