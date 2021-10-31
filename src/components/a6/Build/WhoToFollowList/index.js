import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json";
const WhoToFollowList = () => {
    return(
        <ul className="list-group mb-2">
          <li className="list-group-item">
            <b className="wd-white">Who To Follow</b>
          </li>
            {
        who.map(who => {
            return(
                <WhoToFollowListItem who={who}/>
            );
        })
    }
        </ul>
    );
}
export default WhoToFollowList;