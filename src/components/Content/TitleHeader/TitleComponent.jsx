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
      <Stack
        flexDir="row"
        pr="4"
        justify="center"
        alignItems="flex-end"
        sx={{
          label: {
            "--switch-track-width": "2.7rem",
            "--switch-track-height": "1.2rem",
          },
        }}
      >
        <Switch mr="3" variant="brand" />

        <Text fontSize="xs" lineHeight="6" fontWeight="bold">
          Desactivar Horario de médico
        </Text>
      </Stack>
    </Stack>
  );
};

export default TitleComponent;
