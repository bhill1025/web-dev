import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";
const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);
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