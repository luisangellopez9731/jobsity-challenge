import { useState } from "react";
import { Tabs as TabsBootstrap, Tab } from "react-bootstrap";
import { useText } from "commons/custom-hooks";
import { Basic } from "./basic";

export const Tabs = () => {
  const [selected, setSelected] = useState("1");
  const { basic, premium, platinum } = useText("program.tabs");
  return (
    <TabsBootstrap
      activeKey={selected}
      onSelect={(k) => setSelected(k as string)}
      className="mb-3"
    >
      <Tab eventKey="1" title={basic}>
        <Basic />
      </Tab>
      <Tab eventKey="2" title={premium}></Tab>
      <Tab eventKey="3" title={platinum}></Tab>
    </TabsBootstrap>
  );
};
