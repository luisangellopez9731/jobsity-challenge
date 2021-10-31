import { Tabs } from "./tabs";
import { List } from "./list";
import { Title } from "./title";
import { Table } from "./table";
import "./program.css";

export const Program = () => {
  return (
    <div className="d-flex justify-content-center program">
      <div className="w-50">
        <Title />
        <div className="mt-5">
          <Tabs />
        </div>
        <div className="my-5">
          <List />
        </div>
        <Table />
      </div>
    </div>
  );
};
