import "./styles.output.css";

function Footer1() {
  return (
    <footer>
      <div class="bg-gradient-to-r from-purple-700 to-indigo-600 text-center text-white p-8">
        <div>
          <h4 class="p-5 text-3xl font-light">
            Try all features Free for 30 Days
          </h4>
          <p class="pb-8 font-light">No Credit card required</p>
        </div>
        <div class="block md:flex md:justify-center ">
          <div class="cursor-pointer text-center mx-5 px-6 py-2 rounded-full border-2">
            <p>Start free Trial</p>
          </div>
          <div class="cursor-pointer text-center  px-6 py-2 rounded-full mx-5 my-2 md:my-0  bg-white text-indigo-600">
            <p>Request Demo</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer1;
