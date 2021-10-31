import { Tabs } from "./tabs";
import { List } from "./list";
import { Title } from "./title";
import { Table } from "./table";

export const Program = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="w-50">
        <Title />
        <Tabs />
        <div className="mb-5">
          <List />
        </div>
        <Table />
      </div>
    </div>
  );
};
