import { useText } from "commons/custom-hooks";
import startSrc from "assets/images/program/start.png";
import titleSrc from "assets/images/program/title.PNG";

export const Title = () => {
  const { weShare } = useText("program");
  return (
    <>
      <div className="text-center">
        <img className="mx-5" src={startSrc} width={15} />
        <img src={titleSrc} width="22%" />
        <img className="mx-5" src={startSrc} width={15} />
        <p className="my-4" style={{ fontSize: 10 }}>
          {weShare}
        </p>
      </div>
    </>
  );
};
