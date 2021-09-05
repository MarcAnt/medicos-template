import { Box, Stack, Text } from "@chakra-ui/layout";
import React from "react";

export const TableRowOne = () => {
  return (
    <>
      <Box textAlign="center" fontWeight="bold" fontSize="x-small">
        <Text>7 a.m.</Text>
      </Box>

      <Stack bgColor="#F8F8F8" m={0.5} textAlign="center">
        <Stack
          bgColor="#E4F4BE"
          fontSize="xx-small"
          justify="space-between"
          direction="row"
          py="0.5"
          style={{ marginTop: "0.2rem" }}
          px="0.5"
        >
          <Text fontWeight="bold">7:00 - 7:20 </Text>
          <Text color="#4F6913">Sin paciente </Text>
        </Stack>
        <Stack
          bgColor="#E4F4BE"
          fontSize="xx-small"
          justify="space-between"
          direction="row"
          py="0.5"
          px="0.5"
          style={{ marginTop: "0.2rem" }}
        >
          <Text fontWeight="bold">7:00 - 7:20 </Text>
          <Text color="#4F6913">Sin paciente </Text>
        </Stack>
        <Stack
          bgColor="#E4F4BE"
          fontSize="xx-small"
          justify="space-between"
          direction="row"
          py="0.5"
          px="0.5"
          style={{ marginTop: "0.2rem" }}
        >
          <Text fontWeight="bold">7:00 - 7:20 </Text>
          <Text color="#4F6913">Sin paciente </Text>
        </Stack>
      </Stack>

      <Box bgColor="#F8F8F8" p={3} m={0.5} textAlign="center"></Box>

      <Stack bgColor="#F8F8F8" m={0.5} textAlign="center">
        <Stack
          bgColor="#C5E282"
          fontSize="xx-small"
          justify="space-between"
          direction="row"
          py="0.5"
          px="0.5"
          style={{ marginTop: "0.2rem" }}
        >
          <Text fontWeight="bold">7:00 - 7:20 </Text>
        </Stack>
        <Stack
          bgColor="#C5E282"
          fontSize="xx-small"
          justify="space-between"
          direction="row"
          py="0.5"
          px="0.5"
          style={{ marginTop: "0.2rem" }}
        >
          <Text fontWeight="bold">7:00 - 7:20 </Text>
        </Stack>
        <Stack
          bgColor="#C5E282"
          fontSize="xx-small"
          justify="space-between"
          direction="row"
          py="0.5"
          px="0.5"
          style={{ marginTop: "0.2rem" }}
        >
          <Text fontWeight="bold">7:00 - 7:20 </Text>
        </Stack>
      </Stack>

      <Box bgColor="#F8F8F8" p={3} m={0.5} textAlign="center"></Box>

      <Stack bgColor="#F8F8F8" m={0.5} textAlign="center">
        <Stack
          bgColor="#C5E282"
          fontSize="xx-small"
          direction="row"
          alignItems="center"
          py="0.5"
          px="0.5"
          style={{ marginTop: "0.2rem" }}
          flex="50"
        >
          <Text fontWeight="bold">7:00 - 7:20 </Text>
        </Stack>
        <Stack
          bgColor="#C5E282"
          fontSize="xx-small"
          direction="row"
          alignItems="center"
          py="0.5"
          px="0.5"
          style={{ marginTop: "0.2rem" }}
          flex="50"
        >
          <Text fontWeight="bold">7:00 - 7:20 </Text>
        </Stack>
      </Stack>

      <Stack bgColor="#F8F8F8" m={0.5} textAlign="center">
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
            7:00 - 7:20{" "}
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
            7:00 - 7:20{" "}
          </Text>
        </Stack>
      </Stack>

      <Stack bgColor="#F8F8F8" m={0.5} textAlign="center">
        <Stack
          bgColor="#C5E282"
          fontSize="xx-small"
          direction="row"
          alignItems="center"
          py="0.5"
          px="0.5"
          style={{ marginTop: "0.2rem" }}
          flex="50"
        >
          <Text fontWeight="bold">7:00 - 7:20 </Text>
        </Stack>
        <Stack
          bgColor="#C5E282"
          fontSize="xx-small"
          direction="row"
          alignItems="center"
          py="0.5"
          px="0.5"
          style={{ marginTop: "0.2rem" }}
          flex="50"
        >
          <Text fontWeight="bold">7:00 - 7:20 </Text>
        </Stack>
      </Stack>
    </>
  );
};
