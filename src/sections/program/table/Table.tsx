import { useText } from "commons/custom-hooks";
import { Table as TableBootstrap } from "react-bootstrap";
import includedSrc from "assets/images/program/included.png";
import notIncludedSrc from "assets/images/program/not-included.png";

interface TableText {
  title: string;
  rows: { included: boolean; text: string }[];
}

export const Table = () => {
  const { title, rows } = useText<TableText>("program.table");
  return (
    <>
      <h5>{title}</h5>
      <TableBootstrap striped bordered hover className="w-auto">
        {rows.map(({ included, text }) => (
          <tr>
            <td>
              <img src={included ? includedSrc : notIncludedSrc} />
            </td>
            <td>
              <p style={{ fontSize: 8 }}>{text}</p>
            </td>
          </tr>
        ))}
      </TableBootstrap>
    </>
  );
};
