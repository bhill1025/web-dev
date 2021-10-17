const NavigationSidebar = () => {
    return(`
        <!--      <h3>Column A</h3>-->
        <ul class="list-group mb-2 wd-white-span">
          <li class="list-group-item">
            <i class="fab fa-twitter"></i>
          </li>
          <a class="list-group-item" href="../../home.html">
                  <span class="d-none d-xl-block">
                    <i class="fa fa-home"></i> Home
                  </span>
            <span class="d-block d-xl-none">
                    <i class="fa fa-home"></i>
                  </span>
          </a>
          <a class="list-group-item active" href="../../explore/explore.html">
                  <span class="d-none d-xl-block">
                    <i class="fa fa-hashtag"></i> Explore
                  </span>
            <span class="d-block d-xl-none">
                    <i class="fa fa-hashtag"></i>
                  </span>
          </a>
          <a class="list-group-item" href="../../home.html">
                  <span class="d-none d-xl-block">
                    <i class="fa fa-bell"></i> Notifications
                  </span>
            <span class="d-block d-xl-none">
                    <i class="fa fa-bell"></i>
                  </span>
          </a>
          <a class="list-group-item">
                  <span class="d-none d-xl-block">
                    <i class="fa fa-envelope"></i> Messages
                  </span>
            <span class="d-block d-xl-none">
                    <i class="fa fa-envelope"></i>
                  </span>
          </a>
          <a class="list-group-item" href="../../bookmarks/bookmarks.html">
                  <span class="d-none d-xl-block">
                    <i class="fa fa-bookmark"></i> Bookmarks
                  </span>
            <span class="d-block d-xl-none">
                    <i class="fa fa-bookmark"></i>
                  </span>
          </a>
          <a class="list-group-item">
                  <span class="d-none d-xl-block">
                    <i class="fa fa-list"></i> Lists
                  </span>
            <span class="d-block d-xl-none">
                    <i class="fa fa-list"></i>
                  </span>
          </a>
          <a class="list-group-item" href="../../profile.html">
                  <span class="d-none d-xl-block">
                    <i class="fa fa-user"></i> Profile
                  </span>
            <span class="d-block d-xl-none">
                    <i class="fa fa-user"></i>
                  </span>
          </a>
          <a class="list-group-item">
                  <span class="d-none d-xl-block">
                    <i class="fa fa-ellipsis-h"></i> More
                  </span>
            <span class="d-block d-xl-none">
                    <i class="fa fa-ellipsis-h"></i>
                  </span>
          </a>
        </ul>
        <button class="btn btn-primary" style="border-radius: 20px; width: 100%; min-width: 65px;">
          Tweet
        </button>
    `);
}
export default NavigationSidebar;
