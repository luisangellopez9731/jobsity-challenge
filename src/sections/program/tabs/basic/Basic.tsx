import { useText } from "commons/custom-hooks";
import basicSrc from "assets/images/program/basic.PNG";
import certificateSrc from "assets/images/program/certificate.png";
import minutesSrc from "assets/images/program/minutes.PNG";
import moneySrc from "assets/images/program/money.PNG";
import { Button } from "react-bootstrap";

export const Basic = () => {
  const { title, certificate, minutes, button } = useText(
    "program.tabs.basicTabInfo"
  );
  return (
    <div className="d-flex">
      <img src={basicSrc} width={450} style={{ marginRight: "3.5rem" }} />
      <div>
        <h4 className="mb-5">{title}</h4>
        <div className="d-flex align-items-center mb-3">
          <img
            src={certificateSrc}
            width={30}
            style={{ marginRight: ".5rem" }}
          />
          <p>{certificate}</p>
        </div>
        <div className="d-flex align-items-center mb-5">
          <img src={minutesSrc} width={30} style={{ marginRight: ".5rem" }} />
          <p>{minutes}</p>
        </div>

        <img src={moneySrc} width={150} className="mb-3" />
        <div>
          <Button>{button}</Button>
        </div>
      </div>
    </div>
  );
};
