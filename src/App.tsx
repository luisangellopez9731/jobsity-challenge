import { Banner, Header } from "sections";
import backgroundSrc from "assets/images/header/background.png";

function App() {
  return (
    <>
      <img src={backgroundSrc} width="100%" style={{ position: "absolute" }} />
      <div style={{ position: "relative" }}>
        <Header />
        <Banner />
      </div>
    </>
  );
}

export default App;
