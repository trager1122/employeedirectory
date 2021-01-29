import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import EmpTable from "./components/EmpTable";

function App() {
  return (
    <Wrapper>
      <Title>Employee Directory</Title>
      <EmpTable />
    </Wrapper>
  );
}

export default App;
