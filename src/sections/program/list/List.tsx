import { useText } from "commons/custom-hooks";

interface ItemProps {
  title: string;
  content: string;
}
const Item = ({ title, content }: ItemProps) => {
  const contentArr = content.split("<br />");
  return (
    <div style={{ width: "30%" }}>
      <hr />
      <h5 className="mb-3">{title}</h5>
      <div>
        {contentArr.map((text) => (
          <p style={{fontSize: 8}}>{text}</p>
        ))}
      </div>
    </div>
  );
};

export const List = () => {
  const list = useText("program.list") as any;
  return (
    <div className="d-flex justify-content-between">
      {[list["1"], list["2"], list["3"]].map((item) => (
        <Item {...item} />
      ))}
    </div>
  );
};
