import React from "react";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return(
        <>
            <ul className="list-group mb-2 wd-white-span">
              <li className="list-group-item">
                <i className="fab fa-twitter"></i>
              </li>
              <a className="list-group-item" href="../../home.html">
                      <span className="d-none d-xl-block">
                        <i className="fa fa-home"></i> Home
                      </span>
                <span className="d-block d-xl-none">
                        <i className="fa fa-home"></i>
                      </span>
              </a>
              <a className="list-group-item active" href="../../explore/explore.html">
                      <span className="d-none d-xl-block">
                        <i className="fa fa-hashtag"></i> Explore
                      </span>
                <span className="d-block d-xl-none">
                        <i className="fa fa-hashtag"></i>
                      </span>
              </a>
              <a className="list-group-item" href="../../home.html">
                      <span className="d-none d-xl-block">
                        <i className="fa fa-bell"></i> Notifications
                      </span>
                <span className="d-block d-xl-none">
                        <i className="fa fa-bell"></i>
                      </span>
              </a>
              <a className="list-group-item">
                      <span className="d-none d-xl-block">
                        <i className="fa fa-envelope"></i> Messages
                      </span>
                <span className="d-block d-xl-none">
                        <i className="fa fa-envelope"></i>
                      </span>
              </a>
              <a className="list-group-item" href="../../bookmarks/bookmarks.html">
                      <span className="d-none d-xl-block">
                        <i className="fa fa-bookmark"></i> Bookmarks
                      </span>
                <span className="d-block d-xl-none">
                        <i className="fa fa-bookmark"></i>
                      </span>
              </a>
              <a className="list-group-item">
                      <span className="d-none d-xl-block">
                        <i className="fa fa-list"></i> Lists
                      </span>
                <span className="d-block d-xl-none">
                        <i className="fa fa-list"></i>
                      </span>
              </a>
              <a className="list-group-item" href="../../profile.html">
                      <span className="d-none d-xl-block">
                        <i className="fa fa-user"></i> Profile
                      </span>
                <span className="d-block d-xl-none">
                        <i className="fa fa-user"></i>
                      </span>
              </a>
              <a className="list-group-item">
                      <span className="d-none d-xl-block">
                        <i className="fa fa-ellipsis-h"></i> More
                      </span>
                <span className="d-block d-xl-none">
                        <i className="fa fa-ellipsis-h"></i>
                      </span>
              </a>
            </ul>
            <button className="btn btn-primary wd-tweet-button">
                Tweet
            </button>
        </>
    );
}
export default NavigationSidebar;
