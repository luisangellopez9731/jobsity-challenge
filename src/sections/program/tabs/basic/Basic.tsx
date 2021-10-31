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
      <img src={basicSrc} width={400} style={{ marginRight: "3.5rem" }} />
      <div style={{ fontSize: 10 }}>
        <h4 className="mb-3 font-weight-bold">{title}</h4>
        <div className="d-flex align-items-center mb-3">
          <img
            src={certificateSrc}
            width={22}
            style={{ marginRight: ".5rem" }}
          />
          <p>{certificate}</p>
        </div>
        <div className="d-flex align-items-center mb-3">
          <img src={minutesSrc} width={22} style={{ marginRight: ".5rem" }} />
          <p>{minutes}</p>
        </div>

        <img src={moneySrc} width={150} className="mb-3" />
        <div>
          <Button
            variant="dark"
            style={{
              width: "100%",
              backgroundColor: "black",
              textTransform: "uppercase",
              fontWeight: "bolder",
              borderRadius: 0,
              fontSize: 10,
              padding: ".7rem 0",
            }}
          >
            {button}
          </Button>
        </div>
      </div>
    </div>
  );
};
