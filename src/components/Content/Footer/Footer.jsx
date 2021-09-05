import { Box, Divider, Stack, Text } from "@chakra-ui/layout";
import React from "react";

const Footer = () => {
  return (
    <>
      <Stack direction="row" px="4" spacing="10">
        <Stack direction="row">
          <Stack
            borderRadius="50"
            w="5"
            h="5"
            overflow="hidden"
            direction="row"
            alignItems="center"
            justify="center"
          >
            <Box bgColor="#E4F4BE" h="10" w="10" m="0"></Box>
            <Box bgColor="#C5E282" h="10" w="10" style={{ margin: 0 }}></Box>
          </Stack>
          <Text color="#4D4D4F" fontSize="sm" fontWeight="bold">
            Horario ocupado
          </Text>
        </Stack>

        <Stack direction="row">
          <Stack
            borderRadius="50"
            w="5"
            h="5"
            overflow="hidden"
            direction="row"
            alignItems="center"
            justify="center"
            bgColor="#F8F8F8"
            borderWidth="1px"
            borderColor="#C3C3C5"
          ></Stack>
          <Text color="#4D4D4F" fontSize="sm" fontWeight="bold">
            Horario disponible
          </Text>
        </Stack>

        <Stack direction="row">
          <Stack
            borderRadius="50"
            w="5"
            h="5"
            overflow="hidden"
            direction="row"
            alignItems="center"
            justify="center"
            bgColor="#DADADA"
            borderWidth="1px"
          ></Stack>
          <Text color="#4D4D4F" fontSize="sm" fontWeight="bold">
            Horario anulado
          </Text>
        </Stack>

        <Stack direction="row">
          <Stack
            borderRadius="50"
            w="5"
            h="5"
            overflow="hidden"
            direction="row"
            alignItems="center"
            justify="center"
            bgColor="#5082EE"
            borderWidth="1px"
          ></Stack>
          <Text color="#4D4D4F" fontSize="sm" fontWeight="bold">
            Horario especial
          </Text>
        </Stack>
      </Stack>

      <Divider my="12" h="0.4" w="100%" bgColor="gray.300" />
    </>
  );
};

export default Footer;
