import React from "react";
import Icon from "@chakra-ui/icon";
import { AiOutlineRead, AiOutlineProfile } from "react-icons/ai";
import { Divider, Stack, Text } from "@chakra-ui/layout";

const DescriptionTable = () => {
  return (
    <Stack px="4" direction="row" justify="space-between">
      <Stack direction="row" alignItems="center">
        <Icon as={AiOutlineRead} w={5} h={5} color="#96DD43" />
        <Text color="brand.900" fontWeight="bold">
          Horarios registrados del médico
        </Text>
      </Stack>
      <Stack direction="row" alignItems="center">
        <Icon as={AiOutlineProfile} w={3} h={3} />
        <Text color="#4D4D4F" fontSize="xs" fontWeight="bold">
          Descargar Horarios
        </Text>
        <Divider orientation="vertical" />
        <Icon as={AiOutlineProfile} w={3} h={3} />
        <Text color="#4D4D4F" fontSize="xs" fontWeight="bold">
          Ver Historial de cambios
        </Text>
      </Stack>
    </Stack>
  );
};

export default DescriptionTable;
