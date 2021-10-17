import PostSummaryListItem from "./PostSummaryListItems.js";
import posts from "./posts.js";

const PostSummaryList = () => {
    return(`
        <ul class="list-group mb-2">
          <div class="wd-main-image">
            <img src="../../explore/images/starship.jpg" class="card-img-top" alt="...">
            <h2 class="wd-caption">SpaceX's Starship</h2>
          </div>
            ${
        posts.map(post => {
            return (PostSummaryListItem(post));
        }).join('')
    }
        </ul>
    `);
}
export default PostSummaryList;