import { useText } from "commons/custom-hooks";
import titleSrc from "assets/images/banner/title.PNG";
import startsSrc from "assets/images/banner/starts.png";
import arrowSrc from "assets/images/banner/arrow.PNG";
import brightSrc from "assets/images/banner/bright.PNG";
import bottomBrightSrc from "assets/images/banner/bottom-bright.png";

export const Banner = () => {
  const { intensiveProgram, onTheBasis } = useText("banner");
  return (
    <div className="text-white text-center">
      <img src={startsSrc} style={{ marginBottom: "1rem" }} width={100} />
      <div className="d-flex justify-content-center align-items-center">
        <img
          src={brightSrc}
          style={{ transform: "rotate(180deg)", marginRight: "1rem" }}
          width={70}
        />
        <p style={{ marginBottom: 0 }}>{intensiveProgram}</p>
        <img src={brightSrc} width={70} style={{ marginLeft: "1rem" }} />
      </div>

      <img
        style={{ width: "50%", marginTop: "1rem", marginBottom: "1rem" }}
        src={titleSrc}
      />
      <p style={{ marginTop: "1rem" }}>{onTheBasis}</p>
      <div>
        <img src={bottomBrightSrc} width={120} />
      </div>
      <img src={arrowSrc} />
    </div>
  );
};
