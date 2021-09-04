import React from "react";
import { Box, Heading, Stack, Text } from "@chakra-ui/layout";
import { Switch } from "@chakra-ui/react";

const TitleComponent = () => {
  return (
    <Stack pl="4" direction="row" justifyContent="space-between" my="5">
      <Box>
        <Heading as="h1" color="brand.900" fontWeight="light">
          Mantenimiento de Horarios
        </Heading>
        <Text fontSize="xs" pl="1" mt="2">
          A continuación podrás registrar o modificar los horarios de atención
          del médico
        </Text>
      </Box>
      <Stack flexDir="row" pr="4" justify="center" alignItems="flex-end">
        <Switch mr="3" />
        <Text fontSize="xs" lineHeight="6" fontWeight="bold">
          Desactivar Horario Médico
        </Text>
      </Stack>
    </Stack>
  );
};

export default TitleComponent;
