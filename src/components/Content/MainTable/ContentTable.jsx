import React from "react";
import { ReactTable } from "./ReactTable";
import TableHeader from "./TableHeader";
import TableWrapper from "./TableWrapper";

const ContentTable = () => {
  return (
    <>
      <TableHeader />
      {/* <TableWrapper /> */}
      <ReactTable />
    </>
  );
};

export default ContentTable;
