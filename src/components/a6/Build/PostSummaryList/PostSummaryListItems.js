import React from "react";

const PostSummaryListItem = (
    {
        post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "../../../images/react-blue.png"
        }
    }
) => {

    return(
        <>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-10">
                        <span className="wd-suggested-title-2">{post.topic}</span>
                        <div className="wd-suggested-body wd-white-span">
                            <span>ReactJS <i className="fa fa-check-circle"></i></span><span className="wd-suggested-title-2">
                    <span className="wd-suggested-title-2"> - {post.time}</span>
                  </span><br/>
                            <p className="wd-no-margin">
                                {post.title}
                            </p>
                        </div>
                        <span className="wd-suggested-title-2">{post.tweets}</span>
                    </div>
                    <div className="col-2">
                        <img src={post.image} className="wd-round-square-img" alt="..."/>
                    </div>
                </div>
            </li>
        </>
    );

}
export default PostSummaryListItem;