import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
           <div class="col-12 col-xs-10 col-sm-10 col-md-10 col-lg-7 col-xl-6">
               <div class="row">
                  <div class="col-10 col-md-11 col-xl-11">
                    <div class="input-group mb-2">
                    <span class="input-group-text"
                          style="background-color: white; border-right: none; border-top-left-radius: 20px; border-bottom-left-radius: 20px;">
                      <i class="fa fa-search" style="color: gray"></i>
                    </span>
                      <input type="text"
                             class="form-control"
                             placeholder="Search Twitter"
                             style="border-left: none; border-top-right-radius: 20px; border-bottom-right-radius: 20px;">
                    </div>
                  </div>
                  <div class="col-2 col-md-1 col-xl-1" style="text-align: center;">
                    <i class="fa fa-cog fa-2x" style="color: #1DA1F2"></i>
                  </div>
               </div>
               <ul class="nav nav-tabs mt-0 mb-2">
                  <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For You</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                  </li>
                  <li class="nav-item d-none d-md-block">
                    <a class="nav-link" href="entertainment.html">Entertainment</a>
                  </li>
                </ul>
               ${PostSummaryList()}
           </div>
    `);
}
export default ExploreComponent;
