const PostSummaryListItem = (post) => {

    return(`
        <li class="list-group-item">
            <div class="row">
              <div class="col-10">
                <span class="wd-suggested-title-2">${post.topic}</span>
                <div class="wd-suggested-body wd-white-span">
                  <span>ReactJS <i class="fa fa-check-circle"></i></span><span class="wd-suggested-title-2">
                    <span class="wd-suggested-title-2"> - ${post.time}</span>
                  </span><br/>
                  <p class="wd-no-margin">
                    ${post.title}
                  </p>
                </div>
                <span class="wd-suggested-title-2">${post.tweets}</span>
              </div>
              <div class="col-2">
                <img src=${post.image} class="wd-round-square-img" alt="...">
              </div>
            </div>
          </li>
    `);

}
export default PostSummaryListItem;