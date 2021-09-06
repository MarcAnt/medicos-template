import React from "react";
import Icon from "@chakra-ui/icon";
import { Box, Grid, Stack, Text } from "@chakra-ui/layout";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import TableRow from "./TableRows/TableRow";

const DAYS = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];
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
        {Array.from({ length: 7 }, (v, i) => {
          return (
            <Box key={i + 1} bgColor="#F3F6FA" p={2} m={0.5} textAlign="center">
              <Text style={{ lineHeight: 2.5 }}>
                {DAYS[i]} 1{i + 2}
              </Text>
            </Box>
          );
        })}

        {/* End Header */}

        {/* TableRow Pseudo-logic  */}
        {Array.from({ length: 13 }, (v, i) => {
          if (i + 1 === 2)
            return (
              <TableRow
                key={i + 1}
                time="8 a.m."
                hour="8"
                patient=""
                color=""
                bgColor=""
                specialSchedule={true}
                canceledSchedule={false}
              />
            );
          if (i + 1 === 4)
            return (
              <TableRow
                key={i + 1}
                time="10 a.m."
                hour="10"
                patient=""
                color=""
                bgColor=""
                specialSchedule={true}
                canceledSchedule={false}
              />
            );
          if (i + 1 === 5)
            return (
              <TableRow
                key={i + 1}
                time="11 a.m."
                hour="11"
                patient=""
                color="white"
                bgColor=""
                specialSchedule={false}
                canceledSchedule={false}
              />
            );

          if (i + 1 === 6)
            return (
              <TableRow
                key={i + 1}
                time="12 a.m."
                hour="12"
                patient=""
                color=""
                bgColor="#F8F8F8"
                specialSchedule={false}
                canceledSchedule={false}
              />
            );
          if (i + 1 === 7)
            return (
              <TableRow
                key={i + 1}
                time="1 p.m."
                hour="1"
                patient=""
                color=""
                bgColor="#F8F8F8"
                specialSchedule={false}
                canceledSchedule={true}
              />
            );
          if (i + 1 === 13)
            return (
              <TableRow
                key={i + 1}
                time="7 p.m."
                hour="7"
                patient=""
                color=""
                bgColor="#F8F8F8"
                specialSchedule={false}
                canceledSchedule={true}
              />
            );
          if (i + 1 === 12)
            return (
              <TableRow
                key={i + 1}
                time="6 p.m."
                hour="6"
                patient=""
                color=""
                bgColor="#F8F8F8"
                specialSchedule={false}
                canceledSchedule={false}
              />
            );
          if (i + 1 > 7 && i + 1 < 12)
            return (
              <TableRow
                key={i + 1}
                time={`${i - 5} p.m.`}
                hour={i - 5}
                patient=""
                color=""
                bgColor=""
                specialSchedule={false}
                canceledSchedule={false}
              />
            );
          return (
            <TableRow
              key={i + 1}
              time={`${7 + i} a.m.`}
              hour={7 + i}
              patient="Sin paciente"
              color=""
              bgColor=""
              specialSchedule={true}
              canceledSchedule={false}
            />
          );
        })}
      </Grid>
    </Stack>
  );
};

export default TableBody;
