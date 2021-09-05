import { Stack } from "@chakra-ui/layout";
import React from "react";
import TableBody from "./TableBody";
import TableDatePicker from "../DatepickerSection/TableDatePicker";

const TableWrapper = () => {
  //Content for body table and the datepicker
  return (
    <Stack my="4" mx="4" direction="row">
      <TableBody />
      <TableDatePicker />
    </Stack>
  );
};

export default TableWrapper;
