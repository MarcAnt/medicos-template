import { Box } from "@chakra-ui/layout";
import React, { useMemo } from "react";
import { useTable } from "react-table";

export const ReactTable = () => {
  const data = useMemo(
    () => [
      {
        col1: "Hello",
        col2: "World",
        col3: "Data de la tabla",
        col4: "Data de la tabla",
        col5: "Data de la tabla",
      },
      {
        col1: "react-table",
        col2: "rocks",
        col3: "Data de la tabla",
        col4: "Data de la tabla",
        col5: "Data de la tabla",
      },
      {
        col1: "whatever",
        col2: "you want",
        col3: "Data de la tabla",
        col4: "Data de la tabla",
        col5: "Data de la tabla",
      },
      {
        col1: "whatever",
        col2: "you want",
        col3: "Data de la tabla",
        col4: "Data de la tabla",
        col5: "Data de la tabla",
      },
      {
        col1: "whatever",
        col2: "you want",
        col3: "Data de la tabla",
        col4: "Data de la tabla",
        col5: "Data de la tabla",
      },
      {
        col1: "whatever",
        col2: "you want",
        col3: "Data de la tabla",
        col4: "Data de la tabla",
        col5: "Data de la tabla",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "Column 1",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Column 2",
        accessor: "col2",
      },
      {
        Header: "Column 3",
        accessor: "col3",
      },
      {
        Header: "Column 4",
        accessor: "col4",
      },
      {
        Header: "Column 5",
        accessor: "col5",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <Box width="100%" p="4">
      <table
        {...getTableProps()}
        style={{ border: "solid 1px blue", width: "100%" }}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: "solid 3px red",
                    background: "aliceblue",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: "10px",
                        border: "solid 1px gray",
                        background: "papayawhip",
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Box>
  );
};
