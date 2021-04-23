import Navbar from "./navbar";
import Section1 from "./section1";
import Section2 from "./section2";
import Footer1 from "./footer1";
import Footer2 from "./footer2";

function App() {
  return (
    <div className="mx-5 md:mx-20 relative cursor-default">
      <Navbar />
      <Section1 />
      <Section2 />
      <Footer1 />
      <Footer2 />
    </div>
  );
}

export default App;
