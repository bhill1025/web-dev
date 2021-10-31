import React from "react";
import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(
        <>
               <div className="row">
                  <div className="col-10 col-md-11 col-xl-11">
                    <div className="input-group mb-2">
                    <span className="input-group-text"
                          style={{"background-color": "white", "border-right": "none", "border-top-left-radius": "20px", "border-bottom-left-radius": "20px"}}>
                      <i className="fa fa-search" style={{"color":"gray"}}></i>
                    </span>
                      <input type="text"
                             className="form-control"
                             placeholder="Search Twitter"
                             style={{"border-left": "none", "border-top-right-radius": "20px", "border-bottom-right-radius": "20px"}}/>
                    </div>
                  </div>
                  <div className="col-2 col-md-1 col-xl-1" style={{"text-align": "center;"}}>
                    <i className="fa fa-cog fa-2x" style={{"color":"#1DA1F2"}}></i>
                  </div>
               </div>
               <ul className="nav nav-tabs mt-0 mb-2">
                  <li className="nav-item">
                    <a className="nav-link active" href="for-you.html">For You</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="trending.html">Trending</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="news.html">News</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="sports.html">Sports</a>
                  </li>
                  <li className="nav-item d-none d-md-block">
                    <a className="nav-link" href="entertainment.html">Entertainment</a>
                  </li>
                </ul>
               {PostSummaryList()}
        </>
    );
}
export default ExploreComponent;
