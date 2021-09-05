import React from "react";
import Icon from "@chakra-ui/icon";
import { Box, Grid, Stack, Text } from "@chakra-ui/layout";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { TableRowOne } from "./TableRows/TableRowOne";
import { TableRowTwo } from "./TableRows/TableRowTwo";
import { TableRowThree } from "./TableRows/TableRowThree";
import { TableRowFour } from "./TableRows/TableRowFour";
import { TableRowFive } from "./TableRows/TableRowFive";
import { TableRowSix } from "./TableRows/TableRowSix";
import { TableRowSeven } from "./TableRows/TableRowSeven";
import { TableRowEight } from "./TableRows/TableRowEight";
import { TableRowNine } from "./TableRows/TableRowNine";
import { TableRowTen } from "./TableRows/TableRowTen";
import { TableRowElev } from "./TableRows/TableRowElev";
import { TableRow12 } from "./TableRows/TableRow12";
import { TableRow13 } from "./TableRows/TableRow13";

const TableBody = () => {
  return (
    <Stack flex="80%">
      <Grid
        templateColumns="0.4fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        templateRows="repeat(14, 1fr)"
        bgColor="white"
        borderRadius={3}
        boxShadow="sm"
      >
        {/* Header */}
        <Box m={1} textAlign="center">
          <Icon as={BiChevronLeft} />
          <Icon as={BiChevronRight} />
        </Box>
        <Box bgColor="#F3F6FA" p={2} m={0.5} textAlign="center">
          <Text style={{ lineHeight: 2.5 }}>Lun 12</Text>
        </Box>
        <Box bgColor="#F3F6FA" p={2} m={0.5} textAlign="center">
          <Text style={{ lineHeight: 2.5 }}>Mar 13</Text>
        </Box>
        <Box bgColor="#F3F6FA" p={2} m={0.5} textAlign="center">
          <Text style={{ lineHeight: 2.5 }}>Mie 14</Text>
        </Box>
        <Box bgColor="#F3F6FA" p={2} m={0.5} textAlign="center">
          <Text style={{ lineHeight: 2.5 }}>Jue 15</Text>
        </Box>
        <Box bgColor="#F3F6FA" p={2} m={0.5} textAlign="center">
          <Text style={{ lineHeight: 2.5 }}>Vie 16</Text>
        </Box>
        <Box bgColor="#F3F6FA" p={2} m={0.5} textAlign="center">
          <Text style={{ lineHeight: 2.5 }}>Sab 17</Text>
        </Box>
        <Box bgColor="#F3F6FA" p={2} m={0.5} textAlign="center">
          <Text style={{ lineHeight: 2.5 }}>Dom 18</Text>
        </Box>
        {/* End Header */}

        {/* Row 1 */}
        <TableRowOne />
        {/* End Row 1 */}
        {/* Row 2 */}
        <TableRowTwo />
        {/* End Row 2 */}
        {/* Row 3 */}
        <TableRowThree />
        {/* End Row 3 */}
        {/* Row 4 */}
        <TableRowFour />
        {/* End Row 4 */}
        {/* Row 5 */}
        <TableRowFive />
        {/* End Row 5 */}
        {/* Row 6 */}
        <TableRowSix />
        {/* End Row 6 */}
        {/* Row 7 */}
        <TableRowSeven />
        {/* End Row 7 */}
        {/* Row 8 */}
        <TableRowEight />
        {/* End Row 8 */}
        {/* Row 9 */}
        <TableRowNine />
        {/* End Row 9 */}
        {/* Row 10 */}
        <TableRowTen />
        {/* End Row 10 */}
        {/* Row 11 */}
        <TableRowElev />
        {/* End Row 11 */}
        {/* Row 12 */}
        <TableRow12 />
        {/* End Row 12 */}
        {/* Row 13 */}
        <TableRow13 />
        {/* End Row 13 */}
      </Grid>
    </Stack>
  );
};

export default TableBody;
