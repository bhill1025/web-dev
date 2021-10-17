const WhoToFollowListItem = (who) => {

    // <li>
    //     <input type="checkbox"
    //            ${todo.done ? 'checked' : ''}/>
    //
    //     ${todo.title}
    //     (${todo.status})
    // </li>

    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-2">
                    <img src=${who.avatarIcon} class="wd-circle-img" alt="...">
                </div>
                <div class="col-6 wd-white">
                    <b>
                      <span>
                        ${who.userName} <i class="fa fa-check-circle"></i>
                      </span>
                    </b><br/>
                    @${who.handle}
                </div>
                <div class="col-4">
                    <button class="btn btn-primary wd-twitter-button mt-1">
                        Follow
                    </button>
                </div>
            </div>
        </li>
    `);

}
export default WhoToFollowListItem;