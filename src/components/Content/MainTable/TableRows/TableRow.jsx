import React from "react";
import { Box, Stack, Text } from "@chakra-ui/layout";

const TableRow = ({
  time,
  hour,
  patient,
  color,
  bgColor,
  specialSchedule,
  canceledSchedule,
}) => {
  return (
    <>
      <Box textAlign="center" fontWeight="bold" fontSize="x-small">
        <Text>{time}</Text>
      </Box>

      <Stack bgColor="#F8F8F8" m={0.5} textAlign="center">
        <Stack
          bgColor={
            canceledSchedule ? "#F8F8F8" : patient ? "#E4F4BE" : "#C5E282"
          }
          fontSize="xx-small"
          justify="space-between"
          direction="row"
          py="0.5"
          style={{ marginTop: "0.2rem" }}
          px="0.5"
        >
          <Text fontWeight="bold">
            {`${hour}:00`} - {`${hour}:20`}
          </Text>
          <Text color="#4F6913"> {patient && `Sin paciente`} </Text>
        </Stack>
        <Stack
          bgColor={
            canceledSchedule ? "#F8F8F8" : patient ? "#E4F4BE" : "#C5E282"
          }
          fontSize="xx-small"
          justify="space-between"
          direction="row"
          py="0.5"
          px="0.5"
          style={{ marginTop: "0.2rem" }}
        >
          <Text fontWeight="bold">
            {`${hour}:00`} - {`${hour}:20`}
          </Text>
          <Text color="#4F6913">{patient && `Sin paciente`} </Text>
        </Stack>
        <Stack
          bgColor={
            canceledSchedule ? "#F8F8F8" : patient ? "#E4F4BE" : "#C5E282"
          }
          fontSize="xx-small"
          justify="space-between"
          direction="row"
          py="0.5"
          px="0.5"
          style={{ marginTop: "0.2rem" }}
        >
          <Text fontWeight="bold" color={color && color}>
            {`${hour}:00`} - {`${hour}:20`}
          </Text>
          <Text color="#4F6913">{patient && `Sin paciente`} </Text>
        </Stack>
      </Stack>

      <Box bgColor="#F8F8F8" p={3} m={0.5} textAlign="center"></Box>

      <Stack bgColor="#F8F8F8" m={0.5} textAlign="center">
        <Stack
          bgColor={canceledSchedule ? "#F8F8F8" : "#C5E282"}
          fontSize="xx-small"
          justify="space-between"
          direction="row"
          py="0.5"
          px="0.5"
          style={{ marginTop: "0.2rem" }}
        >
          <Text fontWeight="bold">
            {`${hour}:00`} - {`${hour}:20`}
          </Text>
        </Stack>
        <Stack
          bgColor={canceledSchedule ? "#F8F8F8" : "#C5E282"}
          fontSize="xx-small"
          justify="space-between"
          direction="row"
          py="0.5"
          px="0.5"
          style={{ marginTop: "0.2rem" }}
        >
          <Text fontWeight="bold">
            {`${hour}:00`} - {`${hour}:20`}
          </Text>
        </Stack>
        <Stack
          bgColor={canceledSchedule ? "#F8F8F8" : "#C5E282"}
          fontSize="xx-small"
          justify="space-between"
          direction="row"
          py="0.5"
          px="0.5"
          style={{ marginTop: "0.2rem" }}
        >
          <Text fontWeight="bold">
            {`${hour}:00`} - {`${hour}:20`}{" "}
          </Text>
        </Stack>
      </Stack>

      <Box bgColor="#F8F8F8" p={3} m={0.5} textAlign="center"></Box>

      <Stack bgColor="#F8F8F8" m={0.5} textAlign="center">
        <Stack
          bgColor={canceledSchedule ? "#F8F8F8" : "#C5E282"}
          fontSize="xx-small"
          direction="row"
          alignItems="center"
          py="0.5"
          px="0.5"
          style={{ marginTop: "0.2rem" }}
          flex="50"
        >
          <Text fontWeight="bold">
            {`${hour}:00`} - {`${hour}:20`}
          </Text>
        </Stack>
        <Stack
          bgColor={bgColor ? bgColor : "#C5E282"}
          fontSize="xx-small"
          direction="row"
          alignItems="center"
          py="0.5"
          px="0.5"
          style={{ marginTop: "0.2rem" }}
          flex="50"
        >
          <Text fontWeight="bold">
            {`${hour}:00`} - {`${hour}:20`}
          </Text>
        </Stack>
      </Stack>

      <Stack bgColor="#F8F8F8" m={0.5} textAlign="center">
        {specialSchedule && (
          <>
            <Stack
              bgColor="#5082EE"
              fontSize="xx-small"
              direction="row"
              alignItems="center"
              py="0.5"
              px="0.5"
              style={{ marginTop: "0.2rem" }}
              flex="50"
            >
              <Text fontWeight="bold" color="white">
                {`${hour}:00`} - {`${hour}:20`}
              </Text>
            </Stack>
            <Stack
              bgColor="#5082EE"
              fontSize="xx-small"
              direction="row"
              alignItems="center"
              py="0.5"
              px="0.5"
              style={{ marginTop: "0.2rem" }}
              flex="50"
            >
              <Text fontWeight="bold" color="white">
                {`${hour}:00`} - {`${hour}:20`}
              </Text>
            </Stack>
          </>
        )}
      </Stack>

      <Stack bgColor="#F8F8F8" m={0.5} textAlign="center">
        <Stack
          bgColor={
            bgColor ? (!canceledSchedule ? "#C5E282" : bgColor) : "#C5E282"
          }
          fontSize="xx-small"
          direction="row"
          alignItems="center"
          py="0.5"
          px="0.5"
          style={{ marginTop: "0.2rem" }}
          flex="50"
        >
          <Text fontWeight="bold">
            {`${hour}:00`} - {`${hour}:20`}
          </Text>
        </Stack>
        <Stack
          bgColor={bgColor ? bgColor : "#C5E282"}
          fontSize="xx-small"
          direction="row"
          alignItems="center"
          py="0.5"
          px="0.5"
          style={{ marginTop: "0.2rem" }}
          flex="50"
        >
          <Text fontWeight="bold">
            {`${hour}:00`} - {`${hour}:20`}
          </Text>
        </Stack>
      </Stack>
    </>
  );
};

export default TableRow;
