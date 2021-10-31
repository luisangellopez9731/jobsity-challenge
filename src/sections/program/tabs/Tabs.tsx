import { useState } from "react";
import { Tabs as TabsBootstrap, Tab } from "react-bootstrap";
import { useText } from "commons/custom-hooks";
import { Basic } from "./basic";
import "./tabs.css";

export const Tabs = () => {
  const [selected, setSelected] = useState("1");
  const { basic, premium, platinum } = useText("program.tabs");
  return (
    <TabsBootstrap
      activeKey={selected}
      onSelect={(k) => setSelected(k as string)}
      className="mb-3 justify-content-center tabs"
    >
      <Tab eventKey="1" title={<p className="tab">{basic}</p>}>
        <Basic />
      </Tab>
      <Tab eventKey="2" title={<p className="tab">{premium}</p>}></Tab>
      <Tab eventKey="3" title={<p className="tab">{platinum}</p>}></Tab>
    </TabsBootstrap>
  );
};
