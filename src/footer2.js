import "./styles.output.css";

function Footer2() {
  return (
    <footer class="z-50 relative bg-white">
      <div class="h-42 px-20 pt-6">
        <div class="h-full grid grid-cols-2 items-center">
          <div class="pb-5">
            <div>
              <img src="footer.png" />
            </div>
            <div>
              <p class="text-xs text-gray-500 py-3">Connect with us</p>
              <div>
                <i class="fa fa-linkedin fa-2x" aria-hidden="true"></i>
                <i class="px-5 fa fa-twitter fa-2x" aria-hidden="true"></i>
                <i class="fa fa-facebook fa-2x" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div class="flex pb-6">
            <div class="grid grid-cols-2 text-gray-500 text-lg font-medium">
              <div class="px-8 py-2">
                <p>Pricing</p>
              </div>
              <div class="px-8 py-1">
                <p>Blog</p>
              </div>
              <div class="px-8 py-1">
                <p>Integration</p>
              </div>
              <div class="px-8 py-1">
                <p>Privacy Policy</p>
              </div>
              <div class="px-8 py-2">
                <p>Teams</p>
              </div>
            </div>
            <div class="flex items-start  pl-12">
              <img src="google-play-badge.png" width="200px" height="50px" />
            </div>
          </div>
        </div>
        <div class="flex justify-end border-t border-gray-500">
          <p class="text-xs text-gray-500 py-1">
            @CopyRights All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer2;
