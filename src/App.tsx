import { Banner, Header, Program } from "sections";
import bgSrc from "assets/images/program/bg.jpg";
import backgroundSrc from "assets/images/header/background.png";

function App() {
  return (
    <>
      <div className="position-absolute">
        <img src={backgroundSrc} width="100%" />
        <img src={bgSrc} width="100%" />
      </div>

      <div style={{ position: "relative" }}>
        <Header />
        <Banner />
        <div className="my-5">
          <Program />
        </div>
      </div>
    </>
  );
}

export default App;
