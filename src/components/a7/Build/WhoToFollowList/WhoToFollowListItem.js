import React from "react";

const WhoToFollowListItem = (
    {
        who = {
            key: "unique1",
            avatarIcon: '../../../images/nasa.png',
            userName: 'NASA',
            handle: 'NASA',
        }
    }) => {

    return(
        <>
            <li key={who.key} className="list-group-item">
                <div className="row">
                    <div className="col-2">
                        <img src={who.avatarIcon} className="wd-circle-img" alt="..."/>
                    </div>
                    <div className="col-6 wd-white">
                        <b>
                          <span>
                            {who.userName} <i className="fa fa-check-circle"></i>
                          </span>
                        </b><br/>
                        @{who.handle}
                    </div>
                    <div className="col-4">
                        <button className="btn btn-primary wd-twitter-button mt-1">
                            Follow
                        </button>
                    </div>
                </div>
            </li>
        </>
    );

}
export default WhoToFollowListItem;