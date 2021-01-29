import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Table from "./components/Table";
import Sort from "./components/Dropdowns/sort";

function App() {
  return (
    <Wrapper>
      <Sort />
      <Title>Employee Directory</Title>
      <Table />
    </Wrapper>
  );
}

export default App;
