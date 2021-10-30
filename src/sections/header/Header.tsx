import { Navbar } from "./navbar";
import backgroundSrc from "assets/images/header/background.png";
export const Header = () => {
  return (
    <>
      <img
        src={backgroundSrc}
        width="100%"
        style={{ position: "absolute", zIndex: 1 }}
      />
      <div style={{ position: "relative", zIndex: 2 }}>
        <Navbar />
      </div>
    </>
  );
};
