import WhoToFollowListItem from "../WhoToFollowListItem.js";
import who from "../who.js";

const WhoToFollowList = () => {
    return(`
        <ul class="list-group mb-2">
          <li class="list-group-item">
            <b class="wd-white">Who To Follow</b>
          </li>
            ${
        who.map(who => {
            return(WhoToFollowListItem(who));
        }).join('')
    }
        </ul>
    `);
}
export default WhoToFollowList;